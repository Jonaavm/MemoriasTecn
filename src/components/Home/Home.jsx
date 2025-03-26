import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FocusCards } from '../FocusCard/FocusCards.jsx';
import { focusCardsData } from '../../constants/cardData.js';
import Aurora from '../../Backgrounds/Aurora/Aurora';
import styles from './Home.module.css';
import logo from '../../imagenes/logo.png';

const Home = () => {
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
  };

  return (
    <div className={styles.appContainer}>
      {/* Fondo Aurora */}
      <div className={styles.background}>
        <Aurora
          colorStops={["#00BFFF", "#8A2BE2", "#00CED1"]}
          blend={1.0}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Logo */}
      <img src={logo} className="App-logo" alt="Logo" />

      {/* Título */}
      {showTitle && (
        <div className={styles.titleContainer}>
          <h1>Bienvenido a mi blog de notas</h1>
        </div>
      )}

      {/* Contenedor de las Cards */}
      <div className={styles.cardsWrapper}>
        <FocusCards 
          cards={focusCardsData} 
          onCardClick={handleCardClick} 
        />
      </div>
    </div>
  );
};

export default Home;