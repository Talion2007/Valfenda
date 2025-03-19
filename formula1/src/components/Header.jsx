import NavBar from './NavBar.jsx';
import Logo from '../assets/formula1.png';
import { Link } from 'react-router-dom';
import "../styles/Header.css"
function Header() {
    return (
        <>
        <header>
        <Link to="/">
        <img src={Logo}></img>
        </Link>
        <NavBar />
        </header>
        </>
    )
}
export default Header;