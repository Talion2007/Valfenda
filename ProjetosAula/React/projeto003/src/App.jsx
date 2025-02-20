import { useState } from "react";
import Carrinho from "./components/Carrinho";
import "./App.css";

function App() {
  const [itens, setItens] = useState([]);

  function addItem(fruta){
    setItens(itens => [...itens, fruta])
  }

  function clearAll(){
    setItens([])
  }

  return (
    <>
      <div className="AllDiv">
        {" "}
        <Carrinho itens={itens} />

<div>
        <button onClick={() => addItem("Maça")}>Add Maça</button>
      <button onClick={() => addItem("Banana")}>Add Banana</button>
      <button onClick={() => addItem("Laranja")}>Add Laranja</button>
      <button onClick={() => addItem("Pêra")}>Add Pêra</button>
      <button onClick={() => addItem("Amora")}>Add Amora</button>
      </div>
      <div>
      </div>
      <div>

      </div>
      <button className="Delete" onClick={clearAll}>Clear All</button>
      </div>
    </>
  );
}

export default App;
