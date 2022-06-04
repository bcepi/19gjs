// DOM

//  1. Selecionar por ID
document.getElementById('title')
// seleccionar por tagname
document.getElementsByTagName('h1')[0]
// seleccion por clase
document.getElementsByClassName('item') 

// selecciona elementos por tag, class, id
// seleccionar la primer coincidencia
document.querySelector('.item')
document.querySelector('#title')
document.querySelector('h1')

// selecciona elementos por tag, class, id
// seleccionar todas las coincidencias
let todosLosMenus = document.querySelectorAll('.item')




// 2. Setear/agregar, obtener, comprobar atributos

// selecionar el elemento a cambiar
let titulo = document.querySelector('.title')
titulo.setAttribute('data-id', 100)


// element.getAttribute('')
let atrirbutoP = titulo.getAttribute('data-id')
// console.log(atrirbutoP)

// comprobar si existe un atributo
titulo.hasAttribute('data-id')

/// eliminar atributos 
// element.removeAttribute(attrName)
// document.querySelector('.title').removeAttribute('id')
titulo.removeAttribute('id')

/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Quitar a todos los elementos de la lista la clase item
 * 3. Todos los elementos de la lista, agregar la clase  'list__item'
 */


// 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
let obtenerLista = document.querySelector('ul')

obtenerLista.setAttribute('class', 'lista')
obtenerLista.setAttribute('id', 'lista')

//* 2. Quitar a todos los elementos de la lista la clase item

let obtenerElementos = document.querySelectorAll('li')

let listaSinClase= obtenerElementos.forEach((lista)=>{
    return lista.removeAttribute('class')
    }) 

    //* 3. Todos los elementos de la lista, agregar la clase  'list__item'
let agregarClase = obtenerElementos.forEach((lista) => {
   return lista.setAttribute('class','list__item') 
})



// document.createElement('ul')
// ulElement.appendChild(liFirst)w
// element.textContent = 'test'

