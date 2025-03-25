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
        <MorphingText texts={["Memoria", "Tecnica", "Factorial", "ASM + GCC"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Descripcion General</h1>
            <p className="Post-content">Este programa en ensamblador NASM para la arquitectura x86 de 32 bits 
              calcula el factorial de un número entero almacenado en 
              la sección .data. El resultado se muestra en pantalla utilizando la función printf de la biblioteca estándar de C.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Este programa se compila utilizando NASM y se enlaza con gcc debido al uso de printf:</p>
            
              <p className='Post-content'>Ensamblaje:</p><pre className='code-block'>
                {`nasm -f elf32 factorial.asm -o factorial.o`}
              </pre>
              <p className='Post-content'>Enlazado:</p>
                <pre className='code-block'>
            {`gcc -m32 -o factorial factorial.o -no-pie`}</pre>
              <p className='Post-content'>Ejecución:</p>
                <pre className='code-block'> {`./factorial`}</pre>
            

          </div>
        </div>

        <div className="glass-container">
          <div className="content-right">
            <h2 className="Sub-theme">Instrucciones Principales Utilizadas</h2>
            <p className="Post-content">
              <span className="resaltado">mov</span>: Mueve datos entre registros o entre registros y memoria.</p>
            <p className="Post-content"><span className='resaltado'>cmp</span>: Compara dos valores.</p>
            <p className="Post-content"><span className='resaltado'>jle</span>: Salta a la etiqueta especificada si el resultado de la comparación es menor o igual a cero.</p>
            <p className="Post-content"><span className='resaltado'>imul</span>: Multiplica un registro por otro y almacena el resultado en eax.</p>
            <p className='Post-content'><span className='resaltado'>ret</span>: Retorna el control al sistema operativo.</p>
          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.data</span>: Contiene el número del cual se desea calcular el factorial y el mensaje de salida.</p>
            <pre className='code-block'>
              {`section .data
    num dd 5
    fmt db "Factorial: %d", 10, 0`}
            </pre>
            <p className='Post-content'><span className='resaltado'>.bss</span>: Espacio reservado para almacenar el resultado.</p>
            <pre className='code-block'>
              {`section .bss
    res resb 4`}
            </pre>
            <div className="code-container">
              <p className='Post-content'>
                <span className='resaltado'>.text</span>: Sección para el código ejecutable del programa.
              </p>
              <pre className='code-block'>
                {`section .text
    global main
    extern printf

main:
    mov eax, 1       ; Inicializar resultado en 1
    mov ecx, dword [num]  ; Cargar número
factorial_loop:
    cmp ecx, 1       ; Si ecx <= 1, termina
    jle end_loop
    imul eax, ecx    ; Multiplicar eax * ecx
    dec ecx          ; Decrementar contador
    jmp factorial_loop
end_loop:
    mov [res], eax   ; Guardar resultado
    push dword [res]
    push fmt
    call printf
    add esp, 8
    xor eax, eax
    ret`}
              </pre>
            </div>
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>Este programa utiliza un bucle decremental para calcular el factorial del número almacenado en num.</p>
            <p className='Post-content'>Utiliza printf para mostrar el resultado.</p>
            <p className='Post-content'>La instrucción imul permite realizar multiplicaciones con signos.</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>Intentar calcular el factorial de un número negativo o demasiado grande para almacenar en eax.</p>
            <p className='Post-content'>No cargar correctamente el número desde la memoria.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SumaCiclo;
