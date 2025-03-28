import Aurora from '../Backgrounds/Aurora/Aurora';
import './Global.css';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import { MorphingText } from '../components/magicui/morphing-text.jsx';
import { CodeBlock } from "../components/ui/code-block.jsx";


const Ciclo = () => {
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
        <MorphingText texts={["Memoria", "Tecnica", "Ciclo", "ASM"]} />

        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Explicación del Código</h1>
            <p className="Post-content">Este programa en ensamblador NASM para la arquitectura x86 de 32 bits realiza las siguientes operaciones:
              Muestra en pantalla la palabra "Hello" seguida de un salto de línea repetidamente.
              Controla la cantidad de repeticiones utilizando un bucle (loop).
              Finaliza la ejecución utilizando int 0x80.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Para compilar y ejecutar el código ensamblador NASM en
              x86 de 32 bits, se deben seguir los siguientes pasos:</p>
            <p className='Post-content'>Ensamblaje:</p>
            <CodeBlock laguage="bash"code={'nasm -f elf32 ciclo.asm -o ciclo.o'}/>
            <p className='Post-content'>Enlazado:</p>
            <CodeBlock laguage="bash"
              code={'ld -m elf_i386 ciclo.o -o ciclo'}/>
            <p className='Post-content'>Ejecución:</p>
            <CodeBlock laguage="bash"
              code={'./ciclo'} />

          </div>
        </div>

        <div className="glass-container">
          <div className="content-right">
            <h2 className="Sub-theme">Proceso de enlazado</h2>
            <p className="Post-content">El proceso de enlazado toma el archivo objeto (ciclo.o)
              y lo convierte en un ejecutable mediante el uso de ld con la opción -m elf_i386 para producir un binario de 32 bits. </p>
            <h2 className="Sub-theme"> Instrucciones Principales Utilizadas</h2>
            <p className="Post-content">
              <span className="resaltado">mov</span>: Mueve datos entre registros o entre registros y memoria.</p>
            <p className="Post-content"><span className='resaltado'>int 0x80</span>: Llama al sistema para realizar funciones como escribir (write) o salir (exit).</p>
            <p className="Post-content"><span className='resaltado'>loop</span>: Decrementa el registro ecx y salta a la etiqueta especificada si ecx no es cero.</p>
            <p className="Post-content"><span className='resaltado'>db</span>: Define datos en la sección .data (en este caso, la palabra "Hello").</p>
            <p className='Post-content'><span className='resaltado'>push/ pop</span>Manipulan la pila para almacenar temporalmente el contador ecx y restaurarlo.</p>
          </div>
        </div>

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Secciones del Código</h2>
            <p className='Post-content'><span className='resaltado'>
              .data</span>: </p>
            <CodeBlock laguage="bash"
              code=
              {`section .data
    hello db "Hello", 10  ; Mensaje con salto de línea
    hello_len equ $ - hello
    N equ 10  ; Número de repeticiones`} />
            <p className='Post-content'><span className='resaltado'>
              .text</span> Ejección para el código ejecutable del programa.</p>
            <CodeBlock laguage="bash"
              code=
              {`section .text
    global _start
    _start:
    mov ecx, N
    .loop:
    push ecx
    mov edx, hello_len
    mov ecx, hello
    mov ebx, 1
    mov eax, 4
    int 0x80
    pop ecx
    loop .loop
    mov eax, 1
    xor ebx, ebx
    int 0x80`} />
          </div>
        </div>


        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>Este programa utiliza un bucle simple controlado
              por el registro ecx para mostrar un mensaje repetidamente.</p>
            <p className='Post-content'>
              Utiliza la llamada al sistema sys_write para mostrar el mensaje en pantalla.</p>
            <p className='Post-content'>Es compatible con sistemas operativos Linux que
              utilizan int 0x80 para llamadas al sistema.</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>No definir correctamente la longitud del mensaje (hello_len).</p>
            <p className='Post-content'>No definir correctamente el número de repeticiones (N).</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Ciclo;
