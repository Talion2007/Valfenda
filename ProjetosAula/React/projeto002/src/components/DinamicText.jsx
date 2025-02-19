import { useState } from "react";
import "./styles/DinamicText.css";
import bolsonaro from "../assets/Bolsonaro.jpg";
import lula from "../assets/Lula.jpg";
import dilma from "../assets/Dilma.jpg";
import eneas from "../assets/Eneas.jpg";
import getulio from "../assets/Getulio.jpg";
import juscelino from "../assets/Juscelino.jpg";
import janio from "../assets/Janio.jpg";
import itamar from "../assets/Itamar.jpg";
import haddad from "../assets/Haddad.jpeg";
import collor from "../assets/Collor.jpg"

function DinamicText() {
  const [text, setText] = useState("");

  const textLower = text.toLowerCase();

  const imagens = [bolsonaro, lula, dilma, eneas, getulio, juscelino, janio, itamar, haddad, collor];

  const nomes = ["bolsonaro", "lula", "dilma", "eneas", "getulio", "juscelino", "janio","itamar", "haddad", "collor"];

  if (nomes.includes(textLower)) {
    var imagemDisplay = imagens[nomes.indexOf(textLower)];
  }

  return (
    <article className="DinamicText">
      <input onChange={(e) => setText(e.target.value)} />
      <img className={textLower} src={imagemDisplay} />
      <p>Texto Inserido: {text}</p>
    </article>
  );
}
export default DinamicText;
