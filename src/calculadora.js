

class Calculadora{
    constructor() {
        
    }
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num1,exp){
        return num1 ** exp;

    }
    raizCuadrada(num1){
        return Math.sqrt(num1);
    }
    raizCubica(num1){
        return Math.cbrt(num1);
    }
}

const calculadora = new Calculadora();

alert("Que operacion deseas realizar?");
let operacion = prompt("1: sumar, 2: restar, 3: dividir, 4: multiplicar, 5:potenciar, 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`el resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`el resultado es ${resultado}`);
}
else if (operacion ==3){
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`el resultado es ${resultado}`);
}
else if (operacion ==4){
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt('segundo numero para multiplicar');
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`el resultado es ${resultado}`);
}
else if (operacion ==5){
    let numero1 = prompt("primer numero para potenciar");
    let exponente = prompt('segundo numero para potenciar');
    resultado = calculadora.potenciar(numero1,exponente);
    alert(`el resultado es ${resultado}`);
}
else if (operacion ==6){
    let numero1 = prompt("introduce la raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`el resultado es ${resultado}`);
}
else if (operacion ==7){
    let numero1 = prompt("introduce la raiz cubica");
    resultado = calculadora.raizCubica(numero1);
    alert(`el resultado es ${resultado}`)
}
else {
    alert(`no se ha encontrado la operacion`);
}