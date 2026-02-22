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
        <MorphingText texts={["Memoria", "Tecnica", "Suma Gcc", "ASM + GCC"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Explicación del Código</h1>
            <p className="Post-content">Este programa en ensamblador (NASM) suma dos números enteros
              (500 y 10) y luego imprime el resultado en la consola. El programa utiliza
              la función printf de la biblioteca estándar de C para formatear y mostrar el
              resultado.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>

            <p className='Post-content'>Ensamblaje:</p>
            <CodeBlock laguage="bash"
            code={`nnasm -f elf32 suma.asm -o suma.o`}/>
            <p className="Post-content"><span className='resaltado'>nasm</span>: Ensamblador NASM.</p>
            <p className="Post-content"><span className='resaltado'>-f elf32</span>: Especifica que el formato de salida es ELF de 32 bits.</p>
            <p className="Post-content"><span className='resaltado'>suma.asm</span>: Archivo de código fuente en ensamblador.</p>
            <p className="Post-content"><span className='resaltado'>-o suma.o</span>: Archivo objeto de salida.</p>

            <p className='Post-content'>Enlazado:</p>
            <CodeBlock laguage="bash"
            code=
              {`gcc -m32 suma.o -o suma -no-pie`}/>
            <p className="Post-content"><span className='resaltado'>gcc</span>: Compilador de c.</p>
            <p className="Post-content"><span className='resaltado'>-m32</span>: Especifica que se debe generar un binario de 32 bits.</p>
            <p className='Post-content'><span className='resaltado'>suma o</span>:Archivo objeto generado en el paso anterior.</p>
            <p className='Post-content'><span className='resaltado'>-o suma</span>:Nombre del archivo ejecutable de salida.</p>
            <p className='Post-content'><span className='resaltado'>-no pie</span>: Desactiva la generación de un ejecutable independiente de la posición (Position Independent Executable).</p>

            <p className='Post-content'>Ejecución:</p>
            <CodeBlock laguage="bash"
            code={`./suma`}/>


          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>.data</span>:     Contiene las variables inicializadas.
            </p>
            <CodeBlock laguage="bash"
            code={`Sección .data:
    num1: Primer número entero (500).
    num2: Segundo número entero (10).
    fmt: Cadena de formato para imprimir un entero (%d).`}
            />
            <p className='Post-content'><span className='resaltado'>.bss</span>: Reserva espacio para variables no inicializadas.</p>
            <CodeBlock laguage="bash"
            code=
              {`res: Variable de 4 bytes para almacenar el resultado de la suma.`}
            />
            <div className="code-container">
              <p className='Post-content'>
                <span className='resaltado'>.text</span>: Contiene el código ejecutable del programa.</p>
                <CodeBlock laguage="bash"
            code=
                {`section .text
    global main
    extern printf

main:
    mov eax, dword [num1]  ; Cargar num1 en eax
    add eax, dword [num2]  ; Sumar num2
    mov [res], eax         ; Guardar resultado

    push dword [res]       ; Pasar el resultado a printf
    push fmt
    call printf
    add esp, 8             ; Limpiar pila

    xor eax, eax
    ret
`}
              />
            </div>
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>Depende de la función printf de la biblioteca estándar de C.</p>
            <p className='Post-content'>El uso de -no-pie en el enlazado es necesario para evitar problemas con la generación de código independiente de la posición en sistemas modernos.</p>
            <p className='Post-content'>El programa está diseñado para sistemas de 32 bits.</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>No maneja entradas dinámicas del usuario.</p>
            <p className='Post-content'>El programa está hardcodeado para sumar los valores 500 y 10. Para sumar otros números, se deben modificar los valores de num1 y num2 en la sección .data.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SumaCiclo;
