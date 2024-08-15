class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const User = new Pessoa("Nino", 2, 1.20);
const User1 = new Pessoa("Bruce", 5, 0.5);
console.log(User);
console.log(User1);
