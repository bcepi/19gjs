/**
 * Objetos
 *
 * Estructura
 * creacion del objeto =
 * {
 *  propiedad: valor,
 *  key: value,
 * }
 */

let koder = {
  name: "bere",
  age: "31",
  generation: "19",
  bootcamp: "Js",
  hour: "7- 10",
  gender: "F",
  isActive: true,
  modules: {
    js: true,
    maquetado: true,
    backend: false,
    react: false,
  },
};

/**
 * Acceder a los datos de los objetos
 *
 */

let generation = koder.generation; // en consola -> '19'
let cursoBackend = koder.modules.backend; // en consola -> false
/** tambien se puede ingresar al valor del backend de la sig manera: */

let cursoBackend2 = koder["modules"]["backend"]; // en consola -> false

let presentacion = `
        Hola koders, mi nombre es ${koder.name} y tengo ${koder.age} años, 
        soy parte de la generacion ${koder.generation} 
        del bootcamp de ${koder.bootcamp}, 
        actualmente me encuentro 
        ${koder.isActive ? "activa" : "inactiva"} estudiando`;

// Creando nuevas propiedades

let car = {}

car.model = 'jetta'

//o tambien:  car['model'] = 'jetta'

let koderAssign = {}

//Usando dot notation
koderAssign.name = 'Bere'
koderAssign.age = '31'
koderAssign.generation = '19'
koderAssign.bootcamp = 'Js'
koderAssign.isActive = true

koderAssign.modules = {}

koderAssign.modules.maquetado = true
koderAssign.modules.js =  true
koderAssign.modules.backend = false
koderAssign.modules.react = false

//usando backet notation 
koderAssign['name'] = 'bere' // se reasigno el nombre de Bere linea 57 por bere, linea 71

// nota: para las variables con otra notacion como, variable = last-name, se debe mandar llamar con los braquets

let salarios = {
    'jorge': '20000',
    'lenny': '30000',
    'kike': '25000',
    'ernesto': '20000'
}

// iterar un objeto

/** ciclos/ bucles de objetos FOR IN 
 *  estructura: for(item in objetos)
 * */ 

for(elemento in salarios){
    console.log(elemento, salarios[elemento])
}

//************************
/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */
/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro 
 * Objeto de salarios
 */


//Se realizan ejercicio 1 y 2 en uno solo:
const totalSalarios= (obj) =>{
    let suma = 0;
    for(elemento in salarios){
        let salariosNumero= parseInt(salarios[elemento])
        suma += salariosNumero
    }
    return suma;
}





/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 * 
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */

 const isAnObjectOrArray = (element) => {
     if(typeof element === 'array'){
         return console.log('Es un array')
     } else if (typeof element === 'object'){
        return console.log('Es un objeto')
     } else{ return console.log('No es un array ni un objeto')}
 }

 isAnObjectOrArray()


 let objCar = {
     model: 'jetta',
     doors: 4,
     year: 2022, 
     cilindraje: 2,
     color: 'rojo'
 }

/**CRUD
C-> create
    son las actividades que hicimos, crear el objeto
R -> read 
    Se puede leer en consola
U -> Update
    se pueden reasignar los valores y actualizarlos, 
    o mediante condicionales
objCar.color ='verde'
    
D -> Delete

delete objCar.cilindraje

Ejemplo:
*/

delete objCar.cilindraje

console.log(objCar) // cilindraje ya no aparece en consola

