import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "../styles/Page.css"

function Drivers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.openf1.org/v1/drivers?&session_key=9158')
        if (!response.ok) {
          throw new Error("Fudeu")
        }
        const rocamboles = await response.json()
        setUsers(rocamboles);
      }
      catch (error) {
        setError(error.message)
      }
      finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, []);

  return (
    <>

      <Header />

      <section>

        {loading ?
          <p>Carregando...</p> :
          <>{users.map((user) => (
            <div key={user.id} className='CardDriver' style={{ backgroundColor: '#' + user.team_colour }}>

              <div className="BlockOne">
                <h1 style={{ color: '#' + user.team_colour }}>{user.driver_number.toLocaleString(`en-US`, {
                  minimumIntegerDigits: 2
                })}</h1>
                <img src={user.headshot_url}></img>
              </div>

              <div className='BlockTwo'>
                <h4>{user.full_name} ({user.name_acronym})</h4>
                <p>{user.team}</p>
                <p>Country: {user.country_code}</p>
              </div>
            </div>
          ))}</>}

        {error ? <p>Error</p> : ""}

      </section>


      <Footer />
    </>
  )
}
export default Drivers;