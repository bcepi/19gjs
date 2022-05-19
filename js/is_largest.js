//Pedir al usuario que ingrese 3 numeros
//imprimir en consola el mayor 

let num1= parseInt(prompt('Ingrese un numero', 0));
let num2= parseInt(prompt('Ingrese un segundo numero', 0));
let num3 = parseInt(prompt('Ingrese un tercer numero', 0));

if (num1>num2 && num1>num3){
    console.log(`El numero mayor de los tres numeros ingresados es el ${num1}`);
} else if (num2>num1 && num2>num3){
    console.log(`El numero mayor de los tres numeros ingresados es el ${num2}`);
}else if (num3>num1 && num3>num2){
    console.log(`El numero mayor de los tres numeros ingresados es el ${num3}`);
}else{
     console.log('Los numeros son iguales')
}