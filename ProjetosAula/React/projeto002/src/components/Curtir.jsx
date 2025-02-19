import "./styles/Curtir.css";
import { useState } from "react";
function Curtir() {
  const [count, setCount] = useState(0);
  const [tema, setTema] = useState(true)

  function alterarContagem() {
    setCount(count => count + 1)
    if(tema == true) {
    setTema(tema => tema == false)
  }
}

  return (
    <article className="article">
      <button className={tema ? "classOne" : "classDuo"} onClick={alterarContagem}>Curtir👍</button>
      <p>{count}</p>
    </article>
  );
}
export default Curtir;
