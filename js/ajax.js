//esta funcion recibe el objeto de un usuario 
const createUser =  ( objUser ) => {
    console.log(JSON.stringify(objUser))
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST",
    "https://k19gjs-default-rtdb.firebaseio.com/users.json", true)
    xhttp.onload = function(data) {
      console.log(data)
        if(data.target.status >= 200 && data.target.status <= 399){
            console.log(data.target.response)
        }
    }
    xhttp.send( JSON.stringify(objUser) )
  }
  

let user = {
    name:'Bere',
    age: 31,
    bio: 'lorem',
    bootcamp: 'js'
}

createUser(user)

// const deleteUser  = ( idUser ) => {
//     const deletexhr = new XMLHttpRequest()
//     deletexhr.open(
//       'DELETE', 
//       `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
//       true
//     )
//     deletexhr.onload = (response) => {
//       if(response.target.status >= 200 && response.target.status <= 399){
//         console.log(response.target)
//         console.log(response.target.response)
//       }
//     }
//     deletexhr.send()
//   }
  
  // deleteUser( '-N4AGeqHjW1CZAuRKKr6') 