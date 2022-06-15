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