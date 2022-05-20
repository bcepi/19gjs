// Pedir los grados celsius

let gradosCelsius=(prompt('Introducir la temperatura en tu ciudad en grados Celcius', 28));


//Celsius to fahrenheit 
// celsius *9/5 +32
if(gradosCelsius=== null){
    console.log('La temperatura ingresada no es valida');
}else{
    let gradosC=parseInt(gradosCelsius)
    let gradosFahrenheit = ((gradosC*(9/5)) + 32);
    window.alert(`La temperatura en tu ciudad en grados Fahrenheit es ${gradosFahrenheit}`);
}