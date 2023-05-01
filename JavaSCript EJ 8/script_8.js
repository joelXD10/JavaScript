/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos*/

var numero;
var promedio = 0;
var contador = 0;
var maximo = 0;
var minimo = Number.MAX_SAFE_INTEGER;



while(true){
    numero = parseInt(prompt("Ingrese numeros hasta ingresar el numero 0: "));
    if (numero !=0){
        promedio = promedio + numero;
        contador++
        if(numero>maximo){
            maximo = numero
        }else if(numero<minimo){
            minimo = numero
        }
    }else{
        alert("Ingreso el numero O");
        alert(`Maximo: ${maximo}\nMinimo: ${minimo}\nPromedio: ${promedio/contador}`);
        break;
    }
}
