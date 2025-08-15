import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  ScrollView
} from 'react-native';

export default function Tecladin() {
    const [nome, setNome] = useState()
    const [senhaBanco, setSenhaBanco] = useState()

    function funcaoEnviar() {
        Alert.alert('Dados enviados', `Nome: ${nome}\nSenha: ${senhaBanco}`);
        Keyboard.dismiss();
    }

    return (
  <KeyboardAvoidingView 
    style={styles.overlay} 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
      <View style={styles.container}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={senhaBanco}
          onChangeText={setSenhaBanco}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={funcaoEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
  </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "black",
    padding: 20,
    width: "90%",
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "red"
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});