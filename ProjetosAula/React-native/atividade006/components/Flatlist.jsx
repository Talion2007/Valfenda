import { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
export default function ListaProdutos() {
    const [tarefas, setTarefas] = useState([
        { id: "1", texto: "Iniciar Código", feito: false },
        { id: "2", texto: "Corrigir Bugs", feito: false },
        { id: "3", texto: "Resolver Estilização", feito: false },
        { id: "4", texto: "Arrumar mais Bugs!", feito: false },
        { id: "5", texto: "Tentar não ficar Louco", feito: false },
    ]);


    const marcarComoFeito = (id) => {
        setTarefas(
            tarefas.map((tarefa) =>
                tarefa.id === id ? { ...tarefa, feito: !tarefa.feito } : tarefa
            )
        );
    };
    // ... pode adicionar quantos quiser!
    return (
        <SafeAreaView style={{ flex: 1, padding: 20}}>
            <FlatList
                data={tarefas}
                keyExtractor={(tarefa) => tarefa.id}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        key={item.id}
                        onPress={() => marcarComoFeito(item.id)}
                        style={styles.tarefaContainer}
                    >

                        <Text
                            style={[
                                styles.tarefaTexto,
                                item.feito && styles.tarefaFeita,
                            ]}
                        >
                            {item.texto}
                            {" - "}
                            <Text
                                style={[item.feito ? styles.tarefaFeitaStatus : styles.tarefaStatus]}
                            >
                                {item.feito ? "Concluido" : "Pendente"}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
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
        width: "100%",
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

    tarefaStatus: {
        fontSize: 14,
        color: "red",
    },

    tarefaFeitaStatus: {
        fontSize: 14,
        color: "green",
    },
});