// Problema: Calcular a média de notas de alunos aprovados (nota >= 7) em uma lista de alunos.
// Abordagem Imperativa: Foco: Descrever como o programa deve realizar uma tarefa, passo a passo.
//Uso de variáveis mutáveis para armazenar estado.Controle de fluxo explícito(loops, condicionais).
// Foco em algoritmos e procedimentos.

const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bob', nota: 6 },
    { nome: 'Charlie', nota: 9 },
    { nome: 'David', nota: 5 },
    { nome: 'Eve', nota: 7 },
];

function calcularMediaAprovadosImperativo(alunos) {
    // Inicializa a soma das notas
    let soma = 0;
    // Inicializa o contador de alunos aprovados
    let contador = 0;

    // Itera sobre a lista de alunos usando um loop 'for'
    for (let i = 0; i < alunos.length; i++) {
        // Obtém o aluno atual
        const aluno = alunos[i];

        // Verifica se o aluno está aprovado (nota >= 7)
        if (aluno.nota >= 7) {
            // Se aprovado, adiciona a nota à soma
            soma += aluno.nota;
            // Incrementa o contador de alunos aprovados
            contador++;
        }
    }

    // Verifica se há algum aluno aprovado para evitar divisão por zero
    if (contador === 0) {
        // Se não houver alunos aprovados, retorna 0
        return 0;
    }

    // Calcula a média das notas dos alunos aprovados
    return soma / contador;
}

// Chama a função para calcular a média
const mediaImperativa = calcularMediaAprovadosImperativo(alunos);
// Imprime o resultado no console
console.log("Média (Imperativa):", mediaImperativa); // Output: Média (Imperativa): 8