import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default function TelaInicio() {

    const [modalVisivel, setModalVisivel] = React.useState(true);
    const cancelarAcao = () => {
        setModalVisivel(false);
        }

    return (
        <View style={styles.container}>
            <Text style={styles.mensagem}>🏠 Bem-vindo à Tela Inicial!</Text>

             <Modal
                    visible={modalVisivel}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={cancelarAcao}
                  >
                    <View style={styles.overlay}>
                      <View style={styles.modalContent}>
                        <Text style={styles.titulo}>Bem Vindo 👵!</Text>
                        <Text style={styles.mensagem}>
                          O Palmeira foi o primeiro campeão mundial, nos sonhos do Tupi 🤦‍♂️
                        </Text>
            
                        <View style={styles.botoesContainer}>
                          <TouchableOpacity
                            style={styles.botaoCancelar}
                            onPress={cancelarAcao}
                          >
                            <Text style={styles.textoCancelar}>Continuar</Text>
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
});