import p1 from '../imagenes/c1.png';
import p2 from '../imagenes/c2.png';
import p3 from '../imagenes/c3.png';
import p4 from '../imagenes/c4.png';
import p5 from '../imagenes/c5.png';
import p6 from '../imagenes/c15.png';
import p7 from '../imagenes/c14.png';
import p8 from '../imagenes/c8.png';
import p9 from '../imagenes/c6.png';
import p10 from '../imagenes/c10.png';
import p11 from '../imagenes/c7.png';
import p12 from '../imagenes/c12.png';
import p13 from '../imagenes/c13.png';


export const cardData = [
  {
    path: '/suma',
    imageSrc: p1,
    altText: 'Suma',
    captionText: 'Memoria Tecnica',
    description: 'Operación Suma',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/calculadora',
    imageSrc: p2,
    altText: 'Calculadora',
    captionText: 'Memoria Tecnica',
    description: 'Calculadora Aritmética',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/hola',
    imageSrc: p3,
    altText: 'Hola',
    description: 'Hola ASM',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/leer',
    imageSrc: p4,
    altText: 'Leer',
    description: 'Lectura de Datos',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/ciclo',
    imageSrc: p5,
    altText: 'Ciclo',
    description: 'Estructuras de Control',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/suma-ciclo',
    imageSrc: p6,
    altText: 'SumaCiclo',
    description: 'Suma con Iteración',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/calcGC',
    imageSrc: p7,
    altText: 'CalculadoraGCC',
    description: 'Calculadora Avanzada',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/par',
    imageSrc: p8,
    altText: 'Par',
    description: 'Números Pares',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/piramide',
    imageSrc: p9,
    altText: 'Piramide',
    description: 'Patrón Piramidal',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/factor',
    imageSrc: p10,
    altText: 'Factor',
    description: 'Cálculo Factorial',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/raiz',
    imageSrc: p11,
    altText: 'Raiz',
    description: 'Raíz Cuadrada',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/leerGcc',
    imageSrc: p12,
    altText: 'LeerGcc',
    description: 'Lectura con GCC',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  },
  {
    path: '/sumagcc',
    imageSrc: p13,
    altText: 'SumaGcc',
    description: 'Suma con GCC',
    colorFrom: 'rgba(0, 0, 255, 0.3)',
    colorTo: 'rgba(110, 2, 140, 0.3)'
  }

];

export const focusCardsData = cardData.map(card => ({
  title: card.description,
  src: card.imageSrc,
  path: card.path,
  description: card.altText,
  colorFrom: card.colorFrom,
  colorTo: card.colorTo
}));

export const appImages = {
  logo
};

export default cardData;