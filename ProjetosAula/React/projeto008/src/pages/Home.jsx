import { useState, useEffect } from "react";
import "./App.css"
function Home() {
  const [country, setCountry] = useState(() => {
    const saveCountry = localStorage.getItem("Country");
    return saveCountry ? JSON.parse(saveCountry) : [];
  });

  const [countryName, setCountryName] = useState(() => {
    const saveCountryName = localStorage.getItem("Country Name");
    return saveCountryName ? JSON.parse(saveCountryName) : [];
  });

  const [countryKey, setCountryKey] = useState(() => {
    const saveCountryKey = localStorage.getItem("Country Key");
    return saveCountryKey ? JSON.parse(saveCountryKey) : "Brazil";
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchcountry() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryKey}`
        );
        const responseCountryKey = await fetch(
          "https://restcountries.com/v3.1/independent?status=true"
        );
        if (!response.ok) {
          throw new Error("Fudeu");
        }
        const rocamboles = await response.json();
        const atuns = await responseCountryKey.json();
        setCountry(rocamboles);
        localStorage.setItem("Country", JSON.stringify(rocamboles));
        setCountryName(atuns);
        localStorage.setItem("Country Name", JSON.stringify(atuns));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchcountry();
  }, [countryKey]);

  useEffect(() => {
    localStorage.setItem("Country Key", JSON.stringify(countryKey));
  }, [countryKey]);

  return (
    <>
      <section>
        <div>
          <h1>Countrys: </h1>
          <select
            value={countryKey}
            onChange={(e) => setCountryKey(e.target.value)}
          >
            {countryName.map((country) => (
              <option value={country.name.commom} key={country.tld}>
                {country.name.official}
              </option>
            ))}
          </select>
        </div>

        <hr></hr>
<br></br>

        <article>
          {loading ? (
            <h1>Carregando...</h1>
          ) : (
            <>
              {country.map((country) => (
                <div
                  key={country.latlng}
                >
                 <h1>{country.name.official} - "{country.name.common}"</h1>
                 <img src={country.flags.png} alt={country.name.common} />
                </div>
              ))}
            </>
          )}
        </article>
        {error ? <p>Error</p> : ""}
      </section>
    </>
  );
}
export default Home;
