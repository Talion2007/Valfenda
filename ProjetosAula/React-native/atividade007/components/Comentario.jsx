import { useEffect } from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert
} from 'react-native';

export default function Comentarios() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: 'Olá, Digite Qualquer coisa! 😁', proprio: false },
    { id: 2, texto: 'Qualquer Coisa? 😮', proprio: true },
    { id: 3, texto: 'Sim, desde que tenha até 280 caracteres! 😊', proprio: false },
    { id: 4, texto: 'Entendi! Quantos caracteres tem agora? 🤔', proprio: true },
    { id: 5, texto: `Agora tem ${mensagem.length} caracteres 😎`, proprio: false },
  ]);

  useEffect(() => {
  setMensagens((msgs) =>
    msgs.map((m) =>
      m.id === 5
        ? mensagem.length > 280
          ? { ...m, texto: `Agora tem ${mensagem.length} caracteres! 😣` }
          : { ...m, texto: `Agora tem ${mensagem.length} caracteres! 😎` }
        : m
    )
  );
}, [mensagem]);

  function enviarMensagem() {
    if (mensagem.length > 280) {
      Alert.alert('Atenção!!!','A mensagem não pode ter mais de 280 caracteres.');
      return;
    }

    if (mensagem.trim()) {
      const nova = {
        id: Date.now(),
        texto: mensagem,
        proprio: true,
      };
      setMensagens([...mensagens, nova]);
      setMensagem('');
      Keyboard.dismiss()
    }
  }

  return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.container}>
        {/* Lista de mensagens */}
        <View style={styles.mensagensContainer}>
          {mensagens.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.mensagem,
                msg.proprio ? styles.mensagemPropria : styles.mensagemOutro,
              ]}
            >
              <Text
                style={[
                  styles.textoMensagem,
                  !msg.proprio && { color: '#222' },
                ]}
              >
                {msg.texto}
              </Text>
            </View>
          ))}
        </View>

        {/* Input de nova mensagem */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite sua mensagem..."
            value={mensagem}
            onChangeText={setMensagem}
            style={styles.inputMensagem}
            multiline
            maxLength={500}
            onSubmitEditing={enviarMensagem}
            blurOnSubmit={false}
          />

          <TouchableOpacity
            style={[
              styles.botaoEnviar,
              !mensagem.trim() && styles.botaoDesabilitado,
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
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  mensagensContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
  mensagem: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 18,
    maxWidth: '80%',
  },
  mensagemPropria: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  mensagemOutro: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  textoMensagem: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 120,
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
    alignItems: 'center',
  },
  botaoDesabilitado: {
    backgroundColor: '#ccc',
  },
  textoBotao: {
    fontSize: 18,
  },
});