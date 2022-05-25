    /**Arrow function
     * pedir al usuario una cadena de texto
     * verificar si la oracion es un palindromo
     */

     const esPalindromo = (str) =>{
        let string= str.toLowerCase().replace(/\s+/g, '')
        let stringReversed= ''

        for(let i= string.length -1; i>=0 ; i--){
            stringReversed+= string[i]
        }

        if(string === stringReversed){
            console.log('Es palindromo')
        } else{
            console.log('No es palindromo')
        }
    }

    // tarea, solucion de palindromo, remover los acentos 

    /**
     * Estudiar los metodos de arr, elegir un metodo y preparar un ejemplo para exponerlo en clase
     */