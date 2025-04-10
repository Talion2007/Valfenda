import { useState, useEffect } from "react";
import Cantina from "../assets/cantina.mp3"
import Gemido from "../assets/gemido.mp3"
import Contagem from "../components/Contagem";

function Form() {
    const [name, setName] = useState(() => localStorage.getItem('name') || '');
    const [email, setEmail] = useState(() => localStorage.getItem('email') || '');
    const [genero, setGenero] = useState(() => localStorage.getItem('genero') || '');
    const [generoAlternativo, setGeneroAlternativo] = useState(() => localStorage.getItem('generoAlternativo') || '');
    const [password, setPassword] = useState(() => localStorage.getItem('password') || '');
    const [birthday, setBirthday] = useState(() => localStorage.getItem('birthday') || '');
    const [carro, setCarro] = useState(() => localStorage.getItem('carro') || '');
    const [mensagem, setMensagem] = useState(false);
    const [termos, setTermos] = useState(false);
    const [erro, setErro] = useState("");
    const [audioTocado, setAudioTocado] = useState(false);

    function submitted(e) {
        e.preventDefault();
        if (name !== "enzzo") setErro("Nome inválido");
        else if (email !== "enzzo@gmail.com") setErro("E-mail inválido");
        else if (genero !== "outro") setErro("Gênero Incorreto");
        else if (generoAlternativo !== "robocop gay") setErro("Gênero inválido");
        else if (password !== "08122007") setErro("Senha inválida");
        else if (carro !== "transformer") setErro("Carro Inválido");
        else if (birthday !== "2007-12-08") setErro("Nascimento Inválido");
        else if (!termos) setErro("Você deve aceitar os termos de uso.");
        else setErro("");

        setMensagem(
            name === "enzzo" &&
            email === "enzzo@gmail.com" &&
            password === "08122007" &&
            genero === "outro" &&
            generoAlternativo === "robocop gay" &&
            carro === "transformer"
        );
    }

    function TocarAudio() {
        setAudioTocado(true);
    }

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('genero', genero);
        localStorage.setItem('generoAlternativo', generoAlternativo);
        localStorage.setItem('password', password);
        localStorage.setItem('carro', carro);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('termos', termos);
    }, [name, email, genero, generoAlternativo, password, carro, birthday]);

    return (
        <div className="all">
            <h1>Formulário</h1>
            <form onSubmit={submitted}>
                <label>Enter your name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value.toLocaleLowerCase())} placeholder="Digite: Enzzo" />
                <label>Enter your email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite: enzzo@gmail.com" />
                <label>Enter your password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite: 08122007" />
                <label>Enter Your Birthday: </label>
                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                <label>Enter your gender:</label>
                <div>
                    {["masculino", "feminino", "outro"].map((topico) => (
                        <label key={topico}>
                            <input
                                type="radio"
                                value={topico}
                                checked={genero === topico}
                                onChange={(e) => setGenero(e.target.value)}
                            ></input>
                            {topico.charAt(0).toUpperCase() + topico.slice(1)}
                        </label>
                    ))}
                </div>
                {genero == "outro" ?
                    <>
                        <label>Enter your gender:</label>
                        <input type="text" value={generoAlternativo}
                            onChange={(e) => setGeneroAlternativo(e.target.value.toLocaleLowerCase())} placeholder="Digite: Robocop Gay" />
                    </>
                    : null}
                <label>Carro favorito (Verificação): </label>
                <select onChange={(e) => setCarro(e.target.value)} value={carro}>
                    <option value="mustang" >Mustang</option>
                    <option value="opala" >Opala</option>
                    <option value="fiat uno" >Fiat Uno</option>
                    <option value="transformer" >Transformer</option>
                </select>
                <div>
                    <label>Termos: </label>
                    <input type="checkbox" onChange={(e) => setTermos(e.target.checked)} />
                    {erro && <p style={{ color: 'red' }}>{erro}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
            {mensagem ? <div className="rocambole"><h2>Bem vindo, Enzzo Gay</h2>
                <Contagem />
                <br></br>
                <h3>Digite seu FeedBack: </h3>
                <textarea placeholder="Digite aqui!" rows="5" cols="50"></textarea>
                <button onClick={TocarAudio}>Enviar</button>
                <br></br>
            </div> : <h2>Olá, você não é Enzzo</h2>}
                {audioTocado ? <>
                    <audio src={Gemido} autoPlay loop></audio>
                    <h2>FODASSE SUA OPINIÃO!</h2>
                </> : null}
        </div>
    )
}

export default Form;