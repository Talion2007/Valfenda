import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(100);
  const [count, setCount] = useState(0);
    const [acao, setAcao] = useState(true);
    const [stop , setStop] = useState(true);
 
    useEffect(() => {
      let timer;
      if (acao && time > 0) {
        timer = setTimeout(() => setTime(prev => prev - 1), 14.5);
      } else if (stop == true) {
        timer = setTimeout(() => setCount(prev => prev + 1), 1);
      }
    }, [acao, time, count]);
 
    return (
      <div>
        <h1>{count >= 1 ? "Jogo do Tempo - Clique: " : "Jogo do Tempo - Espere: "}</h1>
        <p>{count} ms</p>
        <br></br>
        {stop == false ? <button onClick={() => { setAcao(true); setTime(Math.random() *100); setCount(0); setStop(true)}}>Reiniciar</button> : count >= 1 ? <button onClick={() => setStop(false)}>Pare!!!!!</button> : <button>Espere...</button> }
      </div>
    );
}

export default App
