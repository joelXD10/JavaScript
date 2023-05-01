/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división*/

var numero1 = parseInt(prompt("ingrese un numero: ",));
var numero2 = parseInt(prompt("Ingrese otro numero: ",));
var opcion = prompt("S= Suma\nR= Resta\nM= Multiplicación\nD= División\nOpcion: ").toLowerCase();

function Suma(num1,num2){
    let resultado = num1+num2;
    alert(`Suma: ${resultado}`);
}

function Resta(num1,num2){
    let resultado = num1-num2;
    alert(`Resta: ${resultado}`)
}

function División(num1,num2){
    let resultado = num1/num2;
    alert(`División: ${resultado}`)
}

function Multiplicación(num1,num2){
    let resultado = num1*num2;
    alert(`Multiplicación: ${resultado}`);
}

switch(opcion){
    case "s":
        Suma(numero1,numero2);
        break;
    case "r":
        Resta(numero1,numero2);
        break;
    case "m":
        Multiplicación(numero1,numero2);
        break;
    case "d":
        División(numero1,numero2);
        break;
}

