function Notificacoes({notify}) {

    return (
        <div>
            {notify > 0 && <p>Voce tem {notify} notificações</p>}
        </div>
    )
}
export default Notificacoes;