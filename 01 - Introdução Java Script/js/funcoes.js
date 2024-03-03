
//! Função sem retorno (Void)
function saudar(nome){
    console.log('Olá, '+nome);
}
saudar('Kauê');


//! Função com retorno
function somar(a, b){
    return a + b;
}
let resultado = somar(4,13);
console.log(resultado);


//! Função Expressão
let calculaAreaQuadrado = function(b,a){
    return b * a;
}
console.log(calculaAreaQuadrado(5,5));


//! Arrow Function
let soma = (a,b) => a + b;
console.log(soma(5,5));


let parOrImpar = numero => {
    if(numero % 2 == 0){
        return true;
    }else{
        return false;
    }
};
console.log(parOrImpar(5));



function criarMensagem(nome = 'Cliente não informado.', saudacao = 'oi'){
    return `${saudacao} ${nome} Seja bem-vindo!`;
}
console.log(criarMensagem('Kauê'));
console.log(criarMensagem('Kauê', 'Olá'));
console.log(criarMensagem());

















