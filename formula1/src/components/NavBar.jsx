import { Link } from "react-router-dom";
import "../styles/NavBar.css"
function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <h2>Home</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/drivers">
                        <h2>Drivers</h2>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;