// Pedir los grados celsius

let gradosCelsius=parseInt(prompt('Introducir la temperatura en tu ciudad en grados Celcius', 28));

//Celsius to fahrenheit 
// celsius *9/5 +32
if(gradosCelsius=== null){
    console.log('La temperatura ingresada no es valida');
}else{
    let gradosFahrenheit = ((gradosCelsius*(9/5)) + 32);
    console.log(`La temperatura en tu ciudad en grados Fahrenheit es ${gradosFahrenheit}`);
}