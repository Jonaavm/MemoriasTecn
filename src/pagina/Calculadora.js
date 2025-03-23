import React from 'react';
import Particles from '../Backgrounds/Particles/Particles.tsx';
import './Global.css';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx';

const Calculadora = () => {
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
        <MorphingText texts={["Memoria", "Tecnica", "Calculadora", "ASM"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Explicación del Código</h1>
            <p className="Post-content">Este programa en ensamblador NASM para la arquitectura x86 de 32 bits realiza las siguientes operaciones:
              Muestra un menú en la consola con las operaciones básicas disponibles (Suma, Resta, Multiplicación y División).
              Solicita al usuario que ingrese dos números.
              Solicita al usuario que seleccione una operación.
              Realiza la operación seleccionada y muestra el resultado.
              Finaliza la ejecución utilizando int 0x80.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Para compilar y ejecutar el código ensamblador NASM en x86 de 32 bits, se deben seguir los siguientes pasos:</p>
            <div className="glass-container">
              <p className='Post-content'>Ensamblaje:
                nasm -f elf32 calculadora.asm -o calculadora.o</p>
              <p className='Post-content'>Enlazado:
                ld -m elf_i386 calculadora.o -o calculadora</p>
              <p className='Post-content'>Ejecución:
                ./calculadora</p>
            </div>

          </div>
        </div>

        <div className="glass-container">
          <div className="content-right">
            <h2 className="Sub-theme">Proceso de enlazado</h2>
            <p className="Post-content">El proceso de enlazado toma el archivo objeto (calculadora.o) y
              lo convierte en un ejecutable mediante el uso de ld con la opción -m elf_i386 para producir un binario de 32 bits. </p>
            <h2 className="Sub-theme"> Instrucciones Principales Utilizadas</h2>
            <p className="Post-content">
              <span className="resaltado">mov</span>: Mueve datos entre registros o entre registros y memoria.</p>
            <p className="Post-content"><span className='resaltado'>int 0x80</span>: Llama al sistema para realizar funciones como escribir (write), leer (read) o salir (exit).</p>
            <p className="Post-content"><span className='resaltado'>resb</span>: Reserva bytes de memoria sin inicializar en la sección .bss.</p>
            <p className="Post-content"><span className='resaltado'>db</span>: Define datos en la sección .data (en este caso, mensajes a imprimir)</p>
            <p className='Post-content'><span className='resaltado'>equ</span>: Define constantes que representan la longitud de mensajes.</p>
            <p className='Post-content'><span className='resaltado'>cmp</span>: Compara dos valores.</p>
            <p className='Post-content'><span className='resaltado'>je</span>: Salta a una etiqueta si los valores comparados son iguales.</p>
            <p className='Post-content'><span className='resaltado'>mul y div</span>: Realizan operaciones aritméticas de multiplicación y división.</p>
          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.data</span>: S: Contiene los mensajes mostrados al usuario y mensajes de error.
              section .data
              msg1 db "Ingresa el primer número: ", 0
              msg2 db "Ingresa el segundo número: ", 0
              msg_result db "El resultado es: ", 0
              msg_error db "Operación no válida", 0</p>
            <p className='Post-content'><span className='resaltado'>.bss</span>: Almacena variables sin inicializar que contienen números ingresados y resultados.
              section .bss
              opcion resb 2
              num1 resb 2
              num2 resb 2
              resultado resb 2</p>
            <p className='Post-content'><span className='resaltado'>.text</span>    • Contiene el código ejecutable del programa.
              section .text
              global _start</p>
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>El programa convierte números ingresados como ASCII a sus valores decimales antes de realizar las operaciones aritméticas.</p>
            <p className='Post-content'> Utiliza la llamada al sistema sys_write para mostrar mensajes y resultados.</p>
            <p className='Post-content'>Soporta cuatro operaciones aritméticas: Suma, Resta, Multiplicación y División.</p>
            <p className='Post-content'>La multiplicación y la división utilizan instrucciones especiales (mul y div).</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>Intentar realizar una división por cero, lo cual causará un error de ejecución.</p>
            <p className='Post-content'>No convertir correctamente el ASCII a decimal antes de realizar las operaciones aritméticas.</p>
            <p className='Post-content'>No enlazar correctamente el archivo objeto (.o).</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Calculadora;
