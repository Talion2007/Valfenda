import React, { useEffect, useState, useRef } from 'react';
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

export default function ChatBot() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: 'Olá, eu sou o Bot 🤖! Digite "Oi" para começarmos.', proprio: false }
  ]);

  const scrollViewRef = useRef(null); // 🔹 Criando referência do ScrollView

  function enviarMensagem() {
    if (mensagem.length > 280) {
      Alert.alert('Atenção!!!', 'A mensagem não pode ter mais de 280 caracteres.');
      return;
    }

    if (mensagem.trim()) {
      const novaMensagem = {
        id: Date.now(),
        texto: mensagem,
        proprio: true
      };

      setMensagens(prev => [...prev, novaMensagem]);
      responderBot(mensagem);
      setMensagem('');
      Keyboard.dismiss();
    }
  }

  function responderBot(textoUsuario) {
    let resposta = '';

    if (textoUsuario.toLowerCase().includes('oi')) {
      resposta = 'Oi! 😄\n\nSe quiser Ouvir sobre o Tempo, digite "tempo" \n\n Se quiser saber mais sobre mim, digite "sobre" \n\n Se quiser saber sobre o clima, digite "clima" \n\n Se quiser saber sobre a esportes, digite "esportes" \n\n Caso deseje limpar o chat, digite "limpar"';
    } 

    else if (textoUsuario.toLowerCase().includes('tempo')) {
      resposta = 'Eu não tenho previsão do tempo... ainda! ⛅';
    } 
    
    else if (textoUsuario.toLowerCase().includes('sobre')) {
        resposta = 'Eu sou um chatbot criado para ajudar você! 🤖';
    } 

    else if (textoUsuario.toLowerCase().includes('clima')) {
      resposta = 'Eu não tenho informações sobre o clima... ainda! 🌄';
    }

    else if (textoUsuario.toLowerCase().includes('esportes')) {
      resposta = 'Eu não tenho informações sobre esportes... ainda! 🏀';
    }

    else if (textoUsuario.length > 0 && textoUsuario.length <= 280) {
      resposta = `Você escreveu ${textoUsuario.length} caracteres. 👍`;
    } 
    
    else {
      resposta = 'Não entendi... pode repetir? 🤔';
    }

    if (textoUsuario.toLowerCase().includes('limpar')) {
        setMensagens([
            { id: 1, texto: 'Olá, eu sou o Bot 🤖! Digite "Oi" para começarmos.', proprio: false }
        ]);
        return;
    }

    setTimeout(() => {
      setMensagens(prev => [...prev, { id: Date.now() + 1, texto: resposta, proprio: false }]);
    }, 500);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{ justifyContent: 'flex-end' }}
          ref={scrollViewRef} // 🔹 Ligando referência
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })} // 🔹 Scroll automático
        >
          {mensagens.map(msg => (
            <View
              key={msg.id}
              style={[
                styles.mensagem,
                msg.proprio ? styles.mensagemPropria : styles.mensagemOutro
              ]}
            >
              <Text
                style={[
                  styles.textoMensagem,
                  !msg.proprio && { color: '#222' }
                ]}
              >
                {msg.texto}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite sua mensagem..."
            value={mensagem}
            onChangeText={setMensagem}
            style={styles.inputMensagem}
            multiline
            maxLength={500}
          />

          <TouchableOpacity
            style={[
              styles.botaoEnviar,
              !mensagem.trim() && styles.botaoDesabilitado
            ]}
            onPress={enviarMensagem}
            disabled={!mensagem.trim()}
          >
            <Text style={styles.textoBotao}>📩</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  mensagensContainer: { flex: 1, padding: 10, marginBottom: 20 },
  mensagem: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 18,
    maxWidth: '80%',
    marginBottom: 10
  },
  mensagemPropria: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end'
  },
  mensagemOutro: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  textoMensagem: { color: 'white', fontSize: 16 },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 120
  },
  inputMensagem: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
    fontSize: 16,
  },
  botaoEnviar: {
    backgroundColor: '#007AFF',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoDesabilitado: { backgroundColor: '#ccc' },
  textoBotao: { fontSize: 18 }
});
