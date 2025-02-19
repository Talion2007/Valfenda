import List from "./components/Links";
import Text from "./components/Text";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Perfill from "./components/Perfill";
import Cor from "./components/CorEscolha";
import DinamicText from "./components/DinamicText";
import DarkTheme from "./components/DarkTheme";
import PurchaseVote from "./components/PurchaseVote";

import Bolsonaro from "./assets/Bolsonaro.jpg";
import Lula from "./assets/Lula.jpg";
import Dilma from "./assets/Dilma.jpg";
import Eneas from "./assets/Eneas.jpg";
import Getulio from "./assets/Getulio.jpg";
import Janio from "./assets/Janio.jpg";
import Juscelino from "./assets/Juscelino.jpg";
import Itamar from "./assets/Itamar.jpg";
import Haddad from "./assets/Haddad.jpeg";
import Collor from "./assets/Collor.jpg"

import "./App.css";

function App() {
  const one = 1;
  const two = -1;

  let Image =
    "https://th.bing.com/th?id=OSK.24d047cb0ec1edf45aee5c5a1157913e&w=102&h=102&c=7&o=6&dpr=1.3&pid=SANGAM";

  return (
    <>
      <Header />

      <section>
        <Text />
        <List />
      </section>

      <section className="perfil">
        <Perfill
        nome = "Getulio Vargas"
        descrição = "Ex-Presidente do Brasil"
        img = {Getulio}
        />
        <Perfill
        nome = "Bolsonaro"
        descrição = "Ex-Presidente do Brasil"
        img = {Bolsonaro}
        />
        <Perfill
        nome = "Lula"
        descrição = "Presidente do Brasil"
        img = {Lula}
        />
        <Perfill
        nome = "Dilma"
        descrição = "Ex-Presidente do Brasil"
        img = {Dilma}
        />
        <Perfill
        nome = "Eneas"
        descrição = "Ex-Candidato a Presidente do Brasil"
        img = {Eneas}
        />
        <Perfill
        nome = "Janio"
        descrição = "Ex-Presidente do Brasil"
        img = {Janio}
        />
        <Perfill
        nome = "Juscelino"
        descrição = "Ex-Presidente do Brasil"
        img = {Juscelino}
        />
        <Perfill
        nome = "Itamar"
        descrição = "Ex-Presidente do Brasil"
        img = {Itamar}
        />
        <Perfill
        nome = "Haddad"
        descrição = "Ex-Candidato a Presidente do Brasil"
        img = {Haddad}
        />
        <Perfill
        nome = "Collor"
        descrição = "Ex-Candidato a Presidente do Brasil"
        img = {Collor}
        />
      </section>

      <section>
        <DinamicText/>
      </section>

      <section>
        <DarkTheme/>
      </section>

      <section>
        <Button
          text="Tira Essa Paixão da Cabeça"
          class="classOne"
          operation={one}
        />
        <Button
          text="Tira Essa Tristeza do Olhar"
          class="classDuo"
          operation={two}
        />
      </section>

      <section>
        <Cor />
      </section>

      <PurchaseVote/>

      <Footer text="AlfaOne Development" img={Image} />
    </>
  );
}
export default App;
