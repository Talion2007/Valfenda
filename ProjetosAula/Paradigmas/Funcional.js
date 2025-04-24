// Modelo Funcional
// Funções puras (sem efeitos colaterais, mesmo input sempre produz o mesmo output).
// Foco: Construir programas através da aplicação e composição de funções.
// Imutabilidade (dados não são modificados após a criação).
//Uso de funções de ordem superior(funções que recebem outras funções como argumentos ou retornam funções).
// Ênfase na transformação de dados.

const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bob', nota: 6 },
    { nome: 'Charlie', nota: 9 },
    { nome: 'David', nota: 5 },
    { nome: 'Eve', nota: 7 },
];

function calcularMediaAprovadosFuncional(alunos) {
    // Filtra a lista de alunos para obter apenas os aprovados (nota >= 7)
    const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);

    // Calcula a soma das notas dos alunos aprovados usando 'reduce'
    const somaNotas = alunosAprovados.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);

    // Calcula a média, verificando se há alunos aprovados para evitar divisão por zero
    return alunosAprovados.length > 0 ? somaNotas / alunosAprovados.length : 0;
}

// Chama a função para calcular a média
const mediaFuncional = calcularMediaAprovadosFuncional(alunos);
// Imprime o resultado no console
console.log("Média (Funcional):", mediaFuncional); // Output: Média (Funcional): 8