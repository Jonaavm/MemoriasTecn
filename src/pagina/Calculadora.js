import React from 'react';
import Aurora from '../Backgrounds/Aurora/Aurora.tsx';
import './Global.css';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx';
import { CodeBlock } from "../components/ui/code-block.jsx";


const Calculadora = () => {
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
            <p className='Post-content'>Ensamblaje:</p><pre className='code-block'>
              nasm -f elf32 calculadora.asm -o calculadora.o</pre>
            <p className='Post-content'>Enlazado:</p><pre className='code-block'>
              ld -m elf_i386 calculadora.o -o calculadora</pre>
            <p className='Post-content'>Ejecución:</p>
              <pre className='code-block'>./calculadora</pre>


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
