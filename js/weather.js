// Exercise switch
/**
 * 
    En el archivo weather.js
    Pedir al usuario que ingrese como esta el clima en su ciudad
    Opciones
        a. Soleado
        b. Lluvioso
        c. Nevando
        d. Nublado
    Pedir la temperatura aproximada en ºC
    Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
    P.ej: En tu ciudad, el día está “Soleado” con una temperatura de 100ºF
 *
 */

let clima = prompt('Como esta el clima en la ciudad? Ingrese la letra de las opciones: a. Soleadob b. Lluvioso c. Nevando d. Nublado');
let tempC = (prompt('Ingrese la temperatura en °C'));

//Celsius to fahrenheit 
// celsius *9/5 +32
if(tempC === null){
    tempC = 28;
}

let tempF = ( ( tempC * 9 ) / 5 ) + 32;

switch (clima){
    case "a":
        console.log(`En tu ciudad, el día está “Soleado” con una temperatura de ${tempF} °F`);
        break;
    case "b":
        console.log(`En tu ciudad, el día está “Lluvioso” con una temperatura de ${tempF} °F`);
        break
    case "c":
        console.log(`En tu ciudad, el día está "Nevado" con una temperatura de ${tempF} °F`);
        break
    case "d":
        console.log(`En tu ciudad, el día está "Nublado" con una temperatura de ${tempF} °F`);
        break
    default:
        console.log(`La temperatura en grados °F es de ${tempF}`)
}