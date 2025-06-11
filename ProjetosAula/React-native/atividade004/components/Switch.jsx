import { useState } from "react";
import React from "react";
import { View, Text, Switch, StyleSheet} from "react-native";

export default function SwitchFunction() {
    const [modoEscuro, setModoEscuro] = useState(false);

    return (
    <View>
            <Text>
                Modo escuro : {modoEscuro ? 'Ativado' : 'Desativado'}
            </Text>
            <Switch 
            value={modoEscuro}
            onValueChange={setModoEscuro}
            thumbColor={modoEscuro ? '#FF0000' : '#000000'}
            trackColor={{ false: '#000000', true: '#FF0000' }}
            />
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