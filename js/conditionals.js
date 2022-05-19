//Asignaciones/ operadores
// let suma=0;
// let a=4;
// let b=5;
// let c=0

// Total = a+b;

// suma total+=5 --> 14
//resta total-=5 -->4
// multiplicacion total*=2 --> 18
//division total/=3 --> 3
//residuo total%=3 --> 0


//Condicionales

//if/else
// if(2 === '2'){ //false
//     console.log('son iguales')
// } else {//default
//     console.log('por defecto')
// }

//operador ternario 

//expresion ? true : false

// let num = 2;

// if (num % 2 === 0){
//     console.log('Es par');
// } else{
//     console.log('no es par')
// }

// num % 2 === 0 ? console.log('es par') : console.log('es impar')

// let esPar = num % 2 === 0 ? true : false;
// console.log(esPar);

//Switch 

// switch ( expresion ){
//     case value:
//         break;
//     case vale2:
//         break;
//     default:
//         break;
// }

let age = 18;

switch (age){
    case 17:
        console.log('Eres menor de edad');
        break;
    case 18:
        console.log('Eres mayor de edad');
        break
    default:
        console.log('No es una edad valida')
}