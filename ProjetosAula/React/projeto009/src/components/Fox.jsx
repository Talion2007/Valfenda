import { useState, useEffect } from "react";
function Fox() {
  const [fox, setFox] = useState("");

  useEffect(() => {
    async function fetchFox() {
       setFox("https://www.loliapi.com/acg/")
      }

    fetchFox();
  });

  return (
    <div className="fox">
      <h3>O que o Enzzo Gosta:</h3>
      {fox && <img src={fox} alt="Lolizinha Gay" />}
    </div>
  );
}

export default Fox;