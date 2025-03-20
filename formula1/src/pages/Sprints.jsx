import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "../styles/Page.css"

function Sprints() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://api.openf1.org/v1/sessions?session_name=Sprint&year=2023')
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

                <h1 className="title">Sprints - F1 2023</h1>

<article>

                {loading ?
                    <p>Carregando...</p> :
                    <>{users.map((user) => (
                        <div key={user.circuit_key} className="divRaces">
                            <p>City: {user.location} - Circuit: {user.circuit_short_name}</p>
                            <p>Country: {user.country_name}({user.country_code}) </p>
                            <p>
                                {new Date(user.date_start).toLocaleString('en-US', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    hour12: false,
                                })} - {new Date(user.date_end).toLocaleString('en-US', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    hour12: false,
                                })}
                            </p>
                        </div>
                    ))}</>}

                {error ? <p>Error</p> : ""}

</article>
            </section>


            <Footer />
        </>
    )
}
export default Sprints;