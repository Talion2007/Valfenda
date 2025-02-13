import "./styles/Perfil.css";

function Perfill(props) {
    return (
        <section className="perfil">
          <article>
            <h1>{props.nome}</h1>
            <img src={props.img} alt="Foto de Perfil" />
            <p>{props.descrição}</p>
          </article>
      </section>
    )
}

export default Perfill;