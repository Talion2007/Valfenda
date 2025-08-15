import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";

export default function FormularioModal() {
  const [modalVisivel, setModalVisivel] = useState(true);
  const [nome, setNome] = useState("");
  const [aval, setAval] = useState("");
  const [nomeAtual, setNomeAtual] = useState("");
  const [avalAtual, setAvalAtual] = useState("");
  const [loading, setLoading] = useState(false);

  // Limpa o formulário quando fechar o modal
  useEffect(() => {
    if (!modalVisivel) {
      setNome("");
      setAval("");
      setLoading(false);
    }
  }, [modalVisivel]);

  const validarFormulario = () => {
    if (!nome.trim()) {
      Alert.alert("Erro", "Por favor, digite seu nome! ❗");
      return false;
    }
    if (!aval.trim()) {
      Alert.alert("Erro", "Por favor, digite sua avaliação! ❗");
      return false;
    }
  return true;

  };

  const salvarDados = async () => {
    if (!validarFormulario()) return;

    setLoading(true);

    // Simulando uma requisição para API
    setTimeout(() => {
      Alert.alert(
        "Sucesso! 🎉",
        `Dados salvos:\n\nNome: ${nome}\nAvaliação: ${aval}`,
        [
          {
            text: "OK",
            onPress: () => setModalVisivel(false),
          },
        ]
      );
      setLoading(false);
      setNomeAtual(nome);
      setAvalAtual(aval);
    }, 2000);
  };

  const fecharModal = () => {
    if (nome.trim() || aval.trim()) {
      Alert.alert(
        "Atenção ⚠️",
        "Você tem dados não salvos. Deseja realmente sair?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Sair",
            style: "destructive",
            onPress: () => setModalVisivel(false),
          },
        ]
      );
    } else {
      setModalVisivel(false);
    }
  };

  return (
    <View style={styles.container}>
                <Text style={styles.textoAtual}>
          Ultimo Nome: {nomeAtual}
        </Text>
        <Text style={styles.textoAtual}>
          Avaliação: {avalAtual}
        </Text>
      <TouchableOpacity
        style={styles.botaoAbrir}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={styles.textoBotao}>Avaliar</Text>
      </TouchableOpacity>

  <Modal
  visible={modalVisivel}
  animationType="slide"
  transparent={true}
  onRequestClose={fecharModal}
>
  <KeyboardAvoidingView 
    style={styles.overlay} 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <View style={styles.modalContent}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Avaliação</Text>
        <TouchableOpacity onPress={fecharModal} style={styles.botaoX}>
          <Text style={styles.textoX}>❌</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.inputa}
        placeholder="Digite sua avaliação"
        value={aval}
        onChangeText={setAval}
        multiline
        autoCapitalize="none"
      />

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoCancelar]}
          onPress={fecharModal}
        >
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botao,
            styles.botaoSalvar,
            loading && styles.botaoDesabilitado,
          ]}
          onPress={salvarDados}
          disabled={loading}
        >
          <Text style={styles.textoSalvar}>
            {loading ? "Enviando... ⏳" : "Enviar ⭐"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </KeyboardAvoidingView>
</Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  botaoAbrir: {
    backgroundColor: "lightgreen",
    padding: 15,
    borderRadius: 8,
  },
  textoBotao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  botaoX: {
    padding: 5,
  },
  textoX: {
    fontSize: 18,
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

  inputa: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    textAlignVertical: "top" // texto começa no topo
  },

  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
  },
  botao: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoCancelar: {
    backgroundColor: "#f0f0f0",
  },
  botaoSalvar: {
    backgroundColor: "#257d39ff",
  },
  botaoDesabilitado: {
    backgroundColor: "#ccc",
  },
  textoCancelar: {
    color: "#333",
    fontWeight: "bold",
  },
  textoSalvar: {
    color: "white",
    fontWeight: "bold",
  },
  textoAtual: {
    color: "#333",
    fontWeight: "bold",
    marginBottom: 60,
    fontSize: 16,
    maxWidth: "75%",
  },

});