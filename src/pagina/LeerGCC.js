import React from 'react';
import Aurora from '../Backgrounds/Aurora/Aurora.tsx';
import './Global.css'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx';
import { CodeBlock } from "../components/ui/code-block.jsx";


const SumaCiclo = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(dummyCode);
    alert("¡Código copiado al portapapeles!");
  };
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
        <MorphingText texts={["Memoria", "Tecnica", "Leer Gcc", "ASM + GCC"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Descripcion General</h1>
            <p className="Post-content">Este programa en ensamblador NASM para la
              arquitectura x86 de 32 bits permite al usuario ingresar un número entero
              desde la consola y luego muestra dicho número en pantalla utilizando las funciones estándar printf y scanf.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Este programa se compila utilizando NASM y se enlaza con gcc debido al uso de printf y scanf:</p>

            <p className='Post-content'>Ensamblaje:</p><CodeBlock laguage="bash"
              code={`nasm -f elf32 leer.asm -o leer.o`}
            />
            <p className='Post-content'>Enlazado:</p>
            <CodeBlock laguage="bash"
              code={`gcc -m32 leer.o -o leer -no-pie`} />
            <p className='Post-content'>Ejecución:</p>
            <CodeBlock laguage="bash"
              code={`./leer`} />


          </div>
        </div>



        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.data</span>: Contiene los mensajes que se mostrarán y los formatos para scanf y printf.</p>
            <CodeBlock laguage="bash"
              code=
              {`section .data
    prompt db "Ingrese un valor: ", 0
    fmt_in db "%d", 0
    fmt_out db "Valor ingresado: %d", 10, 0`}
            />
            <p className='Post-content'><span className='resaltado'>.data</span>: Espacio reservado para almacenar el número ingresado.</p>
            <pre className='code-block'>
              {`num resd 1
.text: Código ejecutable que maneja la entrada y salida de datos.`}
            </pre>
            <div className="code-container">
              <p className='Post-content'>
                <span className='resaltado'>.text</span>: Código ejecutable que maneja la entrada y salida de datos.</p>
              <pre className='code-block'>
                {`section .text
    global main
    extern printf, scanf
main:
    ; Mostrar mensaje de entrada
    push prompt
    call printf
    add esp, 4
    ; Leer el valor desde la consola
    push num
    push fmt_in
    call scanf
    add esp, 8
    ; Imprimir el valor ingresado
    push dword [num]
    push fmt_out
    call printf
    add esp, 8
    ; Terminar el programa
    xor eax, eax
    ret`}
              </pre>
            </div>
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>Este programa usa printf y scanf para mostrar mensajes e ingresar datos respectivamente.</p>
            <p className='Post-content'>Se debe enlazar con gcc para incluir las funciones estándar de C.</p>
            <p className='Post-content'>Se utiliza push y add esp, X para limpiar la pila después de las llamadas a funciones externas.</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>No enlazar correctamente con gcc.</p>
            <p className='Post-content'>No reservar suficiente espacio en .bss para almacenar los datos ingresados.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SumaCiclo;
