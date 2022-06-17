// fetch()
// promesa 
// 1. pendiente
// 2. Resuelta / Rechazada



// peticiones GET
fetch('https://koders19gjs-default-rtdb.firebaseio.com/koders/.json')
/** al correr, esto en la consola, podemos ver la promesa pendiente y el resultado de la promesa, 
 * el cual cuenta con el parametro ok: true y un status 200, lo cual indica que la respuesta fue positiva */
.then( response => {
    // comprobamos que el estatus de la respuesta es falso, en este condicional se pregunta si es la respuesta parametro ok es diferente a true
    if (!response.ok) {
        // si es diferente a true, lanzamos un error con un mensaje:
        throw new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
    } else {
        // sino (Obtenemos el parametro ok: true), retornamos la respuesta al siguiente then
        return response.json()
    }
})
.then( (response) => {
    console.log(response)
    let template = ''
    for(koder in response) {
        let {name} = response[koder]
        template += `
            <li>${name}</li>
        `
    }
    document.querySelector('#lista__koders').innerHTML = template
}).catch( err => {
    console.log(err)
})

let newKoder = {
    age: "32",
    biography: "Lorem ipsum",
    bootcamp: "Js",
    name: "Francisco"
}

// METODO POST
// fetch( 'https://koders19gjs-default-rtdb.firebaseio.com/koders/.json', {
//     method: 'POST',
//     body: JSON.stringify(newKoder),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(( response)=> {
//     return response.json()
// })
// .then( (finalResponse) => {
//     console.log(finalResponse)
// })
// .catch( (err) => {
//     console.log(error)
// })


// METODO PATCH 

// let koderUpdated = {
//     age: "25",
//     biography: "Lorem ipsum",
//     bootcamp: "JavaScript",
//     name: "Israel"
// }
// let idKoder = "-N4e86ZCEN0r72jwM-k_"

// fetch(`https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`, {
//     method: 'PATCH',
//     body: JSON.stringify(koderUpdated),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(( response)=> {
//     return response.json()
// })
// .then( (finalResponse) => {
//     console.log(finalResponse)
// })
// .catch( (err) => {
//     console.log(error)
// })

// METODO DELETE

let idKoder = "-N4e434aFia41K6ZYzts"
fetch(`https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`, {
    method: 'DELETE'
})
.then( response => {
    // comprobamos que el estatus de la respuesta es falso
    if (!response.ok) {
        // si si, lanzamos un error con un mensaje
        let err = new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
        throw err
    } else {
        // sino, retornamos la respuesta al siguiente then
        return response.json()
    }
})
.then( (response) => {
    console.log(response)
 
}).catch( err => {
    console.log(err)
})