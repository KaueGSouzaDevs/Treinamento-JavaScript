let condicao = true;
let condicao2 = false;


// ESTRUTURA DE DECISÃO

if(condicao){
    // Executa se a condição for verdaderia 
}

if(condicao){
    // Executa se a condição for verdaderia 
}else{
    // Executa se a condição for falsa
}

if(condicao){
    // Executa se a condição for verdaderia 
}else if(condicao2){
    // Executa se a condição for verdaderia 
}else{
    // Executa se a condição for falsa
}

// OPERADOR TERNÁRIO
let resultado = condicao ? 'resposta 1 = verdadeiro' : 'resposta 2 = falso';
console.log(resultado)

// OPERADORES LOGÍCOS
if(condicao && condicao2){
    // Executa se as duas condições for verdaderia 
}

if(condicao || condicao2){
    // Executa se uma das condiç]oes for verdaderia 
}

if(!condicao){
    // Executa se a condição for inversa 
}

switch(condicao){
    case true:
        // Executa se a condição for verdaderia 
        break;
    case false:
        // Executa se a condição for falsa
        break;
    default:
        // Executa se a condição for diferente das anteriores
        break;
}
