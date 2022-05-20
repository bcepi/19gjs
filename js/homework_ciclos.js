//ciclos condicionales y metodos de str
// 3 ejercicios 

// Ejercicio 1
// investigar while, y do while


// Utilizar Condicionales, Ciclo for, Metodos de string

/**
 * Ejercicio 2
 * Pedir al usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */

// let num = parseInt(prompt('Ingrese un numero'));

// for (let i = 1; i<=10; i++){
//     let multi= num * i;
//     console.log(`${num} X ${i} = ${multi}`)
// }


/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */

// let str = prompt('Introduzca una frase')
// let strVowels ="";

// let strMin=str.toLowerCase()
// for( let i = 0; i < strMin.length; i ++){
//     if(strMin[i]=='a' || strMin[i]=='e' || strMin[i]=='i' || strMin[i]=='o' || strMin[i]=='u'){
//          strVowels= strVowels + strMin[i]
//     }
// }

// console.log(strVowels)

// let strConsonants=str.replace(/[aeiou]/gi,"");
// console.log(strConsonants)


// for(let i =0; i< str.length; i++){
//     if
// }

/**
 * 
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 * 
 */
// let num = parseInt(prompt('Ingrese un numero entre 10 y 100')); 

// if(num>= 10 && num<=100){
//     for (let i=1; i <=num; i ++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// } else{
//     console.log('El numero debe ser entre 10 y 100')
// }


/**
 * 
 * Ejercicio 5. Opcional
 * Pedir el usuario una palabra
 * Invertir esa palabra e imprimirla en consola
 * p.ej. 'Hola' -> 'aloh'
 *
 */

 let str = prompt('Introduzca una frase')
 let str2 ="";
 let longitudStr= str.length-1;
 
 for( let i = longitudStr; i >= 0 ; i --){
        str2= str2 + str[i]
 }

 console.log(str2)

// investigar los ciclos while y do while