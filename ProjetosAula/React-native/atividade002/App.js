import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [nome, setNome] = useState()

  const [tarefas, setTarefas] = useState([
    { texto: "Comprar 50 maças!", feito: false },
    { texto: "Comprar 75 pêras!", feito: false },
    { texto: "Comprar 95 mangas!", feito: false },
    { texto: "Comprar 45 uvas!", feito: false },
  ]);

  const marcarComoFeito = (index) => {
    setTarefas(
      tarefas.map((tarefa, variableIndex) =>
        variableIndex === index ? { ...tarefa, feito: !tarefa.feito } : tarefa
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Lista de Tarefas:</Text>
      {tarefas.map((tarefa, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => marcarComoFeito(index)} 
          style={styles.tarefaContainer}
        >

          <Text
            style={[
              styles.tarefaTexto,
              tarefa.feito && styles.tarefaFeita,
            ]}
          >
            {tarefa.texto}
          </Text>
        </TouchableOpacity>
      ))}

      <Text>//------------------------------------------------//</Text>

       <Text style={styles.subtitulo}>Olá, {nome ? nome : "Visitante"}</Text>
       <TextInput 
       placeholder="Digite seu Nome!"
       value={nome}
       onChangeText={setNome}
       secureTextEntry = {true} />

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