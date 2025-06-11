import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [login, setLogin] = useState(false);

  function entrar() {
    if (email == "felipe.cagnin@gmail.com" && senha == "1507") {
      Alert.alert(`Bem Vindo, Mestre Felipe!`);
      setLogin(true)
    } else {
      Alert.alert(`Email ou Senha Inválida!`);
    }
  }

  function dizerSenha() {
    Alert.alert("Use a senha 1507");
  }

  function registrar() {
    Alert.alert("Funcionalidade em Desenvolvimento");
  }

  function homePage() {
    Alert.alert("Funcionalidade em Desenvolvimento");
  }

  function relogar() {
    if (login == true) {
    Alert.alert("Deslogado")
    setLogin(false)
    }
  }

  return (
    <View style={styles.container}>
    {login === false ? (
      <View style={styles.subcontainer}>
        <Text style={styles.subtitulo}>Login</Text>

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email!"
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
        />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha!"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={dizerSenha}>
          <Text style={styles.sublinhado}>esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={entrar}>
          <Text style={styles.botao}>Entrar</Text>
        </TouchableOpacity>
        <Text>----------------------</Text>
        <Text style={styles.subtitulo}>Não tem Login?</Text>
        <TouchableOpacity onPress={registrar}>
          <Text style={styles.botao}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={homePage}>
          <Text style={styles.sublinhado}>Voltar para Home!</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.subcontainer}>
        <Text style={styles.subtitulo}>Bem vindo, Mestre Felipe!</Text>
        <TouchableOpacity onPress={relogar}>
          <Text style={styles.sublinhado}>Refazer Login!</Text>
        </TouchableOpacity>
      </View>
    ) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 7.5,
    padding: 10,
    backgroundColor: "lightblue",
  },
  subcontainer: {
    justifyContent: "center",
    alignItems: "center",
    gap:12.5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
    width: 250,
  },
  subtitulo: {
    fontSize: 18,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    width: 200,
    textAlign: "center"
  },
  sublinhado: {
    textDecorationLine: "underline",
        color: "gray"
  },
  botao: {
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 10,
    },
});
