let w = "";
let y = "";
let generoExiste = "Não";
let generoEscolhido = null;

const myObj = {
  name: "Paulão",
  age: 17,
  sexo: "Helicóptero de Ataque",
  oculos: "Sim",

  filmes: [
    { name: "Como treinar seu Dragão", genero: ["Aventura", "Animação"] },
    { name: "Os Incríveis", genero: ["Aventura", "Animação"] },
    { name: "Star Trek", genero: ["Ação", "Ficção Científica"] },
    { name: "Star Wars, A Ameaça Fantasma", genero: ["Ação", "Ficção Científica"] },
    { name: "Harry Potter e a Pedra Filosofal", genero: ["Aventura", "Fantasia"] },
    { name: "A Era do Gelo", genero: ["Aventura", "Animação"] },
    { name: "O Senhor dos Anéis, A Sociedade do Anel", genero: ["Aventura", "Fantasia"] },
    { name: "Os Vingadores", genero: ["Aventura", "Ação"] },
    { name: "E.T.", genero: ["Fantasia", "Ficção Científica"]}
  ],

  generos: [
    {name: "Aventura", filmes: ["Como treinar seu Dragão", "Os Incríveis", "Harry Potter e a Pedra Filosofal", "A Era do Gelo", "O Senhor dos Anéis, A Sociedade do Anel", "Os Vingadores"]},
    {name: "Animação", filmes: ["Como treinar seu Dragão", "Os Incríveis", "A Era do Gelo"]},
    {name: "Ação", filmes: ["Star Trek", "Star Wars, A Ameaça Fantasma", "Os Vingadores"]},
    {name: "Ficção Cientifica", filmes: ["Star Trek", "Star Wars, A Ameaça Fantasma", "E.T."]},
    {name: "Fantasia", filmes: ["Harry Potter e a Pedra Filosofal", "O Senhor dos Anéis, A Sociedade do Anel", "E.T."]}
  ]
};

for (let i in myObj.filmes) {
  y += `<div class="box"><h3> ${myObj.filmes[i].name} </h3>`;
  for (let j in myObj.filmes[i].genero) {
    y += myObj.filmes[i].genero[j] + "<br/>";
  }
    y += "</div>";
}

for (let i in myObj.generos) {
    w += `<hr/> <h2> ${myObj.generos[i].name} </h2> <div class="Filmes">`;
    for (let j in myObj.generos[i].filmes) {
      w += `<div class="box"> <h3>${myObj.generos[i].filmes[j]}</h3> </div>`;
    }
    w += `</div>`
  }

  function Perguntar() {
    generoExiste = "Não";
    generoEscolhido = null;

    while (generoEscolhido == null) {
        alert("Digite um Gênero!")
        generoEscolhido = prompt()
    }

    for (let i in myObj.generos) {
        if (generoEscolhido == myObj.generos[i].name) {
            generoExiste = "Sim"
        }
      }

    alert(`O genero ${generoEscolhido} existe? ${generoExiste}`)
  }

  Perguntar()

document.getElementById("Foda").innerHTML = `<h1>Nome: ${myObj.name} | Idade: ${myObj.age} | Sexo: "${myObj.sexo}" | Uso de óculos: ${myObj.oculos} <hr> <h2>Filmes Favoritos: </h2> <div class="Filmes">${y}</div> ${w} </h1>`;