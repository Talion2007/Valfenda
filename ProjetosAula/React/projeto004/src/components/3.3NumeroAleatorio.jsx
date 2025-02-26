import { useState } from "react";

function Jogo() {
  const [tentativa, setTentativa] = useState("");
  const [mensagem, setMensagem] = useState("");

  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

  const verificarTentativa = () => {
    setMensagem(
      tentativa == numeroAleatorio ? "Você acertou! 🎉" : "Tente novamente! ❌ "
    );
  };

  return (
    <div>
      <h4>Jogo de Adivinhação</h4>

      <input
        type="number"
        value={tentativa}
        onChange={(e) => setTentativa(e.target.value)}
        min="1"
        max="10"
      />
      <br />
      <br />

      <p>{mensagem}</p>
      <button onClick={verificarTentativa}>Verificar</button>
    </div>
  );
}

export default Jogo;
