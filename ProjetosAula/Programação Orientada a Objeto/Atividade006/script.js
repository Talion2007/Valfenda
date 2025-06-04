class Aluno {
    constructor(nome, rm, disciplina, prova, trabalhoGrupo, trabalhoIndividual) {
        this.alfa = nome,
        this.beta = disciplina,
        this.gama = rm,
        this.gohan = prova,
        this.mizu = trabalhoGrupo,
        this.sushi = trabalhoIndividual
    }    
    get _nome() {
        return this.alfa.toUpperCase()
    }
    get _disciplina() {
        return this.beta.toUpperCase()
    }
    get _rm() {
        return this.gama
    }
    get _prova() {
        return this.gohan
    }
    get _grupo() {
        return this.mizu
    }
    get _individual() {
        return this.sushi
    }

    set _alfa(x) {
        this.alfa = x
    }
    set _beta(x) {
        this.beta = x
    }
    set _gama(x) {
        this.gama = x
    }
    set _gohan(x) {
        if (x > 10 || x < 0) {return}
        this.gohan = x
    }
    set _mizu(x) {
        if (x > 10 || x < 0) {return}
        this.mizu = x
    }
    set _sushi(x) {
        if (x > 10 || x < 0) {return}
        this.sushi = x
    }

    get media() {
        const media = parseInt(this.gohan)/3 + parseInt(this.mizu)/3 + parseInt(this.sushi)/3
        return media
    }
}

const meuAluno = new Aluno()

document.getElementById("submitBtn").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const disciplina = document.getElementById("disciplina").value;
    const rm = document.getElementById("rm").value;
    const prova = document.getElementById("prova").value;
    const grupo = document.getElementById("grupo").value;
    const individual = document.getElementById("individual").value;

  if (prova > 10 || prova < 0 || individual > 10 || individual < 0 || grupo > 10 || grupo < 0 ) {
    alert("Digita a nota certo, CARALHO!")
  } else {

    meuAluno._alfa = nome;
    meuAluno._beta = disciplina
    meuAluno._gama = rm;
    meuAluno._gohan = prova;
    meuAluno._mizu = grupo;
    meuAluno._sushi = individual;

    document.getElementById("nomeParagraph").innerHTML = `Nome: ${meuAluno._nome}`
    document.getElementById("disciplinaParagraph").innerHTML = `Disciplina: ${meuAluno._disciplina}`
    document.getElementById("rmParagraph").innerHTML = `RM: ${meuAluno._rm}`
    document.getElementById("provaParagraph").innerHTML = `Nota da Prova: ${meuAluno._prova}`
    document.getElementById("grupoParagraph").innerHTML = `Nota do Trabalho em Grupo: ${meuAluno._grupo}`
    document.getElementById("individualParagraph").innerHTML = `Nota do Trabalho em Individual: ${meuAluno._individual}`
    document.getElementById("media").innerHTML = `Media das Notas: ${meuAluno.media}`

  }
  });