/**Arrow function
     * pedir al usuario una cadena de texto
     * verificar si la oracion es un palindromo
     ********* TAREA***** solucion de palindromo, remover los acentos 

     */

const esPalindromo = (str) => {
  let string = str
    .toLowerCase()
    .replace(/\s+/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z ]/g, "");
  let stringReversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringReversed += string[i];
  }

  if (string === stringReversed) {
    console.log("Es palindromo");
  } else {
    console.log("No es palindromo");
  }
};

// ******************* TAREA ************************

/**
 * Ejercicio 1 *Obligatorio
 * Realizar una funcion que reciba como parametro 1 array
 * Y devuelva un array con solo los elementos Pares de ese array
 * p.ej.
 * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
 * -> evenOnly( [10, 2, 5] ) -> [10,2]
 * -> evenOnly() -> 'Se necesita un array'
 *
 */

const evenOnly = (array) => {
  let newArray = [];

  if (array == null) {
    console.log("Se necesita un array");
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    console.log(newArray);
  }
};

/**
 * Ejercicio 2 *Opcional
 * Funcion que reciba como parametro una array de strings
 * y devuelva el primer y ultimo caracter de cada string
 * p.ej.
 * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
 */

const firstAndLast = (array) => {
  let newArray = [];
  let str = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i][1] === undefined) {
      newArray.push(array[i][0]);
    } else {
      str = array[i];
      newArray.push(`'${array[i][0]}','${array[i][str.length - 1]}'`);
    }
  }
  console.log(newArray);
};

// Utilizando el metodo de slice y agregarle una validacion de que no sea null el array

/**
 * Ejercicio 3
 * Estudiar todos los métodos de Array
 * https://www.w3schools.com/jsref/jsref_obj_array.asp
 * https://www.programiz.com/javascript/library/array
 *
 */

//Shift, remueve el primer elemento del array y modifica el array original
// let array = [1,2,3,4,5,6,7]

// let outArray = array.shift()

// console.log(outArray) // el uno
// console.log(array) // [2,3,4,5,6,7]

// ******************* TAREA ************************

/**
 * Funcion que reciba una palabra
 * Retorne la palabra invertida
 *
 * reverseStr('hola mundo')
 * -> 'odnum aloh'
 *
 * Usar solo metodos de str y array
 */

const reverseStr = (str) => {
  let toArr = str.split("");
  let reverseArr = toArr.reverse()
  let result=reverseArr.join("")
  console.log(result)
  
};


/**
 * Funcion que reciba un array de numeros
 * y devuelva el promedio de todos los elementos
 *
 * getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

let array = [1, 2, 3, 4, 5];

const promedio = (arr) => {
  let suma = 0;
  arr.forEach((num) => {
    suma += num;
  });
  let promedio = suma / arr.length;
  console.log(promedio);
};

promedio(array);

/**
 * Funcion que reciba un array de strings
 * y devuelva un array indicando si son palindromos o no
 *
 * arePalindrome( ['oso','juan', 'seres'] )
 * -> [true, false, true]
 */

/**
 * Estudiar los métodos de array
 * .filter()
 * .reduce()
 */
