import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AdSection from './components/AdSection';
import About from './components/About';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import { translations } from './i18n';
import './App.css';

function App() {
  const [lang, setLang] = useState('uk');

  const t = (key) => {
    return translations[lang]?.[key] || key;
  };

  return (
    <div className="app">
      <Background3D />
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <AdSection />
      <About t={t} />
      <Projects t={t} />
      <Social t={t} />
      <Footer />
    </div>
  );
}

export default App;
