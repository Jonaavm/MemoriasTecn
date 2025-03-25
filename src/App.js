import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

// Datos de las cards
const cardData = [
  {
    path: '/suma',
    imageSrc: p1,
    altText: 'Suma',
    captionText: 'Memoria Tecnica',
    description: 'Suma',
    colorFrom: '#0000FF',
    colorTo: '#6e028c'
  },
  {
    path: '/calculadora',
    imageSrc: p2,
    altText: 'Calculadora',
    captionText: 'Memoria Tecnica',
    description: 'Calculadora',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/hola',
    imageSrc: p3,
    altText: 'Hola',
    captionText: 'Memoria Tecnica',
    description: 'Hola',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/leer',
    imageSrc: p4,
    altText: 'Leer',
    captionText: 'Memoria Tecnica',
    description: 'Leer',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/ciclo',
    imageSrc: p5,
    altText: 'Ciclo',
    captionText: 'Memoria Tecnica',
    description: 'Ciclo',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/suma-ciclo',
    imageSrc: p6,
    altText: 'SumaCiclo',
    captionText: 'Memoria Tecnica',
    description: 'Suma Ciclo',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/calcGC',
    imageSrc: p7,
    altText: 'CalculadoraGCC',
    captionText: 'Memoria Tecnica',
    description: 'CalculadoraGCC',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/par',
    imageSrc: p8,
    altText: 'Par',
    captionText: 'Memoria Tecnica',
    description: 'Par',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/piramide',
    imageSrc: p9,
    altText: 'Piramide',
    captionText: 'Memoria Tecnica',
    description: 'Piramide',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/factor',
    imageSrc: p10,
    altText: 'Factor',
    captionText: 'Memoria Tecnica',
    description: 'Factor',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/raiz',
    imageSrc: p11,
    altText: 'Raiz',
    captionText: 'Memoria Tecnica',
    description: 'Raiz',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/leerGcc',
    imageSrc: p12,
    altText: 'LeerGcc',
    captionText: 'Memoria Tecnica',
    description: 'LeerGCC',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/sumagcc',
    imageSrc: p13,
    altText: 'SumaGcc',
    captionText: 'Memoria Tecnica',
    description: 'SumaGcc',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  }
];

// Componente Card reutilizable
const Card = ({ data, onClick }) => (
  <div 
    onClick={() => onClick(data.path)}
    style={{
      position: 'relative',
      borderRadius: '12px',
      border: '1px solid transparent',
      cursor: 'pointer'
    }}
    className="card-wrapper"
  >
    <TiltedCard
      imageSrc={data.imageSrc}
      altText={data.altText}
      captionText={data.captionText}
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
        <p className="descripcion-imagen">{data.description}</p>
      }
    />
    <BorderBeam
      duration={8}
      size={100}
      colorFrom={data.colorFrom}
      colorTo={data.colorTo}
    />
  </div>
);

// Componente ScrollToTop
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
    window.scrollTo(0, 0);
    const handleScroll = () => setShowTitle(window.scrollY <= 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 50);
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

      {showTitle && (
        <div className="title-container">
          <h1>Bienvenido a mi blog de notas</h1>
        </div>
      )}

      <div className="card-container">
        {cardData.map((data, index) => (
          <Card key={index} data={data} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;