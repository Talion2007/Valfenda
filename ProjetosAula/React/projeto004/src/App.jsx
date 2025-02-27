import { useState } from "react"

import Seguir from "./components/1.1Seguir.jsx";
import Notificacoes from "./components/1.2Notificacoes.jsx";
import Formulario from "./components/1.3Formulario.jsx";
import Lista from "./components/1.4Lista.jsx";

import Login from "./components/2.1LoginLogout.jsx";
import Carrinho from "./components/2.2Carrinho.jsx";
import Time from "./components/2.3Time.jsx";
import Dashboard from "./components/2.4Dashboard.jsx";

import Avaliacao from "./components/3.1Estrela.jsx";
import Temas from "./components/3.2Tema.jsx";
import Jogo from "./components/3.3NumeroAleatorio.jsx";

import "./App.css";

function App() {
  const [notify, setNotify] = useState(0);
  const [nomesProdutos, setNomesProdutos] = useState("Maça");
  const [produtos, setProdutos] = useState([]);

  const [text, setText] = useState("Maça");
  const [itens, setItens] = useState([]);
  const [login, setLogin] = useState(false);

  function addItem(fruta) {
    setItens((itens) => [...itens, fruta]);
  }

  function addProdutos(fruta) {
    setProdutos((produtos) => [...produtos, fruta]);
  }

  function clearAll() {
    setItens([]);
  }

  function clearAllProdutos() {
    setProdutos([]);
  }

  return (

    <>
      <div className="Itens">
        <h2>1.1 - Botão “Seguir / Deixar de Seguirˮ</h2>
        <Seguir />
      </div>

      <div className="Itens">
        <h2>1.2 - Exibir Notificação Condicionalmenteˮ</h2>
        <input onChange={(e) => setNotify(e.target.value)} type="number" />
        <Notificacoes notify={notify} />
      </div>

      <div className="Itens">
        <h2>1.3 - Formulário com Mensagem de Erro</h2>
        <Formulario />
      </div>

      <div className="Itens">
        <h2>1.4 - Lista de Produto</h2>
        <Lista itens={produtos} />
        <input onChange={(e) => setNomesProdutos(e.target.value)} />
        <p></p>
        <div>
          <button onClick={() => addProdutos(nomesProdutos)}>
            Add {nomesProdutos}
          </button>
          <button className="Delete" onClick={clearAllProdutos}>
            Clear All
          </button>
        </div>
      </div>

      <div className="Itens">
        <h2>2.1 - Painel do Usuário (Login/Logout)</h2>
        <Login login={login} setLogin={setLogin} />
      </div>

      <div className="Itens">
        <h2>2.2 - Carrinho de Compras Dinâmico</h2>
        <Carrinho itens={itens} />
        <input onChange={(e) => setText(e.target.value)} />
        <p></p>
        <div>
          <button onClick={() => addItem(text)}> Add {text}</button>
          <button className="Delete" onClick={clearAll}>
            Clear All
          </button>
        </div>
      </div>

      <div className="Itens">
        <h2>2.3 - Mensagem de Boas-Vindas Personalizada</h2>
        <Time />
      </div>

      <div className="Itens">
        <h2>2.4 - Dashboard com Notificações</h2>
        <Dashboard login={login} notify={notify} />
      </div>

      <div className="Itens">
        <h2>3.1 - Sistema de Avaliação com Estrelas</h2>
        <Avaliacao />
      </div>

      <div className="Itens">
        <h2>3.2 - Criar um Modo Escuro (Dark Mode)</h2>
        <Temas />
      </div>

      <div className="Itens">
        <h2>3.3 - Jogo de Adivinhação</h2>
        <Jogo />
      </div>
    </>
  );
}

export default App;
