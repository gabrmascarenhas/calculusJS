//Newton-Raphson
//Dígitos encontrados pelas matrículas:
var d1 = 4; //Gabriel De Moura Mascarenhas (2510414)
var d2 = 8; //Gabriel Meneses Alcântara (2510418)
var d3 = 7; //Arthur Maciel De Brito (2510417)
var d4 = 1; //Pedro Átila Gomes Câmara (2516271)
var d5 = 9; //Yuri Freitas Andrade (2510459)
var result = (10 + d1 + d2 + d3 + d4 + d5) / 10;
console.log("A velocidade para o trabalho é: " + result + " m/s."); //3,9 m/s

//---------------->Implementação das funções: <----------------

let f = function(t) { 
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



let F = function (t) {
        return 0.0000009834528 * (t ** 7) +
        0.0000955491684 * (t ** 6) -
        0.0037759441788 * (t ** 5) +
        0.078226484659 * (t ** 4) -
        0.9103839801584 * (t ** 3) +
        5.8759207676838 * (t ** 2) -
        18.9872770079116 * t +
        22.3019304387997;
        
    }
    
    let x0 =1;
    let x1=x0-(f(x0)/F(x0))
    let erro= Math.abs(x1-x0)
    let tolerancia = 0.0000000001;
    //tolerância 0.1 = 0.634...
    //tolerância 0.05 = 0.63787...
    //tolerância 0.0000000001 = 0.6378821934...
    
    
    while (erro> tolerancia ){
        x0=x1
        x1=x0-(f(x0)/F(x0))
    erro= Math.abs(x1-x0)
    erro=parseFloat(erro);
    
}
console.log("Instante que atinge a velocidade especificada = " + x1 + ".");
