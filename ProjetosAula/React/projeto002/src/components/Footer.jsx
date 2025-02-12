import "./styles/Footer.css";

function Footer(props) {
    return (
        <footer className="footer">
        <img src={props.img} alt="Logo" />
        <p>{props.text}</p>
        </footer>
    );
}

export default Footer;