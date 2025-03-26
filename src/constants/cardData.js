import React from 'react';
import logo from '../imagenes/logo.png'; // Importación directa del logo

// Importación directa de todas las imágenes (método más fiable)
import p1 from '../imagenes/p1.png';
import p2 from '../imagenes/p2.png';
import p3 from '../imagenes/p3.png';
import p4 from '../imagenes/p4.png';
import p5 from '../imagenes/p5.png';
import p6 from '../imagenes/p6.png';
import p7 from '../imagenes/p7.png';
import p8 from '../imagenes/p8.png';
import p9 from '../imagenes/p9.png';
import p10 from '../imagenes/p10.png';
import p11 from '../imagenes/p11.png';
import p12 from '../imagenes/p12.png';
import p13 from '../imagenes/p13.png';


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
    colorFrom: 'rgba(255, 0, 0, 0.3)',
    colorTo: 'rgba(255, 165, 0, 0.3)'
  },
  {
    path: '/hola',
    imageSrc: p3,
    altText: 'Hola',
    description: 'Hola ASM',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/leer',
    imageSrc: p4,
    altText: 'Leer',
    description: 'Lectura de Datos',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/ciclo',
    imageSrc: p5,
    altText: 'Ciclo',
    description: 'Estructuras de Control',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/suma-ciclo',
    imageSrc: p6,
    altText: 'SumaCiclo',
    description: 'Suma con Iteración',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/calcGC',
    imageSrc: p7,
    altText: 'CalculadoraGCC',
    description: 'Calculadora Avanzada',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/par',
    imageSrc: p8,
    altText: 'Par',
    description: 'Números Pares',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/piramide',
    imageSrc: p9,
    altText: 'Piramide',
    description: 'Patrón Piramidal',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/factor',
    imageSrc: p10,
    altText: 'Factor',
    description: 'Cálculo Factorial',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/raiz',
    imageSrc: p11,
    altText: 'Raiz',
    description: 'Raíz Cuadrada',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/leerGcc',
    imageSrc: p12,
    altText: 'LeerGcc',
    description: 'Lectura con GCC',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
  },
  {
    path: '/sumagcc',
    imageSrc: p13,
    altText: 'SumaGcc',
    description: 'Suma con GCC',
    colorFrom: '#FF0000',
    colorTo: '#FFA500'
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

// Exportación de imágenes
export const appImages = {
  logo
};

export default cardData;