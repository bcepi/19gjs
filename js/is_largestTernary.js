//Pedir al usuario 2 numeros (a y b)
// Comprobar cual es mayor 

let num1= parseInt(prompt('Introduzca un numero'))
let num2 = parseInt(prompt('Introduzca un segundo numero'))


let result= num1 === num2 ? 
(`Los numeros son iguales`) 
: num1>num2 ? 
(`El numero ${num1} es mayor que el numero ${num2}`) 
: 
(`El numero ${num2} es mayor que el numero ${num1}`)

console.log(result);
