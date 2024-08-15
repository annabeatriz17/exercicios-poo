class Pizza {
    constructor(base, molho, cobertura, queijo) {
        this.base = base;
        this.molho = molho;
        this.cobertura = cobertura;
        this. queijo = queijo;
    }

    getDescription() {
        return `Uma deliciosa pizza com ${this.base} base, ${this.molho} , molho, ${this.cobertura} , cobertura, e muito queijo.`;
    }
}

const minhaPizza = new Pizza('tradicional', 'tomate',' peperoni', 'mussarela');
console.log(minhaPizza.getDescription());