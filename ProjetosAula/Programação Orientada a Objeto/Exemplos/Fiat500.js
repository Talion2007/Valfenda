const car = {
    type: 'Fiat',
    model: '500',
    color: 'gray',
    acessories: 'Turbo, Aerofólio, Traseira Levantada e Frente Rebaixada, Stage 5, Interior Reformado em Couro Branco e Led Azul no Painel, Portas e Parte Inferior do Carro!', 
    
    getDetails: function() {
        return `${this.type} - ${this.model}!`
    },

    acessoriesDescripition: function() {
        return `Acessórios do Quinhnentão: ${this.acessories}, já na cor ${this.color} pra deixar no estilo, adesivado e pronto pra dar pau em Cruze!`
    }
}

console.log(car.getDetails())
console.log(car.acessoriesDescripition())