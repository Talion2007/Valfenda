import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function App() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [login, setLogin] = useState()

  function entrar() {
    if (email == 'felipe.cagnin@gmail.com' && senha == "1507") {
      Alert.alert(`Bem Vindo, ${nome}`)
    } else {
      Alert.alert(`Email ou Senha Inválida!`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Login</Text>

      <Text style={styles.subtitulo}>Email</Text>
       <TextInput 
       placeholder="Digite seu email!"
       value={email}
       onChangeText={setEmail}
       secureTextEntry = {false} />
       <Text style={styles.subtitulo}>Senha</Text>
       <TextInput 
       placeholder="Digite seu nome!"
       value={senha}
       onChangeText={setSenha}
       secureTextEntry = {true} />
        <TouchableOpacity 
       onPress={Alert.alert(`Use a Senha 1507`)}>
        <Text>esqueci a senha</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       onPress={entrar}>
        <Text>Entrar</Text>
       </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    gap: 7.5,
  },
  subtitulo: {
    fontSize: 18,
  },
  tarefaContainer: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    width: 260,
    backgroundColor: 'lightblue'
  },
  tarefaTexto: {
    fontSize: 16,
    color: "black",
  },
  tarefaFeita: {
    textDecorationLine: "line-through", 
    color: "aliceblue",
  },
});