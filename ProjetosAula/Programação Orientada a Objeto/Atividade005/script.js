class Carro {
  constructor(marca, modelo, cor, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
    this.kmlG = 10;
    this.kmlE = 7;
  }

  exibirDados() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Cor: ${this.cor}, Ano: ${this.ano}`;
  }

  custoTripEt(km, custoEtanol) {
    return `O custo da sua viagem com etanol será de R$ ${
      (km / this.kmlE) * custoEtanol
  }`;
  }

  custoTripG(km, custoGasolina) {
    return `O custo da sua viagem com gasolina será de R$ ${
      (km / this.kmlG) * custoGasolina
  }`;
  }
}

const meuCarro = new Carro();

document.getElementById("submitBtn").addEventListener("click", () => {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value.toLowerCase();
  const cor = document.getElementById("cor").value;
  const ano = parseInt(document.getElementById("ano").value);

  meuCarro.marca = marca;
  meuCarro.modelo = modelo;
  meuCarro.cor = cor;
  meuCarro.ano = ano;

  document.getElementById(
    "resultado"
  ).innerHTML = `Marca: ${meuCarro.marca} <br> Modelo: ${meuCarro.modelo} <br> Cor: ${meuCarro.cor} <br> Ano: ${meuCarro.ano}`;
});

document.getElementById("btnEtanol").addEventListener("click", () => {
  const km = parseFloat(document.getElementById("km").value);
  const custoEtanol = parseFloat(document.getElementById("custoEtanol").value);

  const custoViagem = meuCarro.custoTripEt(
    km,
    custoEtanol
  );

    document.getElementById("custoViagem").innerHTML = custoViagem;
});

document.getElementById("btnGasolina").addEventListener("click", () => {
  const km = parseFloat(document.getElementById("km").value);
  const custoGasolina = parseFloat(
    document.getElementById("custoGasolina").value
  );

  const custoViagem = meuCarro.custoTripG(
    km,
    custoGasolina
  );

  document.getElementById("custoViagem").innerHTML = custoViagem;
});
