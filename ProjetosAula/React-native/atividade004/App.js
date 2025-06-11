import { StyleSheet, Text, View } from 'react-native';
import MeuBotao from './components/Button';
import SwitchFunction from './components/Switch';
import MeuSlider from './components/Slider';
import MeuConfiguracao from './components/Configuracao';

export default function App() {
  return (
    <View style={styles.container}>
      <MeuBotao titulo = "Clique aqui!" aoPressionar={() => alert('Botão Clicado')}/>
      <SwitchFunction/>
      <MeuSlider/>
      <MeuConfiguracao/>
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
