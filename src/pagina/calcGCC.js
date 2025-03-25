import './Global.css'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import Aurora from '../Backgrounds/Aurora/Aurora.tsx';
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
        <MorphingText texts={["Memoria", "Tecnica", "Calculadora Gcc", "ASM + GCC"]} />
        <div className="glass-container">
          <div className="content-left">
            <h1 className="Post-title">Descripción General</h1>
            <p className="Post-content">Este programa en ensamblador NASM para la
              arquitectura x86 de 32 bits permite al usuario realizar operaciones
              aritméticas básicas (suma, resta, multiplicación y división) utilizando
              funciones estándar de C (printf y scanf).El programa maneja adecuadamente errores de división por cero.</p>
          </div>
          <div className="content-right">
            <h2 className='Sub-theme'>Compilación y Ejecución</h2>
            <p className='Post-content'>Este programa se compila utilizando NASM y se enlaza con gcc debido al uso de
              funciones estándar de C (printf y scanf).</p>

            <p className='Post-content'>Ensamblaje:</p><CodeBlock laguage="bash"
                  code=
              {`nasm -f elf32 calculadora.asm -o calculadora.o`}
            />
            <p className='Post-content'>Enlazado:</p>
            <CodeBlock laguage="bash"
                  code=
              {`gcc -m32 -o calculadora calculadora.o -nostartfiles`}/>
            <p className='Post-content'>Ejecución:</p>
            <CodeBlock laguage="bash"
                  code= {`./calculadora`}/>
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
                <p className='Post-content'><span className='resaltado'>.data</span>: Contiene mensajes y formatos utilizados para printf y scanf.</p>
                <CodeBlock laguage="bash"
                  code={`Sección .data:
    num1: Primer número entero (500).
    num2: Segundo número entero (10).
    fmt: Cadena de formato para imprimir un entero (%d).`}
                />
                <p className='Post-content'><span className='resaltado'>.bss</span>: Sección para variables sin inicializar que almacenan números y resultados.</p>
                <CodeBlock laguage="bash"
                  code=
                  {`section .data
    prompt1 db "Ingrese el primer numero: ", 0
    prompt2 db "Ingrese el segundo numero: ", 0
    prompt3 db "Ingrese la operacion (+, -, *, /): ", 0
    fmt_in_num db "%d", 0
    fmt_in_char db " %c", 0
    fmt_out db "Resultado: %d", 10, 0
    error_msg db "Error: Division por cero", 10, 0`}
                />
                <div className="code-container">
                  <p className='Post-content'>
                    <span className='resaltado'>.text</span>: Contiene el código ejecutable del programa.</p>
                  <CodeBlock laguage="bash"
                    code=
                    {`section .text
    global main
    extern printf, scanf

main:
    ; Pedir primer número
    push prompt1
    call printf
    add esp, 4

    push num1
    push fmt_in_num
    call scanf
    add esp, 8

    ; Pedir segundo número
    push prompt2
    call printf
    add esp, 4

    push num2
    push fmt_in_num
    call scanf
    add esp, 8

    ; Pedir operación
    push prompt3
    call printf
    add esp, 4

    push oper
    push fmt_in_char
    call scanf
    add esp, 8

    ; Cargar operandos en registros
    mov eax, [num1]  ; Cargar primer número en EAX
    mov ebx, [num2]  ; Cargar segundo número en EBX

    ; Evaluar la operación ingresada
    mov cl, [oper]   
    cmp cl, '+'
    je sumar
    cmp cl, '-'
    je restar
    cmp cl, '*'
    je multiplicar
    cmp cl, '/'
    je dividir
    jmp fin          ; Si no es una operación válida, termina

sumar:
    add eax, ebx
    jmp guardar_resultado

restar:
    sub eax, ebx
    jmp guardar_resultado

multiplicar:
    imul ebx
    jmp guardar_resultado

dividir:
    cmp ebx, 0
    je error_division
    cdq            ; Extender signo en EDX:EAX para división
    idiv ebx
    jmp guardar_resultado

error_division:
    push error_msg
    call printf
    add esp, 4
    jmp fin

guardar_resultado:
    mov [result], eax

    ; Imprimir resultado
    push dword [result]
    push fmt_out
    call printf
    add esp, 8

fin:
    xor eax, eax
    ret
`} />
                </div>
              </div>
            </div>
          
        

        <div className='glass-container'>
          <div className='content-right'>
            <h2 className='Sub-theme'>Observaciones</h2>
            <p className='Post-content'>Este programa utiliza las funciones printf y scanf para interactuar con el usuario.</p>
            <p className='Post-content'>Se enlaza utilizando gcc debido al uso de funciones externas estándar.</p>
            <p className='Post-content'>El uso de cdq asegura que la división funcione correctamente al manejar números negativos.</p>
            <p className='Post-content'>El uso de ret permite que el programa retorne al sistema después de ejecutarse.</p>
            <h2 className='Sub-theme'>Errores Comunes</h2>
            <p className='Post-content'>No cargar correctamente los números desde la memoria antes de realizar operaciones.</p>
            <p className='Post-content'>Intentar ingresar valores no numéricos, lo cual causará errores.</p>
          </div>
        </div>
        </div>
        </div>
  );
};

export default SumaCiclo;
