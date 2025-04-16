import { useState } from 'react'

function Cadastro() {
  const [cadastro, setCadastro] = useState("")

  return (
    <div className='cadastro'>
       <h2>Cadastro: </h2>
       <br/>
        <label>Pessoa Fisica ou Jurídica:
          {["CPF", "CNPJ"].map((topico) => (
            <label key={topico}>
              <input
                type="radio"
                value={topico}
                checked={cadastro === topico}
                onChange={(e) => setCadastro(e.target.value)}
              ></input>
              {topico}
            </label>
          ))}
        </label>
        <br/>

        {cadastro == "CPF" && (
          <>
            <label>Digite o número do CPF:</label>
            <br/>
            <input type="number" placeholder="Digite o número do CPF" />
          </>
        )}
        <br/>

        {cadastro == "CNPJ" && (
          <>
            <label>Digite o número do CNPJ:</label>
            <br/>
            <input type="number" placeholder="Digite o número do CNPJ" />
            <br/>
            <label>Digite o nome da empresa:</label>
            <br/>
            <input type="text" placeholder="Digite o nome da empresa" />
          </>
        )}
    </div>
  )
}

export default Cadastro
