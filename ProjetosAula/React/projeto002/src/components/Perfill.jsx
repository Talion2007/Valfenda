import "./styles/Perfil.css";

function Perfill(props) {
    return (
          <article>
            <h1>{props.nome}</h1>
            <img src={props.img} alt="Foto de Perfil" />
            <p>{props.descrição}</p>
          </article>
    )
}

export default Perfill;