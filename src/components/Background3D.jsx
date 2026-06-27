import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Background3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = null; // прозорий

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Параметри
    const PARTICLE_COUNT = 2000;
    const CONNECT_DISTANCE = 0.15;
    const SPEED = 0.002;
    const PULSE_SPEED = 0.5;

    // Створюємо геометрію з частинок
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const velocities = new Float32Array(PARTICLE_COUNT * 3); // швидкості для руху

    // Палітра кольорів
    const palette = [
      new THREE.Color(0x3b82f6), // синій
      new THREE.Color(0x60a5fa), // світло-синій
      new THREE.Color(0x8b5cf6), // фіолетовий
      new THREE.Color(0xec4899), // рожевий
      new THREE.Color(0x10b981), // зелений
      new THREE.Color(0xf59e0b), // жовтий
      new THREE.Color(0xef4444), // червоний
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // Випадкові позиції в кубі
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Випадковий колір з палітри
      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Розмір
      sizes[i] = 0.01 + Math.random() * 0.04;

      // Швидкість (випадковий напрямок)
      velocities[i3] = (Math.random() - 0.5) * SPEED;
      velocities[i3 + 1] = (Math.random() - 0.5) * SPEED;
      velocities[i3 + 2] = (Math.random() - 0.5) * SPEED;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Лінії між частинками
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(PARTICLE_COUNT * 3 * 2); // максимум
    let lineCount = 0;

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.15,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Зберігаємо посилання на позиції для швидкого доступу
    const posAttr = particlesGeometry.attributes.position;
    const sizeAttr = particlesGeometry.attributes.size;

    // Анімація
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const positionsArray = posAttr.array;
      const sizesArray = sizeAttr.array;

      // Оновлюємо позиції частинок
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        // Рух
        positionsArray[i3] += velocities[i3];
        positionsArray[i3 + 1] += velocities[i3 + 1];
        positionsArray[i3 + 2] += velocities[i3 + 2];

        // Відбивання від меж куба
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

        // Пульсація розміру
        const baseSize = 0.01 + (i % 10) * 0.004; // різні базові розміри
        const pulse = Math.sin(Date.now() * PULSE_SPEED + i) * 0.005;
        sizesArray[i] = Math.max(0.005, baseSize + pulse);
      }

      posAttr.needsUpdate = true;
      sizeAttr.needsUpdate = true;

      // Оновлюємо лінії
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

      // Оновлюємо геометрію ліній
      if (lineGeometry.attributes.position) {
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.setDrawRange(0, lineCount * 2);
      }

      // Обертання всієї сцени (повільне)
      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    // Обробка ресайзу
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Реакція на рух миші
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Невелике зміщення камери
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
