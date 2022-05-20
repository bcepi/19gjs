//Metodos de string
// funciones
//str.nombreMetodo(p1,p2,pN)
//.toUpperCase()
//.toLowerCase()
//.substring(start, end): para substraer es necesario que sean numeros positivos
//.includes(searchElement,fromIndex)
//.slice(start,end): se pueden substraer valores ingresando numeros negativos

// let str = 'hola mundo';
// let str1 = str.substring(0,4)
// console.log(str1)


// let str = "Anita lava la tina";

// //.charAt
// let str2= str.charAt(3)
// console.log(str2) // en consola imprime la t


// --------------------------------------------------------------------
//Ejercicio 
// frase: 'Hola Koders'
let str = 'Hola Koders';

//Cuantas vocales existen en la frase
let result = str.match(/[aeiou]/gi).length;

console.log('Numero de vocales: ', result);


//Cuantos caracteres son en la frase
console.log('Numero de caracteres:', str.length);


//Cortar el string en dos
let splitstr = str.split(" ");
console.log(splitstr);


// Reemplazar todas las Vocales por *, ejemplo: * -> "h*l* k*d*rs"
let newstr= str.replace(/[aeiuo]/gi,"*");
console.log(newstr);


