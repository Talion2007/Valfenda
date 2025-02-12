import reactLogo from "../assets/react.svg";
import "./styles/Header.css";

function Header() {
    return (
    <header>
            <h1>React</h1>
            <img src={reactLogo} className="logo" alt="React logo" />
          </header>
    )
}

export default Header;