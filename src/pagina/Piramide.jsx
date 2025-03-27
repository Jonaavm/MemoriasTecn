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
        <MorphingText texts={["Memoria", "Tecnica", "Piramide", "ASM + GCC"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Descripcion General</h1>
            <p className="Post-content">Este programa en ensamblador (NASM) solicita al
              usuario un número de filas y luego genera una pirámide de asteriscos en la
              consola. El programa utiliza llamadas a funciones de la biblioteca estándar
              de C (printf y scanf) para manejar la entrada y salida de datos.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Ensamblaje:</p><CodeBlock laguage="bash"
              code=
              {`nasm -f elf32 piramide.asm -o piramide.o`}
            />
            <p className="Post-content"><span className='resaltado'>nasm</span>: Ensamblador NASM.clear</p>
            <p className="Post-content"><span className='resaltado'>-f elf32</span>: Especifica que el formato de salida es ELF de 32 bits.</p>
            <p className="Post-content"><span className='resaltado'>piramide.asm</span>: Archivo de código fuente en ensamblador.</p>
            <p className='Post-content'><span className='resaltado'>-o piramide o</span>:Archivo objeto de salida.</p>
            <p className='Post-content'>Enlazado con GCC:</p>
            <CodeBlock laguage="bash"
              code=
              {`gcc -m32 piramide.o -o piramide -no-pie`} />
            <p className="Post-content"><span className='resaltado'>gcc</span>: Compilador de.</p>
            <p className="Post-content"><span className='resaltado'>-m32</span>: Especifica que se debe generar un binario de 32 bits.</p>
            <p className='Post-content'><span className='resaltado'>piramide o</span>:Archivo objeto generado en el paso anterior.</p>
            <p className='Post-content'><span className='resaltado'>-o piramide</span>:Nombre del archivo ejecutable de salida.</p>
            <p className='Post-content'><span className='resaltado'>-no pie</span>: Desactiva la generación de un ejecutable independiente de la posición (Position Independent Executable).</p>
            <p className='Post-content'>Ejecución:</p>
            <CodeBlock laguage="bash"
              code={`./piramide`} />


          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.data</span>: Contiene las cadenas de texto y formatos utilizados para la entrada y salida.</p>
            <CodeBlock laguage="bash"
              code=
              {`Sección .data:
    Contiene las cadenas de texto y formatos utilizados para la entrada y salida.
    prompt: Mensaje para solicitar el número de filas.
    fmt_in: Formato para leer un entero (%d).
    fmt_out: Formato para imprimir un carácter (%c).
    newline: Salto de línea (\n).
    space: Espacio en blanco ( ).
    asterisk: Asterisco (*).`}
            />
            <p className='Post-content'><span className='resaltado'>.bss</span>: Sección para datos inicializados.</p>
            <CodeBlock laguage="bash"
              code=
              {`section .bss
    filas: Variable para almacenar el número de filas ingresado por el usuario.`}
            />
            <div className="code-container">
              <p className='Post-content'>
                <span className='resaltado'>.text</span>: Sección para el código ejecutable del programa.
              </p>
              <CodeBlock laguage="bash"
                code=
                {`ssection .text
    global main
    extern printf, scanf

main:
    ; Pedir el número de filas
    push prompt
    call printf
    add esp, 4

    push filas
    push fmt_in
    call scanf
    add esp, 8

    ; Cargar el número de filas en ECX
    mov ecx, [filas]
    mov edi, 1   ; Controla la cantidad de asteriscos por fila

fila_loop:
    push ecx  ; Guardar ECX en la pila

    ; Imprimir espacios antes de los asteriscos
    mov eax, [filas]
    sub eax, edi  ; Calcular los espacios a imprimir
    mov ebx, eax

espacio_loop:
    cmp ebx, 0
    je imprimir_asteriscos
    push space
    call printf
    add esp, 4
    dec ebx
    jmp espacio_loop

imprimir_asteriscos:
    mov ebx, edi  ; EBX controla la cantidad de asteriscos en la fila

asterisco_loop:
    cmp ebx, 0
    je nueva_linea
    push asterisk
    call printf
    add esp, 4
    dec ebx
    jmp asterisco_loop

nueva_linea:
    push newline
    call printf
    add esp, 4

    pop ecx   ; Restaurar ECX
    inc edi   ; Aumentar la cantidad de asteriscos en la siguiente fila
    loop fila_loop  ; Repetir hasta completar todas las filas

    xor eax, eax
    ret`}
              />
            </div>
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Limitaciones</h2>
            <p className='Post-content'>El programa no valida la entrada del usuario, por lo que ingresar un valor no numérico puede causar un comportamiento inesperado.</p>
            <h2 className='Sub-theme'>Consideraciones</h2>
            <p className='Post-content'>Agregar validación de entrada para asegurar que el usuario ingrese un número válido.</p>
            <p className='Post-content'>Permitir la generación de pirámides con diferentes caracteres o patrones.</p>
            <p className='Post-content'>Optimizar el código para reducir el número de instrucciones y mejorar el rendimiento.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SumaCiclo;
