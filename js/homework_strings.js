/**
 * Estudiar métodos de String
 * Elergir 1 para poder presentar en clase
 * https://www.programiz.com/javascript/library/string
 * https://www.w3schools.com/jsref/jsref_obj_string.asp
 */

let str = "Anita lava la tina, ";
let str3 = "es un palindromo"

//.charAt
let str2= str.charAt(3)
// console.log(str2) // en consola imprime la t

let str4= str.concat(str3);
// console.log(str4) // en consola; 'Anita lava la tina, es un palindromo

/**
 * Escribir una funcion que reciba como parametro un correo electronico
 * y que retorne lo siguiente
 * -> maskEmail('jlcc170@gmail.com') -> *******@gmail.com
 */

const maskMail = (mail) =>{
    let arrMail = mail.split('@')
    let arrDomain = arrMail.pop().toString()

    let contador =""
    
    for( let i = 0; i< arrMail[0].length; i++){
        contador += '*'
    }

    return (contador+'@'+arrDomain)
    }

maskMail('bre_kc073@hotmail.com')

/**
 * Escribir una funcion que convierta un string en formato camel case
 * p.ej
 * -> camelize("JavaScript Exercises") -> "JavaScriptExercises"
 */


/**
 * Escribir una funcion que convierta de formato camel case a formato normal
 * p.ej
 * -> uncamelize("helloWorld") -> "hello world"
 * -> uncamelize('helloWorld','-') -> "hello-world"
 * -> uncamelize('helloWorld','_') -> "hello_world"
 */


/**
 * Escribir una funcion que replique un string N veces
 * p.ej
 * -> repeat('Ha!') -> "Ha!"
 * -> repeat('Ha!', 2) -> "Ha!Ha!"
 * -> repeat('Ha!', 3) -> "Ha!Ha!Ha!"
 */


/**
 * Escribir una funcion que cuente las veces que aparece 
 * una palabra en una oración
 * p.ej
 * -> countWord('Hola mundo', 'mundo') -> 1
 * -> countWord('The quick brown fox jumps over the lazy dog', 'the') -> 2

 */