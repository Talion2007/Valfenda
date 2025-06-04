class Animal {
    constructor(pernas, olhos, rabinho) {
        this.pernas = pernas;
        this.olhos = olhos;
        this.rabinho = rabinho;
    }

    info() {
        return `Este animal tem ${this.pernas} pernas, ${this.olhos} olhos!`;
    }

    rabo() {
        return `Este animal tem rabinho? ${this.rabinho}`;
    }
}

class Gato extends Animal {
    constructor(pernas, olhos, rabinho, garra, dente) {
        super(pernas, olhos, rabinho);
        this.garra = garra;
        this.dente = dente;
    }

    arranhar() {
        return `Ele arranha com ${this.garra} garras!`;
    }

    morder() {
        return `Ele morde com ${this.dente} dentes!`;
    }
}

document.getElementById("formGato").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    const pernas = document.getElementById("pernasGato").value;
    const olhos = document.getElementById("olhosGato").value;
    const rabinho = document.getElementById("rabinhoGato").value;
    const garra = document.getElementById("garra").value;
    const dente = document.getElementById("dente").value;

    const gato = new Gato(pernas, olhos, rabinho, garra, dente);

    console.log(gato)

    document.getElementById("gatoArranhar").innerHTML = gato.arranhar();
    document.getElementById("gatoMorder").innerHTML = gato.morder();
    document.getElementById("gatoInfo").innerHTML = gato.info();
    document.getElementById("gatoRabo").innerHTML = gato.rabo();
});



class Coelho extends Animal {
    constructor(pernas, olhos, rabinho, orelhas, focinho) {
        super(pernas, olhos, rabinho);
        this.orelhas = orelhas;
        this.focinho = focinho;
    }

    cheirar() {
        return `Ele cheira com ${this.focinho} focinho!`;
    }

    ouvir() {
        return `Ele ouve com ${this.orelhas} orelhas!`;
    }
}

document.getElementById("formCoelho").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    const pernas = document.getElementById("pernasCoelho").value;
    const olhos = document.getElementById("olhosCoelho").value;
    const rabinho = document.getElementById("rabinhoCoelho").value;
    const orelhas = document.getElementById("orelhas").value;
    const focinho = document.getElementById("focinho").value;

    const coelho = new Coelho(pernas, olhos, rabinho, orelhas, focinho);

    document.getElementById("coelhoCheirar").innerHTML = coelho.cheirar();
    document.getElementById("coelhoOuvir").innerHTML = coelho.ouvir()
    document.getElementById("coelhoInfo").innerHTML = coelho.info();
    document.getElementById("coelhoRabinho").innerHTML = coelho.rabo();
    
});



class Cachorro extends Animal {
    constructor(pernas,olhos,rabinho,donos,crias) {
        super(pernas,olhos,rabinho)
        this.donos = donos;
        this.crias = crias;
    }

    obedecer() {
        return `Ele obedece à ${this.donos} donos`
    }

    reproduzir() {
        return `Ele possui ${this.crias} filhotes`
    }
}

document.getElementById("formCachorro").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    const pernas = document.getElementById("pernasCachorro").value;
    const olhos = document.getElementById("olhosCachorro").value;
    const rabinho = document.getElementById("rabinhoCachorro").value;
    const donos = document.getElementById("donos").value;
    const crias = document.getElementById("crias").value;

    const cachorro = new Cachorro(pernas, olhos, rabinho, donos, crias);

    document.getElementById("cachorroObedecer").innerHTML = cachorro.obedecer()
    document.getElementById("cachorroReproduzir").innerHTML = cachorro.reproduzir()
    document.getElementById("cachorroInfo").innerHTML = cachorro.info();
    document.getElementById("cachorroRabinho").innerHTML = cachorro.rabo();
});