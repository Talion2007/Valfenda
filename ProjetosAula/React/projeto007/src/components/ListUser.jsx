import { useEffect, useState } from 'react'
import "../components/User.css"
function ListUser() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://api.openf1.org/v1/drivers')
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

    if (loading) return <h2>Carregando Usuários...</h2>
    if (error) return <h2>Erro ao carregar usuários: {error}</h2>

    return (
        <>
            {users.map((user) => (
                <div key={user.id} className='Sex' style={{backgroundColor: '#' + user.team_colour}}>
                    
                    <h2>{user.full_name} ({user.name_acronym})</h2>
                    <img src={user.headshot_url}></img>
                    
                    <div className='Shop'>
                        <div>
                            <p>Driver Number: {user.driver_number}</p>
                            <p>First Name: {user.first_name}</p>
                            <p>Last Name: {user.last_name}</p>
                            <p>Country: {user.country_code}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListUser;