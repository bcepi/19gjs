// maqueta, proceso de editar el post 
// sacar los valores de la maqueta
// enviar cambios al servidor/base de datos   

const koderEditar = (objUpdate) =>{
  console.log(objUpdate)
}

let btnEditar = document.getElementById('editKoder')
btnEditar.addEventListener('click', () => {
  
      // obtener los cambios 
      let name = document.getElementById('nombre').value
      let age = document.getElementById('edad').value
      let biography = document.getElementById('biografia').value
      let bootcamp = document.getElementById('bootcamp').value

      console.log(name, age, biography, bootcamp)

      let newKoder = {
        name: name,
        age: age,
        biography: biography,
        bootcamp: bootcamp
      }
  
      console.log(newKoder)

      // crear el objeto con los datos obtenidos del formulario 

      let idKoder = window.location.search.substring(10)
      console.log(idKoder)
  
    // hacer la edicion
    const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
      const xhttp = new XMLHttpRequest()
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
    
    ajaxXHR(koderEditar, `/koders/${idKoder}.json`, 'PATCH', newKoder)
  
    // 'https://koders19gjs-default-rtdb.firebaseio.com/koders/.json'

    } )



  