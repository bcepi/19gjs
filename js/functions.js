// ------------------- FUNCIONES ---------------------------

// Imprimir una cadena alrevez

// let strUser = prompt('Dame una palabra', 'string').toLowerCase()
// let strReversed = ''

// for(let i = strUser-1; i >= 0; i --){
//     strReversed+= strUser[i]
// }

// console.log(strReversed)

//-------------- Ejercicios

/**
 * Ejercicio 1
 * Escribir un programa que arroje la suma de los multiplos de 3, 5 y 7 que hay entre 1 y 100
 * Resolver con For, While y do While
 * entradas -> numeros 3, 5 y 7
 * proceso -> si son multiplos, sumarse
 * salida -> suma de los multiplos
 */

//Entradas
// let num1 = 3;
// let num2 = 5;
// let num3 = 7;
// let sumaTotal = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % num1 === 0 || i % num2 === 0 || i % num3 === 0) {
//     sumaTotal += i;
//   }
// }

// console.log(sumaTotal);

// //salida
// sumaTotal=sumaN1+sumaN2+sumaN3
// console.log(sumaTotal)

//funciones

function sumaMultiplos() {
  let num1 = 3;
  let num2 = 5;
  let num3 = 7;
  let sumaTotal = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 || i % num2 === 0 || i % num3 === 0) {
      sumaTotal += i;
    }
  }

  console.log(sumaTotal);
}

/**
 * Ejercicio 2
 * Pedir al usuario 1 numero entre 1 y 100
 * sumar todos los numeros entre el 1 y este numero
 * Mandar un alert con el  total
 * Resolver con For, While y do While
 * p.ej. 5
 * ->  15
 *  entrada -> un numero pedido al uisuario
 * proceso -> 1.- garantizar que ese numero este entre 1 y 100  2.- sumar los numeros entre 1 - NPaU
 * NPaU = 12
 * 1+2+3+4+5+6+7+8+9+10+11+12 = total, debe imprimirse en un alert
 * salida -> suma en un alert
 */

function sumaNumeros() {
  let num = parseInt(prompt("Ingrese un numero"));
  let suma = 0;

  if (num > 1 && num < 100) {
    for (let i = 1; i <= num; i++) {
      suma += i;
    }
  }

  window.alert(suma);
}

/**
 * Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 *
 * p.ej. 'hola kodErs'
 * ->  A -> 1
 * ->  E -> 1
 * ->  Espacios -> 1
 *  entrada -> oracion al usuario
 * proceso -> 1- separar la oracion en letras (se hace con un ciclo)
 *            2. asegurar que sea una vocal A, la E y los "" (Se hace con un condicional)
 * salida -> conteo por caracter
 */

function conteoCaracteres() {
  let strMin = prompt("Ingrese una frase").toLowerCase();
  let contadorA = 0;
  let contadorE = 0;
  let contadorEspacios = 0;

  for (let i = 0; i < strMin.length; i++) {
    if (strMin[i] === "a") {
      contadorA++;
    }
    if (strMin[i] === "e") {
      contadorE++;
    }
    if (strMin[i] === " ") {
      contadorEspacios++;
    }
  }

  console.log(
    `A -> ${contadorA} \n E -> ${contadorE} \n Espacios -> ${contadorEspacios}`
  );
}

/**
 * Ejercicio 4
 * Estudiar acerca del tema Funciones
 * ¿Qué son?
 * Parametros y argumentos de una funcion
 * Parametros de una funcion
 * Parametros opcionales
 * Parametros por defecto (default)
 *
 * Referencias
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 * https://www.programiz.com/javascript/function
 *
 */

// --------------------- FUNCIONES DE RETORNO ---------------------
/**
 * el return funciona como un brake, termina la funcion, todo lo que se declare fuera del return, no sera ejecutado
 */

// parametros
/** Ejercicio
 * pedir al usuario 3 numeros y retorne la suma de esos 3 numeros
 * los 3 numeros deben ser pasados como parametros al usuario
 */

// let num1= parseInt(prompt('Ingrese un numero'))
// let num2=parseInt(prompt('Ingrese un numero'))
// let num3=parseInt(prompt('Ingrese un numero'))

// function sumaPara(p1,p2,p3 = 1){
//     return p1+p2+p3
// }

// let sumaNumeros = sumaPara(num1, num2, num3)

// console.log(sumaNumeros)

// tarea:
// parametros por defecto
