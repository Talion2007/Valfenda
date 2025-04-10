import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
       <h3>Preço: {name * count}</h3>
       <label>
                    <select onChange={(e) => setName(e.target.value)} value={name}>
                        <option value={100} >Fone</option>
                        <option value={2000} >Notebook</option>
                        <option value={3000} >Televisão</option>
                        <option value={4000} >Nintendinho</option>
                    </select>
                    <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
                </label>
    </>
  )
}

export default App
