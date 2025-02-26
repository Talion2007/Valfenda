function Dashboard({login, notify}) {
    return(
        <div>
            {login ? (
                <div>
                    {notify > 0 ? (
                        <p>Você tem {notify} notificações!</p>
                    ) : (
                        <p>Você não tem notificações!</p>
                    )}
                </div>
            ) : (
                <p>Faça o Login para Continuar</p>
            )}
        </div>
    )
}
export default Dashboard;