import { useState, useEffect } from "react";

function TimerIn() {
  const [timeElapsed, setTimeElapsed] = useState({});

  useEffect(() => {
    const startDate = new Date("2007-12-08T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = now - startDate;

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365)) /
        (1000 * 60 * 60 * 24 * 30.44)
      );
      const days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      const heartBeats = Math.floor(difference / (1000 / 1.67)); // Calcula as batidas de coração

      const yearProgress =
        ((difference % (1000 * 60 * 60 * 24 * 365)) /
          (1000 * 60 * 60 * 24 * 365)) *
        100;

      setTimeElapsed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        heartBeats,
        yearProgress,
      });
    };

    const timer = setInterval(updateTimer, 1000); // Atualiza a cada segundo

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <>
      <h3>Tempo que o Enzzo é Gay: </h3>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${timeElapsed.yearProgress}%` }}
          ></div>
      </div>
          <p>
            {timeElapsed.years} <strong>Anos</strong>
          </p>
      <p>
        {timeElapsed.months} <strong>Meses</strong>
      </p>
      <p>
        {timeElapsed.days} <strong>Dias</strong>
      </p>
      <p>
        {timeElapsed.hours} <strong>Horas</strong>
      </p>
      <p>
        {timeElapsed.minutes} <strong>Minutos</strong>
      </p>
      <p>
        {timeElapsed.seconds} <strong>Segundos</strong>
      </p>
      <p>
        {timeElapsed.heartBeats} <strong>Batidas de Coração</strong>
      </p>
      <br />
      <div className="heart"></div>
    </>
  );
}

export default TimerIn;
