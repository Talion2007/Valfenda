import { useState } from "react";
import DontClick from "./DontClick";
function Login({ Receba }) {
  const [not, setNot] = useState(false);

  function doNotClick() {
    setNot(true);
  }

  if (Receba) {
    return (
      <>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rKBpx7cbqLU?si=-OEHnDJxdcHIgFSq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>obigadu 🥰</p>
        <button onClick={doNotClick}>NÃO CLIQUE</button>
        <DontClick Receba={not ? true : false} />
      </>
    );
  } else {
    return <p>FAZ O LOGIN 😠</p>;
  }
}
export default Login;
