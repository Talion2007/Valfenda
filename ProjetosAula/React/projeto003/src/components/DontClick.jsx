import { useState } from "react";
function DontClick({Receba}){

    const [not, setNot] = useState(false)

    function doNotClick() {
        setNot(true)
    }

    if (Receba) {
        return(
            <>
            <button onClick={doNotClick}>NÃO CLIQUE</button>
            <DontClick Receba={not ? true : false}/>
            </>
        )
    } else {
        return(
            <p></p>
        )
    }
}
export default DontClick;
