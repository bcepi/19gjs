/** METODOS DE OBJETOS
 * sintaxis:
 * Object.methodName()
 */

//METODO Object.keys()

//Sin el meotod:
// let obj = {
//   name: "Bere",
//   lastName: "Cervantes",
// };

// let arryKeys = [];

// for (item in obj) {
//   arryKeys.push(item);
// }

// console.log(arryKeys);

// // Con el metodo .keys():

// let llaves = Object.keys(obj);
// console.log(llaves);

//para sacar los valores del objeto  a partir de las llaves del array
// llaves.forEach((llave) => {
//   console.log(obj[llave]);
// });

// METODO Object.assign
//sintaxis: 
// Object.assign(obj, obj)

// let obj1= {
//     name: "Bere"
// }

// let obj2= {
//     lastName: "Cervantes"
// }

// Object.assign(obj1, obj2)

// console.log(obj1)
// console.log(obj2)

//METODO Object.entries(obj)
// resultado= [key1, value2], [key2, value2], [keyn, valuen] ...
// let obj3 = {
//     name: "Bere",
//     lastName: "Cervantes",
//   };

// let resultado = Object.entries(obj3)
// console.log(resultado)

//Metodo Object.values

// let obj4 = {
//     name: "Bere",
//     lastName: "Cervantes",
//   };

//   let arrValues = Object.values(obj4)

//   console.log(arrValues)


//Metodo Object.freeze 

// let obj5 = {
//     name: "Bere",
//     lastName: "Cervantes",
//   };

// Object.freeze(obj5)

// obj5.name = 'Otro nombre'

// console.log(obj5)

// // Metodos Object. create
// let koderBase={
//     name: 'baseName',
//     lastName: 'baseLastName'
// }

// let newKoder = Object.create(koderBase)

// console.log(newKoder)

// metodo Object.seal()

// let objSeal = {
//     name: 'Kike',
//     lastName: 'Acosta' 
// }

// Object.seal(objSeal)

// objSeal.age = 30
// objSeal.name = 'juan'


// delete objSeal.lastName

// console.log(objSeal)


// let salarios = {
//     'jorge': 300,
//     'mario': 400,
//     'juan': 500,
//     'cris': 700,
// }

// let totalEmpleados = Object.keys(salarios).length
// let total = Object.values(salarios).reduce((acc,salario) => acc+ salario)

// console.log(totalEmpleados, total)



/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } ) 
 * => [ ['a', 1], ['b', 2]]
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 
 * 1 con Object.entries() y
 *  Otra con .map()
 */

// solución con .entries()
const makePairs = (object) =>  Object.entries(object)

makePairs({ a: 1, b: 2 })


// solución con .map()
const makePairsMap = (object) => {
    let arrKeys = Object.keys(object)
    return arrKeys.map((key) =>[key, object[key]])
    }

makePairsMap({ a: 1, b: 2 })

/**
 * Dado un objeto de salarios
 * Crear una funcion que retorne una lista 
 * con los salarios ordenados de menor a mayor
 * orderSalary( salarios)
 * -> [4000, 5000, 7000] 
 */


 let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000
}