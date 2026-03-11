import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Experiencias from './pages/Experiências';
import Contato from './pages/Contato';
import PDF from './pages/PDF';
import Intro from './components/Intro';
import './assets/css/App.css';


function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const introShown = sessionStorage.getItem('introShown');
    if (!introShown) {
      setShowIntro(true);
    }
  }, []);

  const handleFinishIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
  };

  if (showIntro) {
    return <Intro onFinish={handleFinishIntro} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="experiencias" element={<Experiencias />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="pdf" element={<PDF />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

