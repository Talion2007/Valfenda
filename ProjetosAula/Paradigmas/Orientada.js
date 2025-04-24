// Modelo Orientado a Objeto (OOP) para calcular a média de alunos aprovados
// Problema: Calcular a média de notas de alunos aprovados (nota >= 7) em uma lista de alunos.
// Abordagem Orientada a Objeto: Foco: Modelar o problema usando objetos e classes.
// A classe Aluno representa um aluno com atributos nome e nota e um método estaAprovado para verificar se o aluno foi aprovado.
// A classe CalculadoraMedia tem um método estático calcularMediaAprovados que calcula a média das notas dos alunos aprovados.
// O código é mais organizado e modular, com classes representando entidades do problema.
// Os comentários explicam o propósito de cada classe, método e atributo.


// Define a classe 'Aluno'
class Aluno {
    // Construtor da classe: inicializa os atributos 'nome' e 'nota'
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    // Método para verificar se o aluno está aprovado (nota >= 7)
    estaAprovado() {
        return this.nota >= 7;
    }
}

// Define a classe 'CalculadoraMedia'
class CalculadoraMedia {
    // Método estático para calcular a média dos alunos aprovados
    static calcularMediaAprovados(alunos) {
        // Filtra a lista de alunos para obter apenas os aprovados usando o método 'estaAprovado'
        const alunosAprovados = alunos.filter(aluno => aluno.estaAprovado());

        // Calcula a soma das notas dos alunos aprovados usando 'reduce'
        const somaNotas = alunosAprovados.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);

        // Calcula a média, verificando se há alunos aprovados para evitar divisão por zero
        return alunosAprovados.length > 0 ? somaNotas / alunosAprovados.length : 0;
    }
}

// Cria uma lista de objetos 'Aluno'
const alunosData = [
    new Aluno('Alice', 8),
    new Aluno('Bob', 6),
    new Aluno('Charlie', 9),
    new Aluno('David', 5),
    new Aluno('Eve', 7),
];

// Chama o método estático para calcular a média
const mediaOrientadaObjeto = CalculadoraMedia.calcularMediaAprovados(alunosData);
// Imprime o resultado no console
console.log("Média (Orientada a Objeto):", mediaOrientadaObjeto); // Output: Média (Orientada a Objeto): 8