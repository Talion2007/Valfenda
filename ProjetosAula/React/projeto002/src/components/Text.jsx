import './styles/Text.css';

function Text() {
  return (
    <p className='paragraph'>
      React é uma biblioteca JavaScript de código aberto desenvolvida pelo
      Facebook que é usada para construir interfaces de usuário, especialmente
      para aplicações de página única. Em sua essência, React permite aos
      desenvolvedores criar componentes reutilizáveis que gerenciam seu próprio
      estado, e compô-los para criar interfaces de usuário complexas. Algumas
      das características principais do React incluem:
      <ul>
        <li>
          {" "}
          Componentes: Permite dividir a interface do usuário em componentes
          reutilizáveis, cada um gerenciando seu próprio estado.
        </li>
        <li>
          JSX: Uma extensão de sintaxe que permite escrever código que se parece
          com HTML dentro do JavaScript.
        </li>
        <li>
          Virtual DOM: React cria uma representação virtual do DOM que é mantida
          na memória. Isso permite que React otimize atualizações do DOM real,
          tornando o desempenho mais eficiente.
        </li>
      </ul>
      React é amplamente utilizado na comunidade de desenvolvimento web devido à
      sua eficiência e capacidade de criar interfaces de usuário dinâmicas e
      responsivas.
    </p>
  );
}

export default Text;