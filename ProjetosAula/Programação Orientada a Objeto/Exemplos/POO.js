//-------------------------------------------------------------------//

console.log("Modelo Orientado a Objeto (OOP) para calcular a média de alunos aprovados")

//-------------------------------------------------------------------//

console.log("")
console.log("Caneta: ")

const caneta = {
    marca : "bic",
    cor : "azul",
    tipo : "esferográfica",
    tampa: "Sim",
    
    escrever: function() {
        return `Caneta ${this.marca} está escrevendo na cor ${this.cor}.`;
    },
    tampar: function() {
        return `Caneta ${this.tipo} tem tampa? ${this.tampa}.`;
    },
}
console.log(`Caneta's Marca: ${caneta.marca}`); // Output: "bic"
console.log(`Caneta's Cor: ${caneta.cor}`); // Output: "azul"
console.log(`Caneta's Tipo: ${caneta.tipo}`); // Output: "esferográfica"
console.log(`Caneta's Tampa: ${caneta.tampa}`); // Output: "Sim"
console.log("Funções:")
console.log(caneta.escrever()); // Output: "Caneta bic está escrevendo na cor azul."
console.log(caneta.tampar()); // Output: "Caneta esferográfica tem tampa? Sim."
console.log("Alterar:")
caneta.marca = "faber castell"; // Output: "faber castell"
console.log(`Caneta's Nova Marca: ${caneta.marca}`); // Output: "faber castell"
console.log("Criar:")
caneta.atributoFudido = "Caneta Fudida"; // Adiciona um novo atributo
console.log(`Caneta's AtributoFudido: ${caneta.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Computador: ")

const computador = {
    marca : "acer",
    modelo : "aspire 5",
    cor : "preto",
    processador : "intel i5",

    hardware: function() {
        return `Computador ${this.marca} tem processador ${this.processador}.`;
    },
    caracteristicas: function() {
        return `Computador ${this.modelo} é da cor ${this.cor}.`;
    }
}
console.log(`Computador's Marca: ${computador.marca}`); // Output: "acer"
console.log(`Computador's Modelo: ${computador.modelo}`); // Output: "aspire 5"
console.log(`Computador's Cor: ${computador.cor}`); // Output: "preto"
console.log(`Computador's Processador: ${computador.processador}`); // Output: "intel i5"
console.log("Funções:")
console.log(computador.hardware()); // Output: "Computador acer tem processador intel i5."
console.log(computador.caracteristicas()); // Output: "Computador aspire 5 é da cor preto."
console.log("Alterar:")
computador.marca = "dell"; // Output: "dell"
console.log(`Computador's Nova Marca: ${computador.marca}`); // Output: "dell"
console.log("Criar:")
computador.atributoFudido = "Computador Fudido"; // Adiciona um novo atributo
console.log(`Computador's AtributoFudido: ${computador.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Celular: ")

const celular = {
    marca : "samsung",
    modelo : "galaxy s20",
    cor : "azul",
    armazenamento : "128GB",

    hardware: function() {
        return `Celular ${this.marca} tem armazenamento de ${this.armazenamento}.`;
    },
    caracteristicas: function() {
        return `Celular ${this.modelo} é da cor ${this.cor}.`;
    }
}
console.log(`Celular's Marca: ${celular.marca}`); // Output: "samsung"
console.log(`Celular's Modelo: ${celular.modelo}`); // Output: "galaxy s20"
console.log(`Celular's Cor: ${celular.cor}`); // Output: "azul"
console.log(`Celular's Armazenamento: ${celular.armazenamento}`); // Output: "128GB"
console.log("Funções:")
console.log(celular.hardware()); // Output: "Celular samsung tem armazenamento de 128GB."
console.log(celular.caracteristicas()); // Output: "Celular galaxy s20 é da cor azul."
console.log("Alterar:")
celular.marca = "xiaomi"; // Output: "xiaomi"
console.log(`Celular's Nova Marca: ${celular.marca}`); // Output: "xiaomi"
console.log("Criar:")
celular.atributoFudido = "Celular Fudido"; // Adiciona um novo atributo
console.log(`Celular's AtributoFudido: ${celular.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Mesa: ")

const mesa = {
    material : "madeira",
    tamanho : "grande",
    formato : "retangular",
    cor : "marrom",

    fabricacao: function() {
        return `Mesa é feita de ${this.material} e tem cor ${this.cor}.`;
    },
    caracteristicas: function() {
        return `Mesa tem tamanho ${this.tamanho} e formato ${this.formato}.`;
    }
}
console.log(`Mesa's Material: ${mesa.material}`); // Output: "madeira"
console.log(`Mesa's Tamanho: ${mesa.tamanho}`); // Output: "grande"
console.log(`Mesa's Formato: ${mesa.formato}`); // Output: "retangular"
console.log(`Mesa's Cor: ${mesa.cor}`); // Output: "marrom"
console.log("Funções:")
console.log(mesa.fabricacao()); // Output: "Mesa é feita de madeira e tem cor marrom."
console.log(mesa.caracteristicas()); // Output: "Mesa tem tamanho grande e formato retangular."
console.log("Alterar:")
mesa.material = "plástico"; // Output: "plástico"
console.log(`Mesa's Novo Material: ${mesa.material}`); // Output: "plástico"
console.log("Criar:")
mesa.atributoFudido = "Mesa Fudida"; // Adiciona um novo atributo
console.log(`Mesa's AtributoFudido: ${mesa.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Relógio: ")

const calça = {
    marca : "levis",
    tamanho : "42",
    cor : "preto",
    tipo : "jeans",

    fabricacao: function() {
        return `Calça é da marca ${this.marca} e tem cor ${this.cor}.`;
    },
    caracteristicas: function() {
        return `Calça tem tamanho ${this.tamanho} e tipo ${this.tipo}.`;
    }
}
console.log(`Calça's Marca: ${calça.marca}`); // Output: "levis"
console.log(`Calça's Tamanho: ${calça.tamanho}`); // Output: "42"
console.log(`Calça's Cor: ${calça.cor}`); // Output: "preto"
console.log(`Calça's Tipo: ${calça.tipo}`); // Output: "jeans"
console.log("Funções:")
console.log(calça.fabricacao()); // Output: "Calça é da marca levis e tem cor preto."
console.log(calça.caracteristicas()); // Output: "Calça tem tamanho 42 e tipo jeans."
console.log("Alterar:")
calça.marca = "adidas"; // Output: "adidas"
console.log(`Calça's Nova Marca: ${calça.marca}`); // Output: "adidas"
console.log("Criar:")
calça.atributoFudido = "Calça Fudida"; // Adiciona um novo atributo
console.log(`Calça's AtributoFudido: ${calça.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Mochila: ")

const mochila = {
    marca : "nike",
    cor : "preto",
    tamanho : "grande",
    material : "nylon",

    fabricacao: function() {
        return `Mochila é da marca ${this.marca} e tem cor ${this.cor}.`;
    },
    caracteristicas: function() {
        return `Mochila tem tamanho ${this.tamanho} e material ${this.material}.`;
    }
}
console.log(`Mochila's Marca: ${mochila.marca}`); // Output: "nike"
console.log(`Mochila's Cor: ${mochila.cor}`); // Output: "preto"
console.log(`Mochila's Tamanho: ${mochila.tamanho}`); // Output: "grande"
console.log(`Mochila's Material: ${mochila.material}`); // Output: "nylon"
console.log("Funções:")
console.log(mochila.fabricacao()); // Output: "Mochila é da marca nike e tem cor preto."
console.log(mochila.caracteristicas()); // Output: "Mochila tem tamanho grande e material nylon."
console.log("Alterar:")
mochila.marca = "puma"; // Output: "puma"
console.log(`Mochila's Nova Marca: ${mochila.marca}`); // Output: "puma"
console.log("Criar:")
mochila.atributoFudido = "Mochila Fudida"; // Adiciona um novo atributo
console.log(`Mochila's AtributoFudido: ${mochila.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Cadeira: ")

const cadeira = {
    material : "plástico",
    cor : "branco",
    tamanho : "pequeno",
    tipo : "dobrável",

    fabricacao: function() {
        return `Cadeira é feita de ${this.material} e tem cor ${this.cor}.`;
    },
    caracteristicas: function() {
        return `Cadeira tem tamanho ${this.tamanho} e tipo ${this.tipo}.`;
    }
}
console.log(`Cadeira's Material: ${cadeira.material}`); // Output: "plástico"
console.log(`Cadeira's Cor: ${cadeira.cor}`); // Output: "branco"
console.log(`Cadeira's Tamanho: ${cadeira.tamanho}`); // Output: "pequeno"
console.log(`Cadeira's Tipo: ${cadeira.tipo}`); // Output: "dobrável"
console.log("Funções:")
console.log(cadeira.fabricacao()); // Output: "Cadeira é feita de plástico e tem cor branco."
console.log(cadeira.caracteristicas()); // Output: "Cadeira tem tamanho pequeno e tipo dobrável."
console.log("Alterar:")
cadeira.material = "madeira"; // Output: "madeira"
console.log(`Cadeira's Novo Material: ${cadeira.material}`); // Output: "madeira"
console.log("Criar:")
cadeira.atributoFudido = "Cadeira Fudida"; // Adiciona um novo atributo
console.log(`Cadeira's AtributoFudido: ${cadeira.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Carro: ")

const carro = {
    marca : "fiat",
    modelo : "uno",
    cor : "branco",
    mexido: "Sim",

    fabricacao: function() {
        return `Carro é da marca ${this.marca} e tem cor ${this.cor}.`;
    },
    caracteristicas: function() {
        return `Carro modelo ${this.modelo} está mexido? ${this.mexido}.`;
    }
}
console.log(`Carro's Marca: ${carro.marca}`); // Output: "fiat"
console.log(`Carro's Modelo: ${carro.modelo}`); // Output: "uno"
console.log(`Carro's Cor: ${carro.cor}`); // Output: "branco"
console.log(`Carro's Mexido: ${carro.mexido}`); // Output: "Sim"
console.log("Funções:")
console.log(carro.fabricacao()); // Output: "Carro é da marca fiat e tem cor branco."
console.log(carro.caracteristicas()); // Output: "Carro modelo uno está mexido? Sim."
console.log("Alterar:")
carro.marca = "ford"; // Output: "ford"
console.log(`Carro's Nova Marca: ${carro.marca}`); // Output: "ford"
console.log("Criar:")
carro.atributoFudido = "Carro Fudido"; // Adiciona um novo atributo
console.log(`Carro's AtributoFudido: ${carro.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Ferramenta: ")

const ferramenta = {
    tipo : "chave de fenda",
    tamanho : "pequeno",
    cor : "prata",
    material : "aço",

    fabricacao: function() {
        return `Ferramenta é do tipo ${this.tipo} e tem cor ${this.cor}.`;
    },
    caracteristicas: function() {
        return `Ferramenta tem tamanho ${this.tamanho} e material ${this.material}.`;
    }
}
console.log(`Ferramenta's Tipo: ${ferramenta.tipo}`); // Output: "chave de fenda"
console.log(`Ferramenta's Tamanho: ${ferramenta.tamanho}`); // Output: "pequeno"
console.log(`Ferramenta's Cor: ${ferramenta.cor}`); // Output: "prata"
console.log(`Ferramenta's Material: ${ferramenta.material}`); // Output: "aço"
console.log("Funções:")
console.log(ferramenta.fabricacao()); // Output: "Ferramenta é do tipo chave de fenda e tem cor prata."
console.log(ferramenta.caracteristicas()); // Output: "Ferramenta tem tamanho pequeno e material aço."
console.log("Alterar:")
ferramenta.tipo = "martelo"; // Output: "martelo"
console.log(`Ferramenta's Novo Tipo: ${ferramenta.tipo}`); // Output: "martelo"
console.log("Criar:")
ferramenta.atributoFudido = "Ferramenta Fudida"; // Adiciona um novo atributo
console.log(`Ferramenta's AtributoFudido: ${ferramenta.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//

console.log("")
console.log("Livro: ")

const livro = {
    titulo : "O Senhor dos Anéis",
    autor : "J.R.R. Tolkien",
    ano : 1954,
    editora : "HarperCollins",

    caracteristicas: function() {
        return `Livro ${this.titulo} é de ${this.autor}.`;
    },
    edicao: function() {
        return `Publicado pela editora ${this.editora} em ${this.ano}.`;
    }
}
console.log(`Livro's Titulo: ${livro.titulo}`); // Output: "O Senhor dos Anéis"
console.log(`Livro's Autor: ${livro.autor}`); // Output: "J.R.R. Tolkien"
console.log(`Livro's Ano: ${livro.ano}`); // Output: "1954"
console.log(`Livro's Editora: ${livro.editora}`); // Output: "HarperCollins"
console.log("Funções:")
console.log(livro.caracteristicas()); // Output: "Livro O Senhor dos Anéis é de J.R.R. Tolkien."
console.log(livro.edicao()); // Output: "Publicado pela editora HarperCollins em 1954."
console.log("Alterar:")
livro.titulo = "O Hobbit"; // Output: "O Hobbit"
console.log(`Livro's Novo Titulo: ${livro.titulo}`); // Output: "O Hobbit"
console.log("Criar:")
livro.atributoFudido = "Livro Fudido"; // Adiciona um novo atributo
console.log(`Livro's AtributoFudido: ${livro.atributoFudido}`); // Output: "fudido"

//-------------------------------------------------------------------//