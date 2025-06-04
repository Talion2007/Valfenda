class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  alertTest() {
    document.getElementById("antonioTest").innerHTML = `Nome: ${this.nome}, Idade: ${this.idade}, Sexo: ${this.sexo}`;
  }

    alertTest2() {
    document.getElementById("leandroTest").innerHTML = `Nome: ${this.nome}, Idade: ${this.idade}, Sexo: ${this.sexo}`;
    }
}

class Tupinamba extends Pessoa {
  constructor(nome, idade, sexo, tribo) {
    super(nome, idade, sexo);
    this.tribo = tribo;
  }

  alertAula() {
    document.getElementById("antonioAula").innerHTML = `O Grande Tupinambá ${this.nome} é um guerreiro da tribo ${this.tribo}, com ${this.idade} anos de idade e do sexo ${this.sexo}`;
  }

  alertAula2() {
    document.getElementById("leandroAula").innerHTML = `O Grande Tupinambá ${this.nome} é um guerreiro da tribo ${this.tribo}, com ${this.idade} anos de idade e do sexo ${this.sexo}`;
  }
}

const Antonio = new Tupinamba("Antônio", 65, "Masculino", "Senai");
Antonio.alertTest();
Antonio.alertAula();

console.log("====================================================");
alert("====================================================");

const Leandro = new Tupinamba("Leandro", 30, "Masculino", "Senai");
Leandro.alertTest2();
Leandro.alertAula2();
