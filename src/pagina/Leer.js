import React from 'react';
import Particles from '../Backgrounds/Particles/Particles.tsx';
import './Global.css'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx';

const Leer = () => {
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

      <div className="content"
        style={{ position: 'relative' }}>
        <MorphingText texts={["Memoria", "Tecnica", "Leer", "ASM"]} />

        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Explicación del Código</h1>
            <p className="Post-content">Este programa en ensamblador NASM para la arquitectura x86 de 32 bits realiza las siguientes operaciones:
              Muestra un mensaje en la consola solicitando al usuario que ingrese un número.
              Lee un número ingresado desde la entrada estándar y lo almacena en un buffer.
              Muestra el mensaje indicando el número ingresado.
              Imprime el número ingresado en la consola.
              Finaliza la ejecución utilizando int 0x80.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Para compilar y ejecutar el código ensamblador NASM en x86 de 32 bits, se deben seguir los siguientes pasos:</p>
            <div className="glass-container">
              <p className='Post-content'>Ensamblaje:
                nasm -f elf32 leer.asm -o leer.o</p>
              <p className='Post-content'>Enlazado:
                ld -m elf_i386 leer.o -o leer</p>
              <p className='Post-content'>Ejecución:
                ./leer</p>
            </div>

          </div>
        </div>

        <div className="glass-container">
          <div className="content-right">
            <h2 className="Sub-theme">Proceso de enlazado</h2>
            <p className="Post-content">El proceso de enlazado toma el archivo objeto (leer.o) y lo une con las bibliotecas necesarias para generar un ejecutable.
              En este caso, se usa ld para producir un binario de 32 bits con -m elf_i386. </p>
            <h2 className="Sub-theme"> Instrucciones Principales Utilizadas</h2>
            <p className="Post-content">
              <span className="resaltado">mov</span>: Mueve datos entre registros o entre registros y memoria.</p>
            <p className="Post-content"><span className='resaltado'>int 0x80</span>: Llama al sistema para realizar funciones como escribir (write), leer (read) o salir (exit).</p>
            <p className="Post-content"><span className='resaltado'>resb</span>: Reserva bytes de memoria sin inicializar en la sección .bss.</p>
            <p className="Post-content"><span className='resaltado'>db</span>: Define datos en la sección .data (en este caso, cadenas de texto)</p>
          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.bss</span>: Sección para variables sin inicializar.
              section .bss
              buffer resb 10  ; Buffer para almacenar el número ingresado</p>
            <p className='Post-content'><span className='resaltado'>.data</span>: Sección para datos inicializados como mensajes y saltos de línea.
              section .data
              msg db "Ingresa un número: ", 0
              msg_result db "Número ingresado: ", 0
              newline db 10, 0  ; Salto de línea</p>
            <p className='Post-content'><span className='resaltado'>.text</span>    • Contiene el código ejecutable del programa.
              section .text
              global _start</p>
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>Este programa permite capturar hasta 10 caracteres ingresados
              por el usuario y los muestra directamente en la consola sin convertirlos a un tipo numérico.</p>
            <p className='Post-content'>
              La función de lectura (syscall read) lee la entrada estándar y almacena el resultado en un
              buffer definido en la sección .bss.</p>
            <p className='Post-content'>El código es compatible con sistemas operativos Linux que utilizan int
              0x80 para llamadas al sistema.</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>No enlazar correctamente el archivo objeto (.o).</p>
            <p className='Post-content'>No definir correctamente la sección .bss o .data.</p>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Leer;
