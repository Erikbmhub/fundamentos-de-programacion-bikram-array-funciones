//Arrays
// 1. Array vacío
const arrayVacio = [];


// 2. Números del 0 al 9
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// 3. Números pares del 0 al 9
const arrayNumerosPares = [0, 2, 4, 6, 8];


// 4. Array bidimensional
const arrayBidimensional = [
  [0, 1, 2],
  ['a', 'b', 'c']
];

//Funciones
// 5. Suma de dos números
function suma(a, b) {
  return a + b;
}
console.log(suma(5, 3)) //8 

// 6. Potenciación
function potenciacion(a, b) {
  return a ** b; 
}
console.log(potenciacion(2, 3)); // 8

// 7. Separar palabras
function separarPalabras(string) {
  return string.split(' ');
}
console.log(separarPalabras("Hola mundo")); // ["Hola", "mundo"]

// 8. Repetir un string
function repetirString(string, numero) {
  return string.repeat(numero);
}
console.log(repetirString("Hola ", 3)); // "Hola Hola Hola "    

// 9. Saber si un número es primo
function esPrimo(numero) {
  
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false   
console.log(esPrimo(2)); // true

//Mezclando Arrays y Funciones
// 10. Ordenar un array de números      
function ordenarArray(array) {
  return array.sort((a, b) => a - b);
}
console.log(ordenarArray([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9] 

// 11. Filtrar números pares de un array
function obternerPares(array) {
  return array.filter(numero => numero % 2 === 0);
}
console.log(obtenerPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]

// 12. Calcular el promedio de un array de números
function pintarArray(array) {
  return `[${array.join(', ')}]`;
}
console.log(pintarArray([0, 1, 2])); // "[0, 1, 2]"

// 13. Calcular el promedio de un array de números
function arrayMapi(array, funcion) {
  return array.map(funcion);
}
function doble(numero) {
  return numero * 2;
}

console.log(arrayMapi([1, 2, 3, 4], doble)); // [2, 4, 6, 8]

// 14. Calcular el promedio de un array de números  
function eliminarDuplicados(array) {
  return [...new Set(array)];
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

//Arrays
// 15. 
let arrayNumerosNeg = [0,-1, -2, -3, -4, -5, -6, -7, -8, -9 ];

// 16. 
let holaMundo = ["Hola", "Mundo"];

//17.
let loGuardoTodo = ['hola', 'que', 23, 42.33,'tal']

//18.
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Funciones
//19.
function multiplicador(a, b) {
  return a*b;
}
//20.
function division(a, b) {
  return a/b;
}
//21.
function esPar(numero) {
  return numero  % 2 === 0;
}
//22.
function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

const arrayFunciones = [suma, resta, multiplicacion];

//Mezclando Arrays y Funciones
//23.
function ordenarArray2(array) {
  return array.sort((a, b) => b - a);
}

//24.
function obtenerImpares(array) {
  return array.filter(numero => numero % 2 !== 0);
}

//25.
function sumarArray(array) {
  return array.reduce((suma, numero) => suma + numero, 0);
}

//26.
function multiplicarArray(array) {
  return array.reduce((multiplicacion, numero) => multiplicacion * numero, 1);
}

//Fin
