import List from "./components/Links";
import Text from "./components/Text";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  let Image = "https://th.bing.com/th?id=OSK.24d047cb0ec1edf45aee5c5a1157913e&w=102&h=102&c=7&o=6&dpr=1.3&pid=SANGAM"
  let Talion = "https://th.bing.com/th/id/OIP.WWKIYkpEokVJkmSkanprjQAAAA?rs=1&pid=ImgDetMain"

  var data = [
    nome = ["Vitor", "Correia"],
    imagem = ["https://i.pinimg.com/originals/d2/f3/28/d2f32866b1bdce2870d62f444052e433.jpg", "https://radiocentrocz.com.br/wp-content/uploads/2021/05/tim-maia-1989-%C2%A9-Divulgacao-1024x1024.jpg"],
    descrição = ["Desenvolvedor", "Comedor de Casadas"],
  ]

  return (
    <>
      <Header />

      <section>
        <Text />
        <List />
      </section>

<p></p>

      <Footer
        text="Desenvolvido por TalionElessar2007😎"
        img= {Talion}
      />
    </>
  );
}
export default App;
