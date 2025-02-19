import "./App.css";
import Collor from "./assets/Collor.jpg"
import { useState } from "react";
function App() {
  const [voto, setVoto] = useState(0);
  const [dinheiro, setDinheiro] = useState(10);
  const [ouro, setOuro] = useState(0);
  const [preco, setPreco] = useState(2);
  const [i, setI] = useState(10);
  const [joia, setJoia] = useState(0);
  const [j, setJ] = useState(10);
  const [end, setEnd] = useState()

  function comprarVoto() {
    if (dinheiro >= 1) {
      setVoto((voto) => voto + 1);
      setDinheiro((dinheiro) => dinheiro - 1);
    }
  }

  function venderVoto() {
    if (voto >= 1) {
      setVoto((voto) => voto - 1);
      setDinheiro((dinheiro) => dinheiro + preco);
    }
  }

  function comprarOuro() {
    if (dinheiro >= 10) {
      setOuro((ouro) => ouro + 1);
      setDinheiro((dinheiro) => dinheiro - 10);
    }
  }

  function aumentarPrecoOuro() {
    if (ouro >= i) {
      setOuro((ouro) => ouro - 10);
      setPreco((preco) => preco * 2);
      setI((i) => i * 10);
    }

    if (i >= 10000000) {
      setI((i) => (i = "MAX"));
    }
  }

  function comprarJoia() {
    if (ouro >= 100) {
      setJoia((joia) => joia + 1);
      setOuro((ouro) => ouro - 100);
    }
  }

  function aumentarPrecoJoia() {
    if (joia >= j) {
      setJoia((joia) => joia - 10);
      setPreco((preco) => preco * 2);
      setJ((j) => j * 10);
    }

    if (j >= 10000000) {
      setI((j) => (j = "MAX"));
    }
  }

  function comprarBraslia() {
    if (joia >= 100000000) {
      setJoia(joia => joia - 100000000)
      setEnd(end => end == "Você zerou o Game, Parabens!!!")
    }
  }

  return (
    <article>
      <h1>Idle President - The Game</h1>
      <img src={Collor}></img>
      <div>
        <p><strong>
          Votos: {voto}🔖 | Dinheiro: {dinheiro}💸 | Ouro: {ouro}💰 | Joia:{" "}
          {joia}💎 | Preço do Voto: {preco}x</strong>
        </p>
      </div>

      <div>
        <button onClick={comprarVoto}>Comprar Voto (1 dinheiro)</button>
        <button onClick={venderVoto}>Vender Voto (1 voto)</button>
      </div>

      <div>
        <button onClick={comprarOuro}>Comprar Ouro (10 dinheiros)</button>
        <button onClick={aumentarPrecoOuro}>Aumentar Preço ({i} ouros)</button>
      </div>

      <div>
        <button onClick={comprarJoia}>Comprar Joia (100 ouros)</button>
        <button onClick={aumentarPrecoJoia}>Aumentar Preço ({j} joias)</button>
      </div>

      <div>
        <button onClick={comprarBraslia}>Comprar Brasília (1.000.000.000 joias)</button>
      </div>

      <h2>{end}</h2>
    </article>
  );
}
export default App;
