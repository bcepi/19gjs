// maqueta, proceso de editar el post
// sacar los valores de la maqueta
// enviar cambios al servidor/base de datos

let idKoder = window.location.search.substring(10);
console.log(idKoder);

fetch(`https://k19gjs-default-rtdb.firebaseio.com/users/${idKoder}.json`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
      );
    } else {
      return response.json();
    }
  })
  .then((response) => {
    console.log(response);
    if (response) {
      let { name, age, biography, bootcamp } = response;
      // pintar esa informacion en el formulario
      document.querySelector("#nombre").value = name;
      document.querySelector("#edad").value = age;
      document.querySelector("#bootcamp").value = bootcamp;
      document.querySelector("#biografia").value = biography;
    } else {
      alert("Usuario no existente");
    }
  });

const koderEditar = (objUpdate) => {
  console.log(objUpdate);
};

let btnEditar = document.getElementById("updateKoder");
btnEditar.addEventListener("click", () => {
  // obtener los cambios
  let name = document.getElementById("nombre").value;
  let age = document.getElementById("edad").value;
  let biography = document.getElementById("biografia").value;
  let bootcamp = document.getElementById("bootcamp").value;

  console.log(name, age, biography, bootcamp);

  let newKoder = {
    name: name,
    age: age,
    biography: biography,
    bootcamp: bootcamp,
  };

  console.log(newKoder);

  // crear el objeto con los datos obtenidos del formulario

  // hacer la edicion
  fetch(`https://k19gjs-default-rtdb.firebaseio.com/users/${idKoder}.json`, {
    method: "PATCH",
    body: JSON.stringify(koderUpdated),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((finalResponse) => {
      console.log(finalResponse);
    })
    .catch((err) => {
      console.log(error);
    });
});


let btnEliminar = document.getElementById("deleteKoder");
btnEliminar.addEventListener("click", () => {
  // hacer el envio
  fetch(`https://k19gjs-default-rtdb.firebaseio.com/users/${idKoder}.json`, {
    method: "DELETE",
  })
    .then((response) => {
      // comprobamos que el estatus de la respuesta es falso
      if (!response.ok) {
       
        let err = new Error(
          `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
        );
        throw err;
      } else {
        return response.json();
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
