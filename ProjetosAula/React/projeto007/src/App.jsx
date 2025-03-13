import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        <h1>{count >= 1 ? "Jogo do Tempo (Clique): " : "Jogo do Tempo (Espere): "}</h1>
        <p>{count} ms</p>
        {count >= 1 ? <button onClick={() => setStop(false)}>Parar</button> : <button>Espere...</button>}
        {stop == false ? <button onClick={() => { setAcao(true); setTime(100); setCount(0); setStop(true)}}>Reiniciar</button> : "" }
      </div>
    );
}

export default App
