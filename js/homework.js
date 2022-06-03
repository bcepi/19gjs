// Ejercicio
/**
 * Del siguiente objeto
 * Realizar una función que 
 * 1. Calcule el numero de empleados
 * 2. Obtenga el total a pagar
 * employesAndTotal( { 'Albert': 50000, 'jorge': 50000 })
 * -> Son 3 empleados y el total es 100000
 */

 let salarios = {
    'juan': 30000,
    'Albert': 50000,
    'jorge': 50000
}

const employesAndTotal = ( obj ) => {
    let suma = 0
    let contador = 0

    for(elemento in obj){
        suma += obj[elemento]
        contador ++
    }
    return console.log(` Son ${contador} empleados y el total de los salarios es ${suma}`)
}

employesAndTotal(salarios)


/**
 * Ejercicio 2.
 * Dado un objeto inicial, hacer los siguientes puntos 
 * 
 * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
 * 2. Cambiar el nivel a 4
 * 3. Eliminar la propiedad avatar
 * 4. Agregar una nueva propiedad de edad y poner el valor de 30
 * 5. Imprimir en consola todos los lenguajes dominados
 * 6. Clonar el objeto en uno nuevo
 * 7. Imprimir en consola el nuevo objeto
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

let koder = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
}

// * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
    koder.languages = ["JavaScript", "Python", "Ruby", 'Go']
// * 2. Cambiar el nivel a 4
    koder.level = 4
// * 3. Eliminar la propiedad avatar
    delete koder.avatar
// * 4. Agregar una nueva propiedad de edad y poner el valor de 30
    koder.edad = 30
// * 5. Imprimir en consola todos los lenguajes dominados
    console.log(koder.languages)
// * 6. Clonar el objeto en uno nuevo
    let koder2 = koder
// * 7. Imprimir en consola el nuevo objeto
    console.log(koder2)

/**
 * Estudiar los metodos de objetos
 * https://www.w3schools.com/js/js_object_methods.asp
 * https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript
 * https://www.programiz.com/javascript/library/object/assign
 * 
 */

// Metodo object.freeze()
// previene la modificacion de las propiedades y el valor de un objeto