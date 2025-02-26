import { useState } from "react";
function Formulario() {
  const [nome, setNome] = useState("Carlão da Caminhonete");

  return (
    <div>
      <input
        value={nome}
        placeholder="Digite um Nome"
        onChange={(e) => setNome(e.target.value)}
      ></input>
      <p>{nome}</p>
      {nome.length >= 0 && nome.length < 3 && <p>Nome é menor que 5</p>}
    </div>
  );
}
export default Formulario;
