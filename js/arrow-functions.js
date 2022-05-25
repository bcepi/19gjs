// str reverse
// const strReverse= (str) => {
//     let strReversed = ''
//     for(let i = str.length -1; i >=0; i--){
//         strReversed+= str[i]
//     }
//     return strReversed
// }

// console.log(strReverse('hola'))




/**
 * Funcion que pida una palabra al usuario
 * Invierta la palabra
 * y la retorne en un alert
 * reversedString('hola') -> 'aloh'
 */

//  const reversedString = () => {
//     let str = prompt("Introduzca una frase");
//     let str2 = "";
//     let longitudStr = str.length - 1;
  
//     for (let i = longitudStr; i >= 0; i--) {
//       str2 += str[i];
//     }
  
//     console.log(str2);
//   }
  


  /**
   * Funcion que pida 3 numeros como parametro
   * 2 numeros obligatorios y 1 opcional con valor de 3
   * Arroje la suma de esos 3 numeros
   * Posibles resultados
   * -> addThreeNumbers(3,4,5) -> 12
   * -> addThreeNumbers(3,4) -> 10
   * -> addThreeNumbers(3) -> 'Faltan datos'
   * -> addThreeNumbers() -> 'Faltan datos'
   */
  
//   let num1 = parseInt(prompt("Ingrese un numero"));
//   let num2 = parseInt(prompt("Ingrese un numero"));
//   let num3 = parseInt(prompt("Ingrese un numero"));
  
//   const sumaPara = (p1, p2, p3 = 3) => {
//   if(!p1 || !p2 || !p3){
//       console.log('Faltan datos')
//   }  else{
//       return p1 + p2 + p3;
  
//   } 
//   }
  
//   let sumaNumeros = sumaPara(num1, num2, num3);
  
//   console.log(sumaNumeros);
  



  /**
   * Funcion que pida al usuario los grados Centigrados en su localidad
   * Convertirlos a grados fahrenheit
   * Arrojar un alert con el resultado
   * -> convertTemp(25) -> La temperatura es de 77 ºF
   * -> convertTemp() -> 'Faltan datos'
   */
//   const tempF = () => {
//     let gradosCelsius = prompt(
//       "Introducir la temperatura en tu ciudad en grados Celcius",
//       28
//     );
  
//     //Celsius to fahrenheit
//     // celsius *9/5 +32
//     if (gradosCelsius === null) {
//       console.log("La temperatura ingresada no es valida");
//     } else {
//       let numCel = parseInt(gradosCelsius);
//       let gradosFahrenheit = numCel * (9 / 5) + 32;
//       window.alert(
//         `La temperatura en tu ciudad en grados Fahrenheit es ${gradosFahrenheit}`
//       );
//     }
//   }
  


  /**
   * Funcion que imprima las tablas del 1 al 10
   */
  
//   const tablas = (num) => {
//     for (let i = 1; i <= 10; i++) {
//       let multi = num * i;
//       console.log(`${num} X ${i} = ${multi}`);
//     }
//   }
  
  /**
   * *************** Hibrido *******************************
   * Funcion que imprima las tablas del 1 al 10 hasta el numero ingresado
   */
  
//   const tablasTodas = (tabla) => {
//       for(let i = 1; i <= tabla; i++){
//           for(let j = 1; j <=10; j++){
//               let multi = i * j;
//               console.log(`${i} X ${j} = ${multi}`);
//           }
//           console.log('')
//       }
//   }
  
  
  
  /**
   * Funcion que pida al usuario un numero (N) entre 1 y 100
   * Mandar un alert con suma de 1 a N
   * Valor por defecto 3
   * addNumberLimit() -> 6
   * addNumberLimit(4) -> 10
   * addNumberLimit(5) -> 15
   */
  
//    const suma = (num = 3) => {
//       let suma = 0;
    
//       if (num > 1 && num < 100) {
//         for (let i = 1; i <= num; i++) {
//           suma += i;
//         }
//       }
    
//       window.alert(suma);
//     }



    /**Arrow function
     * pedir al usuario una cadena de texto
     * verificar si la oracion es un palindromo
     */

    const esPalindromo = (str) =>{
        let string= str.toLowerCase().replace(/\s+/g, '')
        let stringReversed= ''

        for(let i= string.length -1; i>=0 ; i--){
            stringReversed+= string[i]
        }

        if(string === stringReversed){
            console.log('Es palindromo')
        } else{
            console.log('No es palindromo')
        }
    }

    // tarea, solucion de palindromo, remover los acentos 