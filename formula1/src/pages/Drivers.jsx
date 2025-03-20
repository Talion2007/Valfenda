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
        const response = await fetch('https://api.openf1.org/v1/drivers?&session_key=9159')
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

        <h1 className="title">Drivers - F1 2023</h1>

        <article>

          {loading ?
            <h1>Carregando...</h1> :
            <>{users.map((user) => (
              <div key={user.id} className='CardDriver' style={{ backgroundColor: '#' + user.team_colour }}>

                <div className="BlockOne">
                  <h1 style={{ color: '#' + user.team_colour }}>{user.driver_number.toLocaleString(`en-US`, {
                    minimumIntegerDigits: 2
                  })}</h1>
                  <img src={user.headshot_url}></img>
                </div>

                <div className='BlockTwo'>
                  <h3>{user.full_name} ({user.name_acronym})</h3>
                  <h4>{user.country_code} - {user.team_name}</h4>
                </div>
              </div>
            ))}</>}

          {error ? <p>Error</p> : ""}

        </article>
      </section>


      <Footer />
    </>
  )
}
export default Drivers;