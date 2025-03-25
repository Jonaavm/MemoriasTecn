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
        <MorphingText texts={["Memoria", "Tecnica", "Par o Impar", "NASM"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Descripción General</h1>
            <p className="Post-content">EEste programa en ensamblador NASM para la 
              arquitectura x86 de 32 bits verifica si un número entero es par o impar 
              utilizando la operación test y muestra un mensaje en pantalla 
              indicando el resultado. Usa la función printf para mostrar mensajes.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Este programa se compila utilizando NASM y se enlaza con gcc debido al uso de printf.</p>

            <p className='Post-content'>Ensamblaje:</p><pre className='code-block'>
              {`nasm -f elf32 es_par.asm -o es_par.o`}
            </pre>
            <p className='Post-content'>Enlazado:</p>
            <pre className='code-block'>
              {`gcc -m32 es_par.o -o es_par -no-pie`}</pre>
            <p className='Post-content'>Ejecución:</p>
            <pre className='code-block'> {`./par`}</pre>


          </div>
        </div>

        <div className="glass-container">
          <div className="content-right">
            <p className="Post-content">
              <h2 className='Sub-theme'>Instrucciones Pincipales Utilizadas</h2>
              <span className="resaltado">mov</span>: Mueve datos entre registros o entre registros y memoria.</p>
            <p className="Post-content"><span className='resaltado'>test</span>: Realiza una operación AND lógica y establece las banderas sin modificar los operandos.</p>
            <p className="Post-content"><span className='resaltado'>jz</span>: Salta a la etiqueta especificada si el resultado anterior fue cero.</p>
            <p className="Post-content"><span className='resaltado'>call</span>: Llama a una función externa (printf).</p>
            <p className='Post-content'><span className='resaltado'>ret</span>: Retorna el control al sistema operativo.</p>
          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.data</span>: Contiene mensajes y el número a evaluar.</p>
            <pre className='code-block'>
              {`section .data
    num dd 10
    par db "El número es par", 10, 0
    inpar db "El número es impar", 10, 0`}
            </pre>
            <p className='Post-content'><span className='resaltado'>.data</span>: Código ejecutable que realiza la verificación.</p>
            <pre className='code-block'>
              {`section .text
    global main
    extern printf
main:
    mov eax, dword [num]
    test eax, 1         ; Comprobar si el bit menos significativo es 1
    jz print_par       ; Saltar si es par
    push inpar
    call printf
    add esp, 4
    jmp end_programa
print_par:
    push par
    call printf
    add esp, 4
end_programa:
    xor eax, eax
    ret`}
            </pre>
            
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>Este programa utiliza printf para mostrar los mensajes de resultado.</p>
            <p className='Post-content'>Se utiliza test en lugar de cmp para verificar si un número es par o impar de manera eficiente.</p>
            <p className='Post-content'>Se usa gcc para enlazar debido al uso de funciones externas estándar (printf).</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>No definir correctamente la sección .data o .text.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SumaCiclo;
