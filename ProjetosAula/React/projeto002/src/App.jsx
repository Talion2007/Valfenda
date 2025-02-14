import List from "./components/Links";
import Text from "./components/Text";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Perfill from "./components/Perfill";
import Cor from "./components/CorEscolha";
import "./App.css";

function App() {

  const one = 1;
  const two = -1;

  let Image = "https://th.bing.com/th?id=OSK.24d047cb0ec1edf45aee5c5a1157913e&w=102&h=102&c=7&o=6&dpr=1.3&pid=SANGAM"

  return (
    <>
      <Header />

      <section>
        <Text />
        <List />
      </section>

<section>
      <Perfill nome = "Vitor Hugo" descrição = "Negão" img = "https://i.pinimg.com/originals/d2/f3/28/d2f32866b1bdce2870d62f444052e433.jpg" />
      <Perfill nome = "Murilo Correia" descrição = "Cara do Fone" img = "https://radiocentrocz.com.br/wp-content/uploads/2021/05/tim-maia-1989-%C2%A9-Divulgacao-1024x1024.jpg" />
      <Perfill nome = "William Jr." descrição = "Gordinho do Dogão" img = "https://s3.pixers.pics/pixers/700/FO/35/15/95/09/700_FO35159509_11784272cce509c7baa809643031a58a.jpg" />
</section>

<section>
  <Button text="Tira Essa Paixão da Cabeça" class="classOne" operation = {one}/>
  <Button text="Tira Essa Tristeza do Olhar" class="classDuo" operation = {two} />
</section>

<section>
  <Cor />
</section>


      <Footer
        text="AlfaOne Development"
        img= {Image}
      />
    </>
  );
}
export default App;
