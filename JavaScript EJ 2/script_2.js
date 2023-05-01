/*Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio
 */ 

var radio = prompt("Ingrese el radio de la circunferencia: ",0);


function Area(radio){
    let area = Math.PI * Math.pow(radio,2);
    alert(`Area: ${area}`);
    return area;
}

function Perimetro (radio){
    let perimetro = 2 * Math.PI * radio;
    alert(`Perimetros: ${perimetro}`);
    return perimetro;
}

Area(radio);
Perimetro(radio);