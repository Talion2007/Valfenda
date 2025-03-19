import { useEffect, useState } from "react";
function DarkMode() {
    const [darkMode, setDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("darkMode")) || false
    );

    useEffect (() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        document.body.style.backgroundColor = darkMode ? "#000" : "#fff";
    }, [darkMode]);

    return (
        <>
        <h1>Modo: {darkMode ? "Escuro" : "Claro"}</h1>
        <button onClick={() => setDarkMode(!darkMode)}>Mudar</button>
        </>    
    )
}

export default DarkMode;