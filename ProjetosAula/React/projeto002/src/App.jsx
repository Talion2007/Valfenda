import List from "./components/Links";
import Text from "./components/Text";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Perfil from "./components/Perfil";
import "./App.css";

function App() {

  let Image = "https://th.bing.com/th?id=OSK.24d047cb0ec1edf45aee5c5a1157913e&w=102&h=102&c=7&o=6&dpr=1.3&pid=SANGAM"

  var data = {
    nome: ["Vitor Hugo", "Murilo Correia", "William Jr.", "Murilo Besson", "Felipe Cagnin"],
    photos: ["https://i.pinimg.com/originals/d2/f3/28/d2f32866b1bdce2870d62f444052e433.jpg", "https://radiocentrocz.com.br/wp-content/uploads/2021/05/tim-maia-1989-%C2%A9-Divulgacao-1024x1024.jpg", "https://s3.pixers.pics/pixers/700/FO/35/15/95/09/700_FO35159509_11784272cce509c7baa809643031a58a.jpg", "https://cartoon-clipart.co/amp/images/hello-kitty2.png", "https://th.bing.com/th/id/OIP.WWKIYkpEokVJkmSkanprjQAAAA?rs=1&pid=ImgDetMain"],
    descrição: ["Negão", "Cara do Fone", "Gordinho do Dogão", "Fodasse", "Desenvolvedor"]
};

  return (
    <>
      <Header />

      <section>
        <Text />
        <List />
      </section>

      <Perfil data={data} />

      <Footer
        text="AlfaOne Development"
        img= {Image}
      />
    </>
  );
}
export default App;
