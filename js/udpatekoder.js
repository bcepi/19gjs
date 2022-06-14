//solicitar http request al navegador 
//solicitar apertura de la base de datos de farebase, y adicional una comprobacion de la respuesta de la base de datos 
//proceso de editar el post, maqueta 
// conectar la maqueta con la base de datos   


const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
    const xhttp = new XMLHttpRequest()
    //2.- 
    xhttp.open( method, `https://koders19gjs-default-rtdb.firebaseio.com${url}`, true)
    xhttp.onload = function(data) {
        if(data.target.status >= 200 && data.target.status <= 399){
            let response = JSON.parse(data.target.response)
            callback(response)
        }
    }
    if(method === 'GET' || method === 'DELETE'){
        xhttp.send()
    } else {
      xhttp.send( JSON.stringify(obj) )
    }
  }
  

// Update Koder
console.log('SU codigo para editar un koder aquí')