/*Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.*/

///toUpperCase() para poner las letras en mayusculas
var letra = prompt("Ingrese un caracter: ").toUpperCase();

if(letra=="S" || letra=="N"){
    alert("Correcto");
}else{
    alert("Incorrecto");
}
