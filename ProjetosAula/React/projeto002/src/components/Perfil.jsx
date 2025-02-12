import "./styles/Perfil.css";

function Perfil({data}) {
    return (
        <section className="perfil">
        {data.nome.map((name, index) => (
          <article>
            <h1>{name}</h1>
            <img src={data.photos[index]} alt="Foto de Perfil" />
            <p>{data.descrição[index]}</p>
          </article>
        ))}
      </section>
    )
}

export default Perfil;