import React from 'react';
import Particles from '../Backgrounds/Particles/Particles.tsx';
import './Global.css';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import img1 from '../imagenes/p1.jpg'; 
import img2 from '../imagenes/p2.jpg'; 
import img3 from '../imagenes/p3.jpg'; 
import img4 from '../imagenes/p4.jpg'; 
const Ciclo = () => {
  return (
    <div className="page-container">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo.png" />
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
      
      <div className="content">
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Memoria tecnica de Ciclo.asm</h1>
            <p className="Post-content">La info comienza con </p>
          </div>
          
          <div className="content-right">
            <h2 className="Sub-theme">Proceso de enlazado</h2>
            <p className="Post-content">Comienzo con </p>
            
            <h2 className="Sub-theme"> Ejecucion y compilacion</h2>
            <p className="Post-content">Información sobr</p>
            
            <div className="image-gallery">
              <img src={img1} alt="imagen 1" className="image" />
              <img src={img2} alt="imagen 2" className="image" />
              <img src={img3} alt="imagen 3" className="image" />
              <img src={img4} alt="imagen 4" className="image" />
            </div>
          </div>
        </div>
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Memoria tecnica de Ciclo.asm</h1>
            <p className="Post-content">La info comienza con </p>
          </div>
          
          <div className="content-right">
            <h2 className="Sub-theme">Proceso de enlazado</h2>
            <p className="Post-content">Comienzo con </p>
            <h2 className="Sub-theme"> Ejecucion y compilacion</h2>
            <p className="Post-content">Información sobr</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ciclo;
