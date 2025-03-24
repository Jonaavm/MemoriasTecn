import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import TiltedCard from './Components/TiltedCard/TiltedCard.tsx';
import logo from './imagenes/logo.png';
import p1 from './imagenes/p1.png';
import p2 from './imagenes/p2.png';
import p3 from './imagenes/p3.png';
import p4 from './imagenes/p4.png';
import p5 from './imagenes/p5.png';
import p6 from './imagenes/p6.png';
import p7 from './imagenes/p7.png';
import p8 from './imagenes/p8.png';
import p9 from './imagenes/p9.png';
import p10 from './imagenes/p10.png';
import p11 from './imagenes/p11.png';
import p12 from './imagenes/p12.png';
import p13 from './imagenes/p13.png';
import Calculadora from './pagina/Calculadora.js';
import Suma from './pagina/Suma.js';
import Hola from './pagina/Hola.js';
import Leer from './pagina/Leer.js';
import Ciclo from './pagina/Ciclo.js';
import SumaCiclo from './pagina/SumaCiclo.js';
import CalculadoraG from './pagina/calcGCC.js';
import Par from './pagina/par.jsx';
import LeerGCC from './pagina/LeerGCC.js';
import SumaGcc from './pagina/SumaGcc.js';
import Piramide from './pagina/Piramide.js';
import Factorial from './pagina/factorial.js'
import Raiz from './pagina/Raiz.js';
import { BorderBeam } from './components/magicui/border-beam';
import Aurora from './Backgrounds/Aurora/Aurora.tsx';
import BlurText from './TextAnimations/BlurText/BlurText.tsx';

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
        <Route path="/calcGC" element={<CalculadoraG />} />
        <Route path='/par' element={<Par />} />
        <Route path='/raiz' element={<Raiz />} />
        <Route path='/sumagcc' element={<SumaGcc />} />
        <Route path='/piramide' element={<Piramide />} />
        <Route path='/leerGcc' element={<LeerGCC />} />
        <Route path='/factor' element={<Factorial />} />
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
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1


      }}>
        <Aurora
          colorStops={["#00BFFF", "#8A2BE2", "#00CED1"]}
          blend={1.0}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <img src={logo} className='App-logo' alt='logo.png' />

      {/* Título */}
      {showTitle && (
        <div className="title-container">
          <h1>Bienvenido a mi blog de notas</h1>
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
            rotateAmplitude={14}
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
            rotateAmplitude={14}
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
            rotateAmplitude={14}
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
            rotateAmplitude={14}
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
            rotateAmplitude={14}
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
            rotateAmplitude={14}
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

        <div onClick={() => handleCardClick('/calcGC')}
          style={{
            position: 'relative',
            borderRadius: '12px',
            border: '1px solid transparent'
          }}>
          <TiltedCard
            imageSrc={p7}
            altText="CalculadoraGCC"
            captionText="Memoria Tecnica"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={14}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="descripcion-imagen">CalculadoraGCC</p>
            }
          />
          <BorderBeam
            duration={8} size={100}
            colorFrom="#0000FF"
            colorTo="#6e028c"

          />
        </div>

        <div onClick={() => handleCardClick('/par')}
          style={{
            position: 'relative',
            borderRadius: '12px',
            border: '1px solid transparent'
          }}>
          <TiltedCard
            imageSrc={p8}
            altText="Par"
            captionText="Memoria Tecnica"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={14}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="descripcion-imagen">Par</p>
            }
          />
          <BorderBeam
            duration={8} size={100}
            colorFrom="#0000FF"
            colorTo="#6e028c"

          />
        </div>

        <div onClick={() => handleCardClick('/piramide')}
          style={{
            position: 'relative',
            borderRadius: '12px',
            border: '1px solid transparent'
          }}>
          <TiltedCard
            imageSrc={p9}
            altText="Piramide"
            captionText="Memoria Tecnica"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={14}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="descripcion-imagen">Piramide</p>
            }
          />
          <BorderBeam
            duration={8} size={100}
            colorFrom="#0000FF"
            colorTo="#6e028c"

          />
        </div>

        <div onClick={() => handleCardClick('/Factor')}
          style={{
            position: 'relative',
            borderRadius: '12px',
            border: '1px solid transparent'
          }}>
          <TiltedCard
            imageSrc={p10}
            altText="Factor"
            captionText="Memoria Tecnica"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={14}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="descripcion-imagen">Factor</p>
            }
          />
          <BorderBeam
            duration={8} size={100}
            colorFrom="#FFFFFF"
            colorTo="#6e028c"

          />
        </div>

        <div onClick={() => handleCardClick('/Raiz')}
          style={{
            position: 'relative',
            borderRadius: '12px',
            border: '1px solid transparent'
          }}>
          <TiltedCard
            imageSrc={p11}
            altText="Raiz"
            captionText="Memoria Tecnica"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={14}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="descripcion-imagen">Raiz</p>
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
            imageSrc={p12}
            altText="Hola"
            captionText="Memoria Tecnica"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={14}
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

        <div onClick={() => handleCardClick('/hola')}
          style={{
            position: 'relative',
            borderRadius: '12px',
            border: '1px solid transparent'
          }}>
          <TiltedCard
            imageSrc={p13}
            altText="Hola"
            captionText="Memoria Tecnica"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={14}
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

      </div>
    </div>
  );
}

export default App;