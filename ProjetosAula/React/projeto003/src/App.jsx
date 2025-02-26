import { useState } from "react";
import Carrinho from "./components/Carrinho";
import "./App.css";

function App() {
  const [text, setText] = useState("Maça");
  const [itens, setItens] = useState([]);

  function addItem(fruta) {
    setItens((itens) => [...itens, fruta]);
  }

  function clearAll() {
    setItens([]);
  }

  const horario = newDate().getHours

  return (
    <>
      <div className="AllDiv">
        {" "}
        <Carrinho itens={itens} />
        <div>
        <button className="Delete" onClick={clearAll}>            Clear All
        </button>
          <input onChange={(e) => setText(e.target.value)} />
          <button onClick={() => addItem(text)}>Add {text}</button>
        </div>
      </div>
    </>
  );
}

export default App;
