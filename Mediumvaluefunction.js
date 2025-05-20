//Código para calcular o valor médio de uma Função f(x):

//Parte 1: Valores médios:
//     Declaração da Integral da velocidade:

let f = function(x) { 
    return -0.0000000136591 * (x**9) +
     0.0000017062351 * (x**8) - 
     0.0000899034328 * (x**7) +
     0.0026075494886 * (x**6) -
     0.0455191990079 * (x**5) +
     0.4896600639736 * (x**4) -
     3.1645461679853 * (x**3) +
     11.1509652193998 * (x**2) -
     14.7353973494401 * x;

}

 //    Declaração da Integral da aceleração: (velocidade)


 let F = function(t) {
    return -0.0000001229316 * (t**8) + 
    0.0000136498812 * (t**7) - 
    0.0006293240298 * (t**6) +  
    0.0156452969318 * (t**5) -
    0.2275959950396 * (t**4) + 
    1.9586402558946 * (t**3) - 
    9.4936385039558 * (t**2) + 
    22.3019304387997 * t - 
    10.8353973494401;
 }

 //Declaração do começo e final da função total
 let a = 0; //Início
 let b = 33; //Final
 var valormedio = 0;
 
 
// Ao integrar uma função por (b) até (a) podemos reescrever como (f(b) + C) - (f(a) + C) aonde cancelamos as duas constantes de integração deixando apenas:
//    f(b) - f(a)
console.log("Valor médio da aceleração:");
console.log((F(b) - F(a)) / (b - a));

console.log("Valor médio da velocidade:");
console.log((f(b) - f(a)) / (b - a));
