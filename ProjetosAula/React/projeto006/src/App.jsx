import { useState, useEffect } from 'react'
import Pinto from "./assets/pinto.png"
import PintoPreto from "./assets/pintopreto.png"
import Galo from "./assets/galo.png"
import GaloPreto from "./assets/galopreto.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tema, setTema] = useState(false)
  const [miopia, setMiopia] = useState(true)
  const [visao, setVisao] = useState(false)
  const [pintoClaro, setPintoClaro] = useState(Pinto)
  const [pintoEscuro, setPintoEscuro] = useState(PintoPreto)
  const [hora, setHora] = useState(0)
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`

    if (count > 10) {
      alert(`Você clicou ${count} vezes!`);
      setCount(0);
    }
  }, [count]);

  /*
  useEffect(() => {
    console.log('Componente montado!');
    }, []);
    
    useEffect(() => {
      console.log('Componente atualizado!');
      });
      */

  useEffect(() => {
    setPintoClaro(visao ? Galo : Pinto);
    setPintoEscuro(visao ? GaloPreto : PintoPreto);
  }, [visao]);

  useEffect(() => {
    document.body.style.backgroundColor = tema ? 'darkred' : 'lightblue';
    document.body.style.color = tema ? 'lightblue' : 'darkred';

    console.log('Tema alterado!');
  }, [tema]);

  useEffect(() => {
    document.body.style.fontSize = miopia ? '1em' : '3em';
    document.body.style.fontWeight = miopia ? 'normal' : 'bold';
  }, [miopia]);

  /*
  useEffect(() => {
    const interval = setInterval(() => {
      const Hora = new Date().getHours().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        });
        const Minuto = new Date().getMinutes().toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          });
          const Segundo = new Date().getSeconds().toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            });
            
            setHora(Hora + ':' + Minuto + ':' + Segundo);
            }, 100);
            
            return () => {
              clearInterval(interval);
              }
              });
              */

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, []);

  const [cadeirante, setCadeirante] = useState("👨‍🦽");
  const [lugar , setLugar] = useState(0);
  const [mensagem, setMensagem] = useState("Clique no mapa para escolher o caminho ou a casa para encerrar!");
  const [condicao, setCondicao] = useState(0);

  useEffect(() => {
    if (condicao != 0 && coords.x > 1850 && coords.x < 1900 && coords.y > 910 && coords.y < 980) {
      setLugar(null);
      setMensagem("Você acabou " + condicao)
    };

    if (lugar == 0 && coords.x > 920 && coords.x < 995 && coords.y > 910 && coords.y < 980) {
      setCadeirante("🚶‍♂️");
      setLugar(1);
      setMensagem("Você foi trabalhar como falso cadeirante e se fudeu!")
      setCondicao("Mal")
    }

    if (lugar == 0 && coords.x > 15 && coords.x < 95 && coords.y > 910 && coords.y < 980) {
      setCadeirante("👨‍🦽👩‍🦽");
      setLugar(2);
      setMensagem("Você foi no Oba Oba como cadeirante e arrumou uma cadeirante!!")
      setCondicao("Bom")
    }

    if (lugar == 0 && coords.x > 1850 && coords.x < 1900 && coords.y > 60 && coords.y < 125) {
      setCadeirante("🏃‍♂️");
      setLugar(3);
      setMensagem("Você foi no hospital e deixou a cadeira lá!")
      setCondicao("Ótimo")
    }
    
    if (lugar == 1 && coords.x > 1850 && coords.x < 1900 && coords.y > 60 && coords.y < 125) {
      setCadeirante("🧍‍♂️");
      setLugar(null);
      setMensagem("Você virou drogado!")
      setCondicao("Péssimo")
    }

    if (lugar == 2 && coords.x > 920 && coords.x < 995 && coords.y > 910 && coords.y < 980) {
      setCadeirante("👨‍🦽👩‍🦽💰");
      setLugar(2.1);
      setMensagem("Você foi trabalhar como cadeirante com a sua cadeirante, e vocês ganharam dinheiro! como PCD's")
      setCondicao("Muito bom")
    }

    if (lugar == 2 && coords.x > 1850 && coords.x < 1900 && coords.y > 60 && coords.y < 125) {
      setCadeirante("🏃👩‍🦽");
      setLugar(2.2);
      setMensagem("Você foi no hospital e deixou a cadeira lá, mas a sua cadeirante não!")
      setCondicao("Normal")
    }

    if (lugar == 3 && coords.x > 15 && coords.x < 95 && coords.y > 910 && coords.y < 980) {
      setCadeirante("🕺💰");
      setLugar(3.1);
      setMensagem("Você foi trabalhar e lucrou bastante")
      setCondicao("Muito bom!")
    }

    if (lugar == 3 && coords.x > 1850 && coords.x < 1900 && coords.y > 530 && coords.y < 600) {
      setCadeirante("👪");
      setLugar(4);
    }
  }, [coords]);

  return (
    <>
      <p style={{ position: 'fixed', top: coords.y, left: coords.x, fontSize: '2.5em' }}>{cadeirante}</p>
      <img src={tema ? pintoClaro : pintoEscuro} alt="Pinto" style={{ width: visao ? '25em' : '8em', height: visao ? '30em' : '10em' }} />
      <h2>Voce clicou {count} vezes!</h2>
      <h2>Horário: {hora}</h2>
      <h2>{mensagem}</h2>
      <p>
        Mouse positioned at:{' '}
        <b>
          ({coords.x}, {coords.y})
        </b>
      </p>
      <section className='alinhar'>
        <button onClick={() => setCount(count + 1)}>
          Clique aqui
        </button>
        <br />
        <button onClick={() => setTema(!tema)}>
          {tema ? 'Tema Claro' : 'Tema Escuro'}
        </button>
        <br />
        <button onClick={() => setMiopia(!miopia)}>
          {miopia ? 'Zoom In' : 'Zoom Out'}
        </button>
        <br />
        <button onClick={() => setVisao(!visao)}>
          {visao ? 'Encolher Pinto' : 'Crescer Pinto'}
        </button>
      </section>
      <p style={{ position: 'fixed', top: 800, right: 0, fontSize: '5em' }}>🏡</p>
      <p style={{ position: 'fixed', top: -50, right: 0, fontSize: '5em' }}>🏥</p>
      <p style={{ position: 'fixed', top: 800, left: 0, fontSize: '5em' }}>🏩</p>
      <p style={{ position: 'fixed', top: 425, right: 0, fontSize: '5em' }}>🏢</p>
      <p style={{ position: 'fixed', top: 800, left: 0, right:0, fontSize: '5em' }}>🏭</p>
    </>
  )
}

export default App;
