function Login({login, setLogin}) {
  return (
    <div>
      {login ? (
        <div>
          <p>Você está Logado</p>
        </div>
      ) : (
        <div>
          <p>Faça o Login</p>
          <button onClick={() => setLogin(true)}>Fazer Login</button>
        </div>
      )}
    </div>
  );
}
export default Login;
