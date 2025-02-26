import { useState } from "react";
function Seguir() {
    const [seguir, setSeguir] = useState(false);

    return (
        <div>
            <button onClick={() => setSeguir(!seguir)}>{seguir ? "Deixar de seguir" : "Seguir"}</button>
        </div>
    )
}
export default Seguir;