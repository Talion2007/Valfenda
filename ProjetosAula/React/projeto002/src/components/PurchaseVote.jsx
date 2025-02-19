import "./styles/PurchaseVote.css";
import { useState } from "react";
function PurchaseVote() {
  const [voto, setVoto] = useState(0);
  const [dinheiro, setDinheiro] = useState(10)
  const [ouro, setOuro] = useState(0)
  const [preco, setPreco] = useState(2)
  const [i, setI] = useState(10)

  function comprarVoto() {
    if (dinheiro >= 1) {
    setVoto(voto => voto + 1)
    setDinheiro(dinheiro => dinheiro - 1)
    }
  }

  function venderVoto() {
    if (voto >= 1) {
        setVoto(voto => voto - 1)
        setDinheiro(dinheiro => dinheiro + preco)
    }
  }

  function comprarOuro() {
    if (dinheiro >= 10) {
        setOuro(ouro => ouro + 1)
        setDinheiro(dinheiro => dinheiro - 10)
    }
  }

  function addCarrinho() {
    setItem(item => item + 1)
    const cor = "verde"
  }

  function rmCarrinho() {
    if (item >= 1) {
        setItem(item => item - 1)
        const cor  = "vermelho"
    }
  }

  function aumentarPreco() {
    if (ouro >= i) {
        setOuro(ouro => ouro - 10)
        setPreco(preco => preco * 2)
        setI(i => i * 10)
    }
  }

  return (
    <article className="article">
        <div>
      <button
        onClick={comprarVoto}
      >
        Comprar Voto (1 dinheiro)
      </button>
      <p>Votos: {voto}🔖 | Dinheiro: {dinheiro}💸</p>
      <button
      onClick={venderVoto}
      >Vender Voto (1 voto)</button>
      </div>
      <div>
        <button onClick={comprarOuro}>
            Comprar Ouro (10 dinheiros)
        </button>
        <p>Ouro na Conta: {ouro}💰 | Preço do Voto: {preco}</p>
        <button onClick={aumentarPreco}>
            Aumentar Preço ({i} ouros)
        </button>
      </div>
    </article>
  );
}
export default PurchaseVote;
