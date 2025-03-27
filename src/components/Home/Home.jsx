import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FocusCards } from '../FocusCard/FocusCards.jsx';
import { focusCardsData } from '../../constants/cardData.jsx';
import Aurora from '../../Backgrounds/Aurora/Aurora';
import styles from './Home.module.css';
import logo from '../../imagenes/logo.png';
import { TypingAnimation } from "../magicui/typing-animation.jsx";
import nasm from '../../imagenes/nasmL.png';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

const Home = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Inicializa AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
      });
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTitle(scrollY <= 50);
      setShowContent(scrollY > 100);
      setShowCards(scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.appContainer}>
      {/* Fondo Aurora (sin animación) */}
      <div className={styles.background}>
        <Aurora
          colorStops={["#00BFFF", "#8A2BE2", "#00CED1"]}
          blend={1.0}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Logo con animación fade-down */}
      <img
        src={logo}
        className="App-logo"
        alt="Logo"
        data-aos="fade-down"
        data-aos-delay="100"
      />

      {showTitle && (
        <div className={styles.titleContainer}>
          <TypingAnimation
            children="Bienvenido a mi blog de notas"
            duration={100}
            delay={500}
            className={styles.title}
          />
        </div>
      )}

      <div className={styles.mainContent}>
        <div className={`${styles.content} ${showContent ? styles.visible : styles.hidden}`}>
          <div
            className={styles.glassContainer}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className={styles.postTitle}>NASM</h1>
            <p className={styles.postContent}>
              El <span className={styles.resaltado}>Netwide Assembler (NASM)</span> es un ensamblador libre y de código abierto para la arquitectura x86, utilizado para escribir programas en lenguaje ensamblador.
            </p>
            <div className={styles.imageGallery}>
              <img
                src={nasm}
                alt="Logo NASM"
                className={`${styles.image} ${styles.nasmImage}`}
              />
            </div>
          </div>

          <div
            className={styles.glassContainer}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2 className={styles.subTheme}>Características Principales</h2>
            <p className={styles.postContent}>NASM es conocido por su:</p>
            <ul className={styles.postContent}>
              <li>Sintaxis <span className={styles.resaltado}>Intel</span> en lugar de AT&T</li>
              <li>Portabilidad entre diferentes sistemas operativos</li>
              <li>Capacidad para generar múltiples formatos de salida (bin, obj, elf, etc.)</li>
              <li>Rico conjunto de macros y directivas</li>
              <li>Optimizaciones para código de alto rendimiento</li>
            </ul>
          </div>
          <div className={styles.glassContainer}
            data-aos="fade-left"
            data-aos-delay="400">
            <h2 className={styles.subTheme}>Ejemplo Básico</h2>
            <p className={styles.postContent}>Un ejemplo simple para Linux x86_64:</p>
            <div className={styles.codeContainer}>
              <pre className={styles.codeBlock}>
                <code>
                  section .data<br />
                  {"  "}msg     db      'Hola, mundo!', 0xA<br />
                  {"  "}len     equ     $ - msg<br />
                  <br />
                  section .text<br />
                  {"  "}global _start<br />
                  <br />
                  _start:<br />
                  {"  "}<span className={styles.comment}>; Escribir el mensaje</span><br />
                  {"  "}mov     <span className={styles.register}>rax</span>, 1          <span className={styles.comment}>; sys_write</span><br />
                  {"  "}mov     <span className={styles.register}>rdi</span>, 1          <span className={styles.comment}>; stdout</span><br />
                  {"  "}mov     <span className={styles.register}>rsi</span>, msg<br />
                  {"  "}mov     <span className={styles.register}>rdx</span>, len<br />
                  {"  "}syscall<br />
                  <br />
                  {"  "}<span className={styles.comment}>; Salir</span><br />
                  {"  "}mov     <span className={styles.register}>rax</span>, 60         <span className={styles.comment}>; sys_exit</span><br />
                  {"  "}mov     <span className={styles.register}>rdi</span>, 0          <span className={styles.comment}>; código de salida</span><br />
                  {"  "}syscall
                </code>
              </pre>
            </div>
          </div>
          <div
            className={styles.glassContainer}
            data-aos="fade-left"
            data-aos-delay="400"
          ><h2 className={styles.subTheme}>Ventajas de NASM</h2>
            <p className={styles.postContent}>NASM ofrece varias ventajas:</p>
            <ul className={styles.postContent}>
              <li>Más flexible que MASM o TASM</li>
              <li>Documentación clara y completa</li>
              <li>Actualizaciones constantes</li>
              <li>Gran comunidad de usuarios</li>
              <li>Ideal para programación de bajo nivel</li>
            </ul>

            <h2 className={styles.subTheme}>Instalación de NASM</h2>
            <p className={styles.postContent}>Para instalar NASM:</p>
            <div className={styles.codeContainer}>
              <pre className={styles.codeBlock}>
                <code>
                  <span className={styles.comment}># Linux (Debian/Ubuntu)</span><br />
                  sudo apt-get install nasm<br />
                  <br />
                  <span className={styles.comment}># macOS (Homebrew)</span><br />
                  brew install nasm<br />
                  <br />
                  <span className={styles.comment}># Windows</span><br />
                  <span className={styles.comment}># Descargar de: https://www.nasm.us/</span>
                </code>
              </pre>
            </div>
            <h2 className={styles.subTheme}>Uso Básico</h2>
            <p className={styles.postContent}>Ensamblar y enlazar:</p>
            <div className={styles.codeContainer}>
              <pre className={styles.codeBlock}>
                <code>
                  <span className={styles.comment}># Ensamblar</span><br />
                  nasm -f elf64 programa.asm -o programa.o<br />
                  <br />
                  <span className={styles.comment}># Enlazar (Linux)</span><br />
                  ld programa.o -o programa<br />
                  <br />
                  <span className={styles.comment}># Ejecutar</span><br />
                  ./programa
                </code>
              </pre>
            </div>
          </div>
          <div className={styles.glassContainer}>
            <h2 className={styles.subTheme}>Recursos Adicionales</h2>
            <p className={styles.postContent}>Para aprender más:</p>
            <ul className={styles.postContent}>
              <li><a href="https://www.nasm.us/docs.php" className={styles.resaltado}>Documentación oficial</a></li>
              <li><a href="https://asmtutor.com/" className={styles.resaltado}>ASM Tutor</a> - Tutoriales</li>
              <li>Libro: <span className={styles.resaltado}>"Programming from the Ground Up"</span></li>
              <li><a href="https://github.com/0xAX/asm" className={styles.resaltado}>Recursos en GitHub</a></li>
            </ul>
          </div>
          <div
          className={styles.glassContainer}
          data-aos="flip-up"
          data-aos-delay="600"
        >
          <h1 className={styles.postTitle}>Codigos NASM</h1>
        </div>
        </div>
    
        

        <div
          className={`${styles.cardsWrapper} ${showCards ? styles.visible : styles.hidden}`}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <FocusCards
            cards={focusCardsData}
            onCardClick={handleCardClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;