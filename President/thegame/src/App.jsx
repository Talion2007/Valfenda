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
  const [end, setEnd] = useState("")
  const [multiply, setMultiply] = useState(1)

  function comprarVoto() {
    if (dinheiro >= 1 *multiply) {
      setVoto((voto) => voto + 1*multiply);
      setDinheiro((dinheiro) => dinheiro - 1*multiply);
    }
  }

  function venderVoto() {
    if (voto >= 1*multiply) {
      setVoto((voto) => voto - 1*multiply);
      setDinheiro((dinheiro) => dinheiro + preco*multiply);
    }
  }

  function comprarOuro() {
    if (dinheiro >= 10*multiply) {
      setOuro((ouro) => ouro + 1*multiply);
      setDinheiro((dinheiro) => dinheiro - 10*multiply);
    }
  }

  function aumentarPrecoOuro() {
    if (ouro >= i) {
      setOuro((ouro) => ouro - i);
      setPreco((preco) => preco * 2);
      setI((i) => i * 10);
    }

    if (i >= 10000000) {
      setPreco((preco) => preco * 2);
      setI((i) => (i = "MAX"));
    }
  }

  function comprarJoia() {
    if (ouro >= 100*multiply) {
      setJoia((joia) => joia + 1*multiply);
      setOuro((ouro) => ouro - 100*multiply);
    }
  }

  function aumentarPrecoJoia() {
    if (joia >= j) {
      setJoia((joia) => joia - j);
      setPreco((preco) => preco * 2);
      setJ((j) => j * 10);
    }

    if (j >= 10000000) {
      setPreco((preco) => preco * 2);
      setJ((j) => (j = "MAX"));
    }
  }

  function comprarBraslia() {
    if (joia >= 100000000) {
      setJoia(joia => joia - 100000000)
      setEnd("Você Comprou Brasília, Parabens!!!")
    }
  }

  function moneyCash() {
    setDinheiro(100000)
    setVoto(300000)
    setOuro(10000000)
    setJoia(99987000)
  }

  function multiplyPurchase() {
    if (multiply == 1) {
      setMultiply(10)
    }
    if (multiply == 10) {
      setMultiply(100)
    }
    if (multiply == 100) {
      setMultiply(1)
    }
    }

  return (
    <article>
      <h1>Idle President<button className="secreto" onClick={moneyCash}> - </button>The Game</h1>
      <img src={Collor}></img>
      <h1>{end}</h1>
      <div>
        <p><strong>
          Votos: {voto}🔖 | Dinheiro: {dinheiro}💸 | Ouro: {ouro}💰 | Joia:{" "}
          {joia}💎 | Preço do Voto: {preco}x</strong>
        </p>
      </div>

      <div>
        <button onClick={comprarVoto}>Comprar Voto ({1*multiply} dinheiro)</button>
        <button onClick={venderVoto}>Vender Voto ({1*multiply} voto)</button>
      </div>

      <div>
        <button onClick={comprarOuro}>Comprar Ouro ({10*multiply} dinheiros)</button>
        <button onClick={aumentarPrecoOuro}>Aumentar Preço ({i} ouros)</button>
      </div>

      <div>
        <button onClick={comprarJoia}>Comprar Joia ({100*multiply} ouros)</button>
        <button onClick={aumentarPrecoJoia}>Aumentar Preço ({j} joias)</button>
      </div>

      <div>
        <button onClick={multiplyPurchase}>Multiplicador de Compra: {multiply}x</button>
        <button onClick={comprarBraslia}>Comprar Brasília (1.000.000.000 joias)</button>
      </div>
    </article>
  );
}
export default App;
