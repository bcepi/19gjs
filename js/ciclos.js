//Ciclos

//-------------for------------

// let num=5

// for(let i=1; i<= 10; i++){
//     let multi = num*i
//     console.log(`${num} X ${i} = ${multi}`)
// }

// // str 'hola koders'

// let str = 'hola koders'

// for( let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

//Ejercicio

//imprimir en consola cada una de las vocales de la frase 'hola koders'
// ciclos y condicionales

// let str = 'hola koders'

// for(let i = 0; i< str.length; i++){
//     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i] ==='o' || str[i] ==='u'){
//         console.log(str[i])
//     }
// }

//Ejercicio

//imprimir en consola cada una de las consonantes de la frase 'hola koders'
// ciclos y condicionales

// for(let i = 0; i< str.length; i++){
//     if(str[i]!='a' || str[i]!='e' || str[i]!='i' || str[i] !='o' || str[i] !='u'){
//         console.log(str[i])
//     }
// }

// ------------------while -------------------

// let num=5

// for(let i=1; i<= 10; i++){
//     let multi = num*i
//     console.log(`${num} X ${i} = ${multi}`)
// }

// let num=5;
// let counter = 1;

// while (counter <= 10){
//     console.log(`${num} X ${counter} = ${num * counter}`);
//     counter ++;
// }

//Ejercicio 1
// imprimir cada caracter de un string -> pasar a while
// str 'hola koders'

// let str = 'hola koders'
// let counter = 0

// while(counter<str.length){
//     console.log(str[counter]);
//     counter++
// }

//-------------Ejercicios-------------

//1. Imprimir el string invertido
// let str = 'hola koder'
// let contador = str.length-1
// let result = ""

// while(contador>=0){
//     result+=str[contador]
//     contador--
// }

// console.log(result)

//2. Imprimir en consola cada una de las vocales
// let str= 'hola koderso'
// let strVowels=""
// let contador=0

// let strMin =str.toLowerCase()

// while(contador<str.length){
// if( strMin[contador]=='a' ||
//     strMin[contador]=='e' ||
//     strMin[contador]=='i' ||
//     strMin[contador]=='o' ||
//     strMin[contador]=='u'){
//     strVowels+= strMin[contador]}
//     contador++
// }

// do{
//     if( strMin[contador]=='a' ||
//         strMin[contador]=='e' ||
//         strMin[contador]=='i' ||
//         strMin[contador]=='o' ||
//         strMin[contador]=='u'){
//         strVowels+= strMin[contador]}
//         contador++
// }while(contador<str.length)

// console.log(strVowels)

//3. Imprimir en consola cada una de las consonantes
// let str = "hola koders";
// let strConsonants = "";
// let contador = 0;

// let strMin = str.toLowerCase();

// while(contador<str.length){
// if( !(strMin[contador]=='a' ||
//     strMin[contador]=='e' ||
//     strMin[contador]=='i' ||
//     strMin[contador]=='o' ||
//     strMin[contador]=='u')){
//     strConsonants+= strMin[contador]}
//     contador++
// }

// console.log(strConsonants)

// do {
//   if (
//     !(
//       strMin[contador] == "a" ||
//       strMin[contador] == "e" ||
//       strMin[contador] == "i" ||
//       strMin[contador] == "o" ||
//       strMin[contador] == "u"
//     )
//   ) {
//     strConsonants += strMin[contador];
//   }
//   contador++;
// } while (contador < str.length);

// console.log(strConsonants);
