//Ciclos

//for

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

let str = 'hola koders'

// for(let i = 0; i< str.length; i++){
//     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i] ==='o' || str[i] ==='u'){
//         console.log(str[i])
//     }
// }

//Ejercicio 

//imprimir en consola cada una de las consonantes de la frase 'hola koders'
// ciclos y condicionales


for(let i = 0; i< str.length; i++){
    if(str[i]!='a' || str[i]!='e' || str[i]!='i' || str[i] !='o' || str[i] !='u'){
        console.log(str[i])
    }
}