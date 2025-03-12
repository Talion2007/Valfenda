import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`
  }, [count]);

  return (
    <>
    <h2>Voce clicou {count} vezes!</h2>
    <button onClick={() => setCount(count + 1)}>
      Clique aqui
    </button>
    </>
  )
}

export default App
