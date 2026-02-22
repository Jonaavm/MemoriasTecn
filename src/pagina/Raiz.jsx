import Aurora from '../Backgrounds/Aurora/Aurora.tsx';
import './Global.css'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx';
import { CodeBlock } from "../components/ui/code-block.jsx";

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
        <MorphingText texts={["Memoria", "Tecnica", "Raiz", "ASM + GCC"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Descripcion General</h1>
            <p className="Post-content">Este programa en ensamblador (NASM) calcula la
              raíz cuadrada de un número flotante (en este caso, 25.0) utilizando la Unidad
              de Punto Flotante (FPU) y luego imprime el resultado en la consola.
              El programa utiliza la función printf de la biblioteca estándar de C para
              formatear y mostrar el resultado.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Ensamblaje:</p>
            <CodeBlock laguage="bash"
              code=
              {`nasm -f elf32 raiz.asm -o raiz.o`}
            />
            <p className='Post-content'>
              <p className="Post-content"><span className='resaltado'>nasm</span>: Ensamblador NASM.clear</p>
              <p className="Post-content"><span className='resaltado'>-f elf32</span>: Especifica que el formato de salida es ELF de 32 bits.</p>
              <p className="Post-content"><span className='resaltado'>raiz.asm</span>: Archivo de código fuente en ensamblador.</p>
              <p className='Post-content'><span className='resaltado'>-o raiz o</span>:Archivo objeto de salida.</p>
            </p>
            <p className='Post-content'>Enlazado con GCC:</p>
            <CodeBlock laguage="bash"
              code={`gcc -m32 raiz.o -o raiz -no-pie`} />
            <p className="Post-content"><span className='resaltado'>gcc</span>: Compilador de.</p>
            <p className="Post-content"><span className='resaltado'>-m32</span>: Especifica que se debe generar un binario de 32 bits.</p>
            <p className='Post-content'><span className='resaltado'>raiz o</span>:Archivo objeto generado en el paso anterior.</p>
            <p className='Post-content'><span className='resaltado'>-o raiz</span>:Nombre del archivo ejecutable de salida.</p>
            <p className='Post-content'><span className='resaltado'>-no pie</span>: Desactiva la generación de un ejecutable independiente de la posición (Position Independent Executable).</p>
            <p className='Post-content'>Ejecución:</p>
            <CodeBlock laguage="bash"
              code={`./raiz`} />


          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.data</span>: Sección para variables sin inicializar que almacenan números y resultados.</p>
            <CodeBlock laguage="bash"
              code={`section .data
    num dd 25.0             ; Número de entrada
    fmt db "Raíz cuadrada: %lf", 10, 0  ; %lf para double`}
            />
            <p className='Post-content'><span className='resaltado'>.bss</span>: Sección para datos inicializados como mensajes y longitudes de mensajes.</p>
            <CodeBlock laguage="bash"
              code={`section .bss
    res resq 1              ; Espacio para un número de 8 bytes (double)`}
            />
            <div className="code-container">
              <p className='Post-content'>
                <span className='resaltado'>.text</span>: Sección para el código ejecutable del programa.
              </p>
              <CodeBlock laguage="bash"
                code={`section .text
    global main
    extern printf

main:
    finit                   ; Inicializar la FPU para "unidades de punto flotante"
    fld dword [num]         ; Cargar el número en la FPU
    fsqrt                   ; Calcular la raíz cuadrada
    fstp qword [res]        ; Guardar el resultado en 64 bits

    push dword [res+4]      ; Parte alta del double
    push dword [res]        ; Parte baja del double
    push fmt
    call printf
    add esp, 12             ; Limpiar la pila

    xor eax, eax
    ret`}
              />
            </div>
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Limitaciones</h2>
            <p className='Post-content'>El programa está hardcodeado para calcular la
              raíz cuadrada de 25.0. Para calcular la raíz cuadrada de otros números,
              se debe modificar el valor de num en la sección .data.ection .text</p>
            <p className='Post-content'>No maneja entradas dinámicas del usuario.</p>
            <h2 className='Sub-theme'>Consideraciones</h2>
            <p className='Post-content'>El programa está diseñado para sistemas de 32 bits.</p>
            <p className='Post-content'>Depende de la función printf de la biblioteca estándar de C.</p>
            <p className='Post-content'>El uso de -no-pie en el enlazado es necesario para evitar problemas con la generación de
              código independiente de la posición en sistemas modernos.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SumaCiclo;
