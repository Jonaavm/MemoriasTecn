import React, { useState, useEffect } from 'react';
import './App.css';
import Particles from './Backgrounds/Particles/Particles.tsx';
import TiltedCard from './Components/TiltedCard/TiltedCard.tsx';
import logo from './imagenes/logo.png'

function App() {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Cuando se haga scroll hacia abajo, se oculta el título
        setShowTitle(false);
      } else {
        setShowTitle(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="particles-container">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <img src={logo} className='App-logo' alt='logo.png'></img>

      {/* Título que desaparece al hacer scroll */}
      {showTitle && (
        <div className="title-container">
          <h1>Bienvenido a mi Blog de Notas</h1>
        </div>
      )}

      {/* Fichas Técnicas */}
      <div className="card-container">
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>}
        />

        {/* Puedes agregar más TiltedCards aquí */}
      </div>
    </div>
  );
}

export default App;
