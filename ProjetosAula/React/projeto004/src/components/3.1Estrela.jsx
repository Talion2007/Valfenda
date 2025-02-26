import  { useState } from 'react';

function Avaliacao() {
  const [avaliacao, setAvaliacao] = useState(0);

  const handleClick = (estrela) => {
    setAvaliacao(estrela);
  };

  const renderEstrelas = () => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          style={{ cursor: 'pointer', color: i <= avaliacao ? 'gold' : 'gray', fontSize: '2vw' }}
        >
        𓇼
        </span>
      );
    }
    return estrelas;
  };

  return (
    <div>
      {renderEstrelas()}
      <p>Você deu {avaliacao} estrelas.</p>
    </div>
  );
}

export default Avaliacao;