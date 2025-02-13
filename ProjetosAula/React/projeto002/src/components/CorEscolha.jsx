import { useState } from "react";
import "./styles/CorEscolha.css";
function Cor() {
  const [color, setColor] = useState("");

  return (
    <article className="ColorSet">
      <p className={color}>Cor selecionada: {color}</p>

      <select onChange={(e) => setColor(e.target.value)}>
        <option>Nenhuma</option>
        <option>Vermelho</option>
        <option>Amarelo</option>
        <option>Azul</option>
      </select>
    </article>
  );
}
export default Cor;
