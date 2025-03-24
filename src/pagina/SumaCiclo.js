import React from 'react';
import Aurora from '../Backgrounds/Aurora/Aurora.tsx';
import './Global.css'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx';


const SumaCiclo = () => {
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
        <MorphingText texts={["Memoria", "Tecnica", "Suma con Ciclo", "ASM"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Explicación del Código</h1>
            <p className="Post-content">Este programa en ensamblador NASM para la arquitectura x86 de 32 bits realiza las siguientes operaciones:
              Solicita al usuario que ingrese dos números.
              Convierte los números ingresados de ASCII a valores numéricos.
              Suma los dos números y almacena el resultado.
              Muestra el resultado en pantalla.
              Usa el resultado de la suma como un contador para imprimir el mensaje "Hello" repetidamente.
              Finaliza la ejecución utilizando int 0x80.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Para compilar y ejecutar el código ensamblador NASM en x86 de 32 bits, se deben seguir los siguientes pasos:</p>

            <p className='Post-content'>Ensamblaje:</p><pre className='code-block'>
              {`nasm -f elf32 programa.asm -o programa.o`}
            </pre>
            <p className='Post-content'>Enlazado:</p>
            <pre className='code-block'>
              {`ld -m elf_i386 programa.o -o programa`}</pre>
            <p className='Post-content'>Ejecución:</p>
            <pre className='code-block'> {`./programa`}</pre>


          </div>
        </div>

        <div className="glass-container">
          <div className="content-right">
            <h2 className="Sub-theme">Proceso de enlazado</h2>
            <p className="Post-content">El proceso de enlazado toma el archivo objeto (programa.o) y lo convierte en
              un ejecutable mediante el uso de ld con la opción -m elf_i386 para producir un binario de 32 bits.</p>
            <p className="Post-content">
              <span className="resaltado">mov</span>: Mueve datos entre registros o entre registros y memoria.</p>
            <p className="Post-content"><span className='resaltado'>int 0x80</span>: Llama al sistema para realizar funciones como escribir (write), leer (read) o salir (exit).</p>
            <p className="Post-content"><span className='resaltado'>resb</span>: Reserva bytes de memoria sin inicializar en la sección .bss.</p>
            <p className="Post-content"><span className='resaltado'>db</span>: Define datos en la sección .data (en este caso, mensajes a imprimir).</p>
            <p className='Post-content'><span className='resaltado'>loop</span>: Controla la repetición de la impresión del mensaje "Hello" según el resultado de la suma.</p>
            <p className='Post-content'><span className='resaltado'>sub, add</span>: Realizan operaciones aritméticas y conversiones entre ASCII y números.</p>
          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.bss</span>: Sección para variables sin inicializar que almacenan números y resultados.</p>
            <pre className='code-block'>
              {`section .bss
    num1 resb 1
    num2 resb 1
    resultado resb 1`}
            </pre>
            <p className='Post-content'><span className='resaltado'>.data</span>: Sección para datos inicializados como mensajes y longitudes de mensajes.</p>
            <pre className='code-block'>
              {`section .data
    msg db "Ingresa un número: ", 0
    msg_result db "Número ingresado: ", 0
    newline db 10, 0  ; Salto de línea`}
            </pre>            
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>El programa convierte los números ingresados de ASCII a sus valores numéricos antes de realizar la suma.</p>
            <p className='Post-content'>Utiliza la llamada al sistema sys_write para mostrar mensajes y resultados.</p>
            <p className='Post-content'>Utiliza el resultado de la suma para imprimir el mensaje "Hello" repetidamente usando un bucle loop.</p>
            <p className='Post-content'>Es compatible con sistemas operativos Linux que utilizan int 0x80 para llamadas al sistema.</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>No realizar la conversión correcta de ASCII a números antes de realizar la suma.</p>
            <p className='Post-content'>Intentar ingresar valores no numéricos, lo cual causará errores.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SumaCiclo;
