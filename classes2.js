class Pessoa {
    constructor(nome,idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome},tenho ${this.idade} anos de idade e tenho ${this.altura} de altura.`);
    }
}


const pessoa = new Pessoa("Anna", 16, 1.74);

pessoa.seApresentar();