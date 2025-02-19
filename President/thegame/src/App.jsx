import "./App.css";
import { useState } from "react";
function App() {
  const [voto, setVoto] = useState(0);
  const [dinheiro, setDinheiro] = useState(10);
  const [ouro, setOuro] = useState(0);
  const [preco, setPreco] = useState(2);
  const [i, setI] = useState(10);
  const [joia, setJoia] = useState(0);
  const [j, setJ] = useState(10);

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
    if (ouro >= 10) {
      setJoia((joia) => joia + 1);
      setOuro((ouro) => ouro - 10);
    }
  }

  function aumentarPrecoJoia() {
    if (joia >= j) {
      setOuro((ouro) => ouro - 10);
      setPreco((preco) => preco * 2);
      setJ((j) => j * 10);
    }

    if (j >= 10000000) {
      setI((j) => (j = "MAX"));
    }
  }

  return (
    <article>
      <div>
        <p>
          Votos: {voto}🔖 | Dinheiro: {dinheiro}💸 | Ouro: {ouro}💰 | Preço do
          Voto: {preco}x
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
        <button onClick={comprarJoia}>Comprar Joia (10 ouros)</button>
        <button onClick={aumentarPrecoJoia}>Aumentar Preço ({j} joias)</button>
      </div>
    </article>
  );
}
export default App;
