
//! Objetos

const pessoa = {
    nome: 'kaue',
    idade: 20,
    falar: function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

console.log(pessoa.nome);
pessoa.falar();
pessoa.profissao = 'Desenvolvedor';
console.log(pessoa);

