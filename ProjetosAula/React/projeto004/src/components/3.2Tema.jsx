import { useState } from "react";

function Temas() {
  const [temas, setTemas] = useState(false);

  function mudarTema() {
    if (temas === false) {
      setTemas(true);
    } else {
      setTemas(false);
    }
  }
  return (
    <div>
      <p>O tema está {temas ? "escuro" : "claro"}</p>
      <button
        className="Botao"
        onClick={mudarTema}
        style={temas ? { background: "darkred" } : { background: "lightblue" }}
      >
        Mudar Tema
      </button>
    </div>
  );
}
export default Temas;
