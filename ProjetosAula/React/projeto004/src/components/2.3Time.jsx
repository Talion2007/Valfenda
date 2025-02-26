import { useState } from "react";
function Time() {
  const [time, setTime] = useState([]);

  console.log(time)

  var hours = new Date(time).getHours();

  console.log(hours)

  var Message = "Digite o Horário"

  if (hours >= 5 && hours < 12) {
    Message = "Bom dia";
  } else if (hours >= 12 && hours < 18) {
    Message = "Boa tarde";
  } else if (hours >= 18 || hours < 5) {
    Message = "Boa noite";
  }

  return (
    <div>
      <input
        type="datetime-local"
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <p>{Message}</p>
    </div>
  );
}
export default Time;
