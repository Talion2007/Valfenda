import "./styles/Curtir.css";
import { useState } from "react";
function Curtir() {
  const [count, setCount] = useState("");
  const [tema, setTema] = useState(true)

  function alterarContagem() {
    setCount(count => count + "💖")
    if(tema == true) {
    setTema(tema => tema == false)
  }
}

  return (
    <article className="article">
      <p>{count}</p>
      <button className={tema ? "classOne" : "classDuo"} onClick={alterarContagem}>Curtir👍</button>
      <p>{count}</p>
    </article>
  );
}
export default Curtir;
