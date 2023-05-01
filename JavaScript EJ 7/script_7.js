/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicia*/

var limite = parseInt(prompt("Ingrese un limite de numero: "));
var numero; 
var contador = 0;

while(true){
    numero = parseInt(prompt("Ingrese numeros hasta que sea mayor al limite: "));
    contador= numero + contador;

    if(contador >limite){
        alert("Los numeros sumados paso el limite");
        alert(`Limite: ${limite}\nContador: ${contador}`);
        break;
    }
}
