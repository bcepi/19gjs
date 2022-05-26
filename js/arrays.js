// let newArray = [1, 2, 3, 'str', [1,2]]

// invertir un array

// let arrayToReverse = [1, 2, 3, 4];
// let newArray= []

// for( let i = arrayToReverse.length -1; i>=0 ; i--){
//     newArray.push(arrayToReverse[i])
// }

// console.log(newArray)

/**************** Metodos de array ****************
 *
 * ****arr.push(item): agrega un nuevo ite,m al array al final
 *
 * *** arr.pop(item): muta el array original, saca el ultimo elemento
 */

// *******************METODO FORHEACH()*****************

// let arr = [1,2,3,4,5]

// //arry.foreach( )

// arr.forEach((num, index)=>{
//     let multiplicacion= num * (index+1)
//     console.log(`${num} X ${index+1} = ${multiplicacion}`)
// })

/**
 * Escribir una funcion
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitaslizadas
 * capitalize(['méxicO','RIo', 'Los AngelEs'])
 * -> ['México','Rio', 'Los Angeles']
 *
 */

// let arrCities = ["méxicO", "RIo", "Los AngelEs"];

// Ejercicio

const capitalizadas = (arr) => {
  
    let arrayCapitalizadas = [];
  
  arr.forEach((currentValue) => {
    let firstLetter = currentValue.slice(0, 1).toUpperCase();
    let secondLetter = currentValue.slice(1).toLowerCase();
    let word = firstLetter + secondLetter;
    arrayCapitalizadas.push(word);
  });

  console.log(arrayCapitalizadas);
};

// capitalizadas(arrCities);





// *******************METODO MAP()*****************

let arrStr = ['hola','mundo']

/**
 * Funcion
 * getFirstLast(['hola','mundo'])
 * -> ['ha','mo']
 * .map()
 */

const getFirstLast = (arr) =>{
    arr.map((str) =>{
        console.log((`'${str.slice(0,1)}${str.slice(str.length-1)}'`)) 
    })
}

getFirstLast(arrStr)

