import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Particles from './Backgrounds/Particles/Particles.tsx';
import TiltedCard from './Components/TiltedCard/TiltedCard.tsx';
import logo from './imagenes/logo.png';
import p1 from './imagenes/p1.png';
import p2 from './imagenes/p2.png';
import p3 from './imagenes/p3.png';
import p4 from './imagenes/p4.png';
import p5 from './imagenes/p5.png';
import p6 from './imagenes/p6.png';
import Calculadora from './pagina/Calculadora.js';
import Suma from './pagina/Suma.js';
import Hola from './pagina/Hola.js';
import Leer from './pagina/Leer.js';
import Ciclo from './pagina/Ciclo.js';
import SumaCiclo from './pagina/SumaCiclo.js';
import { BorderBeam } from './components/magicui/border-beam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/suma" element={<Suma />} />
        <Route path="/hola" element={<Hola />} />
        <Route path="/leer" element={<Leer />} />
        <Route path="/ciclo" element={<Ciclo />} />
        <Route path="/suma-ciclo" element={<SumaCiclo />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [showTitle, setShowTitle] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTitle(false);
      } else {
        setShowTitle(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    
        <div className="App">
          <div className="particles-container">
            <Particles
              particleColors={['#a60ad3', '#a60ad3']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          <img src={logo} className='App-logo' alt='logo.png' />

          {/* Título */}
          {showTitle && (
            <div className="title-container">
              <h1>Bienvenido a mi blog de notas
              </h1>
            </div>
          )}

          {/* Fichas Técnicas */}
          <div className="card-container">

            <div onClick={() => handleCardClick('/suma')}
              style={{
                position: 'relative',
                borderRadius: '12px',
                border: '1px solid transparent'
              }}
              className="card-wrapper">
              <TiltedCard
                imageSrc={p1}
                altText="Suma"
                captionText="Memoria Tecnica"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="descripcion-imagen">Suma</p>
                }
              />
              <BorderBeam
                duration={8} size={100}
                colorFrom="#0000FF"
                colorTo="#6e028c"

              />
            </div>

            <div onClick={() => handleCardClick('/hola')}
              style={{
                position: 'relative',
                borderRadius: '12px',
                border: '1px solid transparent'
              }}>
              <TiltedCard
                imageSrc={p2}
                altText="Hola"
                captionText="Memoria Tecnica"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="descripcion-imagen">Hola</p>
                }
              />
              <BorderBeam
                duration={8} size={100}
                colorFrom="#0000FF"
                colorTo="#6e028c"

              />
            </div>

            <div onClick={() => handleCardClick('/leer')}
              style={{
                position: 'relative',
                borderRadius: '12px',
                border: '1px solid transparent'
              }}>
              <TiltedCard
                imageSrc={p3}
                altText="Leer"
                captionText="Memoria Tecnica"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="descripcion-imagen">Leer</p>
                }
              />
              <BorderBeam
                duration={8} size={100}
                colorFrom="#0000FF"
                colorTo="#6e028c"

              />
            </div>

            <div onClick={() => handleCardClick('/ciclo')}
              style={{
                position: 'relative',
                borderRadius: '12px',
                border: '1px solid transparent'
              }}>
              <TiltedCard
                imageSrc={p4}
                altText="Ciclo"
                captionText="Memoria Tecnica"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="descripcion-imagen">Ciclo</p>
                }
              />
              <BorderBeam
                duration={8} size={100}
                colorFrom="#0000FF"
                colorTo="#6e028c"

              />
            </div>

            <div onClick={() => handleCardClick('/suma-ciclo')}
              style={{
                position: 'relative',
                borderRadius: '12px',
                border: '1px solid transparent'
              }}>
              <TiltedCard
                imageSrc={p5}
                altText="Suma y Ciclo"
                captionText="Memoria Tecnica"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="descripcion-imagen">Suma y Ciclo</p>
                }
              />
              <BorderBeam
                duration={8} size={100}
                colorFrom="#0000FF"
                colorTo="#6e028c"

              />
            </div>

            <div onClick={() => handleCardClick('/calculadora')}
              style={{
                position: 'relative',
                borderRadius: '12px',
                border: '1px solid transparent'
              }}>
              <TiltedCard
                imageSrc={p6}
                altText="Calculadora"
                captionText="Memoria Tecnica"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="descripcion-imagen">Calculadora</p>
                }
              />
              <BorderBeam
                duration={8} size={100}
                colorFrom="#0000FF"
                colorTo="#6e028c"

              />
            </div>

          </div>
        </div>
        );
}

        export default App;