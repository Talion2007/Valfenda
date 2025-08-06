import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput
} from "react-native";

export default function ConfirmacaoModal() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [contaDeletada, setContaDeletada] = useState(false);
  const [senha , setSenha] = useState("");

  const confirmarAcaoPrimeira = () => {
    if (senha !== "palmeirassemmundial") {
      Alert.alert("Erro", "Senha incorreta. Tente novamente.");
      return;
    } else {
    setModalVisivel(false);
    setContaDeletada(true);
    Alert.alert("Ação confirmada", "Sua conta foi deletada com sucesso!");
    }
  };

  const cancelarAcao = () => {
    setModalVisivel(false);
  };
  return (
    <View style={styles.container}>
      { contaDeletada === false ? (
      <TouchableOpacity
        style={styles.botaoPerigoso}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={styles.textoBotao}>Deletar Conta 🧕</Text>
      </TouchableOpacity>
      ) : (
       <TouchableOpacity
        style={styles.botaoPerigoso}
        onPress={() => setContaDeletada(false)}
      >
        <Text style={styles.textoBotao}>Palmeiras não tem mundial 🤦‍♂️</Text>
        <Text style={styles.textoBotao}>Bi - rebaixado e não tem mundial 🤦‍♂️</Text>
      </TouchableOpacity>
      )}

      <Modal
        visible={modalVisivel}
        animationType="fade"
        transparent={true}
        onRequestClose={cancelarAcao}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text style={styles.titulo}>⚠️ Atenção!</Text>
            <Text style={styles.mensagem}>
              Tem certeza que deseja deletar essa conta?
            </Text>
            <Text style={styles.submensagem}>
              Esta ação não pode ser desfeita!
            </Text>

            <TextInput
              style={styles.input}
              secureTextEntry ={true}
              placeholder="Digite sua senha para confirmar"
              placeholderTextColor="#888"
              value={senha}
              onChangeText={setSenha}
            />

            <View style={styles.botoesContainer}>
              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={cancelarAcao}
              >
                <Text style={styles.textoCancelar}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoConfirmar}
                onPress={confirmarAcaoPrimeira}
              >
                <Text style={styles.textoConfirmar}>Sim, Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  botaoPerigoso: {
    backgroundColor: "#ff4444",
    padding: 15,
    borderRadius: 8,
  },
  textoBotao: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro semitransparente
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    margin: 20,
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  mensagem: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 8,
  },
  submensagem: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },
  botoesContainer: {
    flexDirection: "row",
    gap: 15,
  },
  botaoCancelar: {
    backgroundColor: "#ddd",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
  },
  botaoConfirmar: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
  },
  textoCancelar: {
    color: "#333",
    fontWeight: "bold",
  },
  textoConfirmar: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
});