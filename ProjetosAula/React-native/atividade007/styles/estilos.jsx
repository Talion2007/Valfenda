import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  secaoTopo: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 15,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    fontSize: 40,
  },
  nomeUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  profissaoUsuario: {
    fontSize: 16,
    color: '#6c757d',
  },
  secaoEstatisticas: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginBottom: 15,
  },
  itemEstatistica: {
    alignItems: 'center',
  },
  numeroEstatistica: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
  },
  labelEstatistica: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
  },
  secaoBotoes: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginBottom: 15,
  },
  botaoPrimario: {
    backgroundColor: '#007bff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 0.4,
  },
  textoBotaoPrimario: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botaoSecundario: {
    borderWidth: 2,
    borderColor: '#007bff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 0.4,
  },
  textoBotaoSecundario: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secaoInfo: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 10,
  },
  textoInfo: {
    fontSize: 14,
    color: '#6c757d',
    lineHeight: 22,
  }
});

export default estilos;
