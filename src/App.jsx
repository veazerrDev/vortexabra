import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default Appimport React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';
import translations from './i18n';
import './App.css';

function App() {
  const [lang, setLang] = useState('uk');

  const t = (key) => {
    return translations[lang]?.[key] || key;
  };

  return (
    <div className="app">
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Social t={t} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
