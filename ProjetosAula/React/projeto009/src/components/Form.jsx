import { useState, useEffect } from "react";
function Form() {
    const [name, setName] = useState(() => {
        const storedName = localStorage.getItem('name');
        return storedName || '';
    });
    const [email, setEmail] = useState(() => {
        const storedEmail = localStorage.getItem('email');
        return storedEmail || '';
    });
    const [genero, setGenero] = useState(() => {
        const storedGenero = localStorage.getItem('genero');
        return storedGenero || '';
    });

    const [generoAlternativo, setGeneroAlternativo] = useState(() => {
        const storedGeneroAlternativo = localStorage.getItem('generoAlternativo');
        return storedGeneroAlternativo || '';
    });

    const [password, setPassword] = useState(() => {
        const storedPassword = localStorage.getItem('password');
        return storedPassword || '';
    });

    const [birthday, setBirthday] = useState(() => {
        const storedBirthday = localStorage.getItem('birthday');
        return storedBirthday || '';
    })

    const [carro, setCarro] = useState(() => {
        const storedCar = localStorage.getItem('carro')
        return storedCar || "";
    })

    const [mensagem, setMensagem] = useState(false);

    const [termos, setTermos] = useState(false);
    const [erro, setErro] = useState("");

    function submitted(e) {
        e.preventDefault();
        if (name != "enzzo") {
            setErro("Nome inválido");
        } else if (email != "enzzo@gmail.com") {
            setErro("E-mail inválido");
        } else if (genero != "outro") {
            setErro("Gênero Incorreto");
        } else if (generoAlternativo != "robocop gay") {
            setErro("Gênero inválido");
        } else if (password != "123456") {
            setErro("Senha inválida");
        } else if (carro != "transformer") {
            setErro("Carro Inválido");
        } else if (birthday != "2007-12-08") {
            setErro("Nascimento Inválido");
        } else if (!termos) {
            setErro("Você deve aceitar os termos de uso.");
            return;
        } else {
            setErro("");
        }

        if (name == "enzzo" && email == "enzzo@gmail.com" && password == "123456" && genero == "outro" && generoAlternativo == "robocop gay" && carro == "transformer") {
            setMensagem(true)
        } else {
            setMensagem(false)
        }
    }

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('genero', genero);
        localStorage.setItem('generoAlternativo', generoAlternativo);
        localStorage.setItem('password', password);
        localStorage.setItem('carro', carro)
        localStorage.getItem('birthday', birthday);
    }, [name, email, genero, password, carro, birthday]);



    return (
        <div className="all">
            <h1>Formulário</h1>
            <form onSubmit={submitted}>
                <label>Enter your name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value.toLocaleLowerCase())} placeholder="Digite: Enzzo" />
                <label>Enter your email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite: enzzo@gmail.com" />
                <label>Enter your password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite: 123456" />
                <label>Enter Your Birthday: </label>
                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                <label>Enter your gender:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="masculino"
                            checked={genero === "masculino"}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        Masculino
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="feminino"
                            checked={genero === "feminino"}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        Feminino
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="outro"
                            checked={genero === "outro"}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        Outro
                    </label>
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
            {mensagem ? <h2>Bem vindo, Enzzo Gay</h2> : <h2>Olá, você não é Enzzo</h2>}
        </div>
    )
} export default Form;