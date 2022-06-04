/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */

// obtener el elemento ul del doc
let listaDos = document.createElement('ul')
listaDos.setAttribute('id','menu')
listaDos.setAttribute('class','menu')

let item1 = document.createElement('li')
item1.textContent = ('Home')
listaDos.appendChild(item1)
item1.setAttribute('class','item__menu')

let item2 = document.createElement('li')
item2.textContent = ('Products')
listaDos.appendChild(item2)
item2.setAttribute('class','item__menu')


let item3 = document.createElement('li')
item3.textContent = ('About us')
listaDos.appendChild(item3)
item3.setAttribute('class','item__menu')


let body = document.querySelector('body')
body.appendChild( listaDos )

// toDo hacerlo en un ciclo agregando los nombres a un arry


/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
 */

 let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'], 
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
]

let listaTres = document.createElement('ul')

koders.forEach((obj)=>{

})
    


/**
 * Opcional
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación 
 * 
 *   Opcional -Modulos cursados
 * 
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 * 
 */
