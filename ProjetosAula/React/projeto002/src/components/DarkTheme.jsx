import { useState } from "react";
import "./styles/DarkTheme.css";
import Black from "../assets/BlackVersion.jpg"
import White from "../assets/WhiteVersion.jpg"
function DarkTheme() {
    const [tema, setTema] = useState(false);

    function changeTheme() {
        if (tema === false) {
            setTema(true);
        } else {
            setTema(false);
        }
    }

  return (
    <article className={tema ? "DarkTheme" : "LightTheme"}>
      <button onClick={changeTheme}>Mudar Tema</button>
      <p>Theme {tema ? "Black" : "White"}</p>
      <img src={tema ? Black : White} alt="Pikachu" />
    </article>
  );
}
export default DarkTheme;