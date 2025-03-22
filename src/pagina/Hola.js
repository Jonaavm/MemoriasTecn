import React from 'react';
import Particles from '../Backgrounds/Particles/Particles.tsx';
import './Global.css'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx'; 
const Hola = () => {
  return (
    <div>
        <Link to='/'>
        <img src={logo} className='App-logo' alt='logo.png' />
        </Link>
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
      
    </div>
  );
}

export default Hola;
