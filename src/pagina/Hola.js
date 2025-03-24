import React from 'react';
import Aurora from '../Backgrounds/Aurora/Aurora.tsx';
import './Global.css'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx';
const Hola = () => {
  return (
    <div className="page-container">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo.png" />
      </Link>

      <div className="particles-container">
        <Aurora
                        colorStops={["#00BFFF", "#8A2BE2", "#00CED1"]}
                        blend={1.0}
                        amplitude={1.0}
                        speed={0.5}
                      />
      </div>
      <div className="content"
        style={{ position: 'relative' }}>
        <MorphingText texts={["Memoria", "Tecnica", "Hola", "ASM"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Explicación del Código</h1>
            <p className="Post-content">Este programa en ensamblador NASM para la arquitectura x86 de 32 bits realiza las siguientes operaciones:
              Muestra un mensaje en la consola que dice "Hola, mundo!" seguido de un salto de línea.
              Utiliza la llamada al sistema sys_write para imprimir el mensaje en la salida estándar (stdout).
              Finaliza la ejecución utilizando la llamada al sistema sys_exit con un código de salida 0.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Para compilar y ejecutar el código ensamblador NASM en x86 de 32 bits, se deben seguir los siguientes pasos:</p>
            
              <p className='Post-content'>Ensamblaje:</p>
                <pre className='code-block'>
                nasm -f elf32 hola.asm -o hola.o</pre>
              <p className='Post-content'>Enlazado:</p>
                <pre className='code-block'>ld -m elf_i386 hola.o -o hola
              </pre>
              <p className='Post-content'>Ejecución:</p>
                <pre className='code-block'>
                ./hola</pre>
            

          </div>
        </div>

        <div className="glass-container">
          <div className="content-right">
            <h2 className="Sub-theme">Proceso de enlazado</h2>
            <p className="Post-content">El proceso de enlazado toma el archivo objeto (hola.o) y lo convierte en un ejecutable mediante el uso de ld con la opción -m elf_i386 para producir un binario de 32 bits. </p>
            <h2 className="Sub-theme"> Instrucciones Principales Utilizadas</h2>
            <p className="Post-content">
              <span className="resaltado">mov</span>: Mueve datos entre registros o entre registros y memoria.</p>
            <p className="Post-content"><span className='resaltado'>int 0x80</span>: Llama al sistema para realizar funciones como escribir (write), leer (read) o salir (exit).</p>
            <p className="Post-content"><span className='resaltado'>db</span>: Define datos en la sección .data (en este caso, cadenas de texto)</p>
            <p className="Post-content"><span className='resaltado'>equ</span>: Define constantes como la longitud del mensaje (len).</p>
          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.data</span>: Sección para variables sin inicializar.</p>
              <pre className='code-block'>
                {`section .bss
    buffer resb 10  ; Buffer para almacenar el número ingresado`}</pre>
            <p className='Post-content'><span className='resaltado'>.text</span>: Sección para el código ejecutable del programa.</p>
              <pre className='code-block'>
                {`section .text
    global _start
    _start:
    ; Mostrar mensaje
    mov eax, 4       ; syscall sys_write
    mov ebx, 1       ; stdout
    mov ecx, mensaje ; Dirección del mensaje
    mov edx, len     ; Longitud del mensaje
    int 0x80         ; Llamado al sistema

    ; Salir del programa
    mov eax, 1       ; syscall sys_exit
    xor ebx, ebx     ; Código de salida 0
    int 0x80         ; Llamado al sistema`}</pre>
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>Este programa muestra un mensaje de "Hola, mundo!" en la consola, seguido de un salto de línea.</p>
            <p className='Post-content'>La función de escritura (syscall write) imprime el mensaje almacenado en .data.</p>
            <p className='Post-content'>El código es compatible con sistemas operativos Linux que utilizan int 0x80 para llamadas al sistema.</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>No enlazar correctamente el archivo objeto (.o).</p>
            <p className='Post-content'>No definir correctamente la sección .text o .data.</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Hola;
