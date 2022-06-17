// Create Koder

let btnEnviar = document.getElementById("sendKoder");
btnEnviar.addEventListener("click", () => {
  // obtener la data
  let name = document.getElementById("nombre").value;
  let age = document.getElementById("edad").value;
  let biography = document.getElementById("biografia").value;
  let bootcamp = document.getElementById("bootcamp").value;

  console.log(name, age, biography, bootcamp);

  // validar la data
  if (name === "" || age === "" || biography === "" || bootcamp === "") {
    alert("Campos vacios");
  } else {
    // formar el nuevo koder
    let newKoder = {
      name: name,
      age: age,
      biography: biography,
      bootcamp: bootcamp,
    };

    

    //console.log(newKoder);
    
    // POST del KODER en base de datos con firebase
    fetch( 'https://k19gjs-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(newKoder),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(( response)=> {
        return response.json()
    })
    .then( (finalResponse) => {
        console.log(finalResponse)
        alert(`El koder ha sido creado con exito`)
    })
    .catch( (err) => {
        console.log(error)
    })
  }
})