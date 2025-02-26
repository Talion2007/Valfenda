function Lista({ itens }) {
  return (
    <div>
      {itens.length > 0 ? (
        <ul>
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}{" "}
          
        </ul>
      ) : (
        <p>Nenhum Produto Disponivel!</p>
      )}
    </div>
  );
}
export default Lista;
