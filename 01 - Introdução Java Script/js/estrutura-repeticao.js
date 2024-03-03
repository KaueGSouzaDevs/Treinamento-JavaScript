let condicao = true;


// ESTRUTURA DE REPETIÇÃO

for (let i = 0; i < 10; i++){
    // EXECUTA ENQUANTO A CONDIÇÃO FOR VERDADEIRA
};

while(condicao){
    // EXECUTA ENQUANTO A CONDIÇÃO FOR VERDADEIRA
    condicao = false;
};

do{
    // EXECUTA ENQUANTO A CONDIÇÃO FOR VERDADEIRA
    condicao = false;
}while(condicao);

// LOOPS

let array = [1,2,3,4,5,6,7,8,9,10];

array.forEach(function(elemento){
    // Ação sobre cada elemento do array
    //console.log(elemento+2);
});

let novaLista = array.map(numero => numero * numero);
console.log(novaLista);

let idades = [15,,18,22,15,35,49,5,10,12];
let maiores = idades.filter(idade => idade > 20);
console.log(maiores);

console.log('----------------------------------------------');

let numeros = [1,2,3,4,5]
let soma = numeros.reduce((acumulador , numero) => acumulador + numero, 10);
console.log(soma);

idades = [15,,18,22,15,35,49,5,10,12];
primeiroMaiorQue20 = idades.find(idade => idade > 20);
console.log(primeiroMaiorQue20);