import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Background3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Параметри
    const PARTICLE_COUNT = 300;
    const CONNECT_DISTANCE = 0.3;
    const SPEED = 0.002;
    const PULSE_SPEED = 0.5;

    // Створюємо текстуру планети (коло з градієнтом)
    const createPlanetTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      // Градієнт
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, '#ffaa00');
      gradient.addColorStop(0.3, '#ff6600');
      gradient.addColorStop(0.6, '#cc3300');
      gradient.addColorStop(1, '#330000');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.fill();

      // Додамо кільця (опціонально)
      ctx.strokeStyle = '#ffcc00';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(32, 32, 28, 10, 0, 0, Math.PI * 2);
      ctx.stroke();

      return new THREE.CanvasTexture(canvas);
    };

    const planetTexture = createPlanetTexture();

    // Створюємо геометрію з частинок
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);

    // Палітра кольорів (для різних планет)
    const palette = [
      new THREE.Color(0xffaa00),
      new THREE.Color(0xff6600),
      new THREE.Color(0xcc3300),
      new THREE.Color(0x88aa00),
      new THREE.Color(0x4488ff),
      new THREE.Color(0xaa44ff),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = 0.05 + Math.random() * 0.1;

      velocities[i3] = (Math.random() - 0.5) * SPEED;
      velocities[i3 + 1] = (Math.random() - 0.5) * SPEED;
      velocities[i3 + 2] = (Math.random() - 0.5) * SPEED;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      map: planetTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Лінії між частинками (опціонально)
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(PARTICLE_COUNT * 3 * 2);
    let lineCount = 0;

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    const posAttr = particlesGeometry.attributes.position;
    const sizeAttr = particlesGeometry.attributes.size;

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const positionsArray = posAttr.array;
      const sizesArray = sizeAttr.array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        positionsArray[i3] += velocities[i3];
        positionsArray[i3 + 1] += velocities[i3 + 1];
        positionsArray[i3 + 2] += velocities[i3 + 2];

        const bound = 5;
        for (let axis = 0; axis < 3; axis++) {
          if (positionsArray[i3 + axis] > bound) {
            positionsArray[i3 + axis] = bound;
            velocities[i3 + axis] *= -1;
          } else if (positionsArray[i3 + axis] < -bound) {
            positionsArray[i3 + axis] = -bound;
            velocities[i3 + axis] *= -1;
          }
        }

        const baseSize = 0.05 + (i % 10) * 0.01;
        const pulse = Math.sin(Date.now() * PULSE_SPEED + i) * 0.02;
        sizesArray[i] = Math.max(0.02, baseSize + pulse);
      }

      posAttr.needsUpdate = true;
      sizeAttr.needsUpdate = true;

      // Лінії
      lineCount = 0;
      const linePosArray = lineGeometry.attributes.position?.array;
      if (linePosArray) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const i3 = i * 3;
          const xi = positionsArray[i3];
          const yi = positionsArray[i3 + 1];
          const zi = positionsArray[i3 + 2];

          for (let j = i + 1; j < PARTICLE_COUNT; j++) {
            const j3 = j * 3;
            const dx = xi - positionsArray[j3];
            const dy = yi - positionsArray[j3 + 1];
            const dz = zi - positionsArray[j3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < CONNECT_DISTANCE) {
              if (lineCount * 6 + 5 < linePosArray.length) {
                const idx = lineCount * 6;
                linePosArray[idx] = xi;
                linePosArray[idx + 1] = yi;
                linePosArray[idx + 2] = zi;
                linePosArray[idx + 3] = positionsArray[j3];
                linePosArray[idx + 4] = positionsArray[j3 + 1];
                linePosArray[idx + 5] = positionsArray[j3 + 2];
                lineCount++;
              }
            }
          }
        }
      }

      if (lineGeometry.attributes.position) {
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.setDrawRange(0, lineCount * 2);
      }

      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}

export default Background3D;
