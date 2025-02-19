import "./styles/Perfil.css";
import { useState } from "react";

function Perfill(props) {

  const [seguir, setSeguir] = useState("Seguir")

function seguirPolitico(){
  if (seguir == "Seguir"){
  setSeguir("Seguindo")
  } else {
    setSeguir("Seguir")
  }
}

    return (
          <article>
            <h1>{props.nome}</h1>
            <img src={props.img} alt="Foto de Perfil" />
            <p>{props.descrição}</p>
            <button onClick={seguirPolitico}>{seguir}</button>
          </article>
    )
}

export default Perfill;