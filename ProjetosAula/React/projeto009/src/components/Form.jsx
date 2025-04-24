import { useState, useEffect } from "react";
import Cantina from "../assets/cantina.mp3"
import Fox from "./Fox"
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
    const [porcentagem, setPorcentagem] = useState(() => localStorage.getItem('porcentagem') || 0);
    const [termos, setTermos] = useState(() => localStorage.getItem('termos') || false);
    const [audioTocado, setAudioTocado] = useState(() => localStorage.getItem('audioTocado') || false);
    const [tema, setTema] = useState(() => localStorage.getItem('tema') || true);
    const [apelido, setApelido] = useState(() => localStorage.getItem('apelido') || '');
    const [complemento, setComplemento] = useState(() => localStorage.getItem('complemento') || '');
    const [erro, setErro] = useState("");

    function submitted(e) {
        e.preventDefault();
        if (name !== "enzzo") setErro("Nome inválido");
        else if (email !== "enzzo@gmail.com") setErro("E-mail inválido");
        else if (genero !== "outro") setErro("Gênero Incorreto");
        else if (generoAlternativo !== "robocop gay") setErro("Gênero inválido");
        else if (password !== "08122007") setErro("Senha inválida");
        else if (carro !== "transformer") setErro("Carro Inválido");
        else if (birthday !== "2007-12-08") setErro("Nascimento Inválido");
        else if (porcentagem != 101) setErro("Porcentagem Inválida");
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
        localStorage.setItem('porcentagem', porcentagem);
        localStorage.setItem('termos', termos);
        localStorage.setItem('tema', tema);
    }, [name, email, genero, generoAlternativo, password, carro, birthday, termos, tema, porcentagem]);

    return (
        <div className={`all ${tema}`}>
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
                <label onChange={(e) => setPorcentagem(e.target.value)} for="porcentagem">Porcentagem Gay {porcentagem}%:
                    <input type="range" min="0" max="101" id="porcentagem" name="porcentagem" />
                </label>
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
                <label> Alterar Tema:
                    <input type="checkbox" checked={tema} onChange={(e) => setTema(e.target.checked)} />
                </label>
                <br></br>
                <h3>Nível Gay: {apelido * complemento}mil</h3>
                <label>Escolha o Apelido:
                    <select onChange={(e) => setApelido(e.target.value)} value={apelido}>
                        <option value={10} >Enzzo</option>
                        <option value={20} >Enzzinho</option>
                        <option value={30} >Enzza</option>
                        <option value={40} >Enzzete</option>
                        <option value={50} >Biscate</option>
                    </select>
                    <select onChange={(e) => setComplemento(e.target.value)} value={complemento}>
                        <option value={10} >Viado</option>
                        <option value={20} >Gay</option>
                        <option value={30} >Boiola</option>
                        <option value={40} >Travesti</option>
                        <option value={50} >do Itantingão</option>
                    </select>
                </label>
                <br />
                <Fox />
                <br />
                <h3>Digite seu FeedBack: </h3>
                <textarea placeholder="Digite aqui!" rows="5" cols="50"></textarea>
                <button onClick={TocarAudio}>Enviar</button>
                {audioTocado ? <>
                    <h2>FODASSE SUA OPINIÃO!</h2>
                    <audio src={Cantina} autoPlay loop></audio>
                </> : null}
                <br></br>
            </div> : <h2>Olá, você não é Enzzo</h2>}
        </div>
    )
}

export default Form;