import { View, Button, Alert, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export default function AlertaAvancado() {
    const mostrarAlerta = () => {
        Alert.alert(
            "O que você deseja fazer?",
            "Escolha uma das opções abaixo:",
            [
                {
                    text: "Salvar",
                    onPress: () => {
                        Alert.alert("✔Salvo!", "Seus dados foram salvos com sucesso!");
                    },
                },
                {
                    text: "Editar",
                    onPress: () => {
                        Alert.alert("✏Modo Edição", "Agora você pode editar seus dados.");
                    },
                },
                {
                    text: "Cancelar",
                    onPress: () => {
                        Alert.alert("❌Cancelado", "Nenhuma ação foi realizada.");
                    },
                    style: "cancel", // Estilo padrão do iOS
                },
            ],
            {
                cancelable: true,
                onDismiss: () => {
                    console.log("Usuário saiu do alerta sem escolher nada ");
                },
            }
        );
    };
    return (
        <View style={estilos.container}>
            <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{ padding: 20 }}
                style={estilos.scrollContainer}
            >
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu nome"
                    keyboardSh ouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu email"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu sobrenome"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu telefone"
                    keyboardType="phone-pad"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu endereço"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite sua cidade"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu estado"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu país"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu CEP"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu complemento de endereço"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu número de documento"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu número de identificação"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu número de registro"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu número de conta bancária"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu número de cartão de crédito"
                    keyboardType="number-pad"
                    keyboardShouldPersistTaps="handled"
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite seu número de seguro social"
                    keyboardShouldPersistTaps="handled"
                />
            </ScrollView>
            <Button
                title="Realizar Cadastro"
                onPress={mostrarAlerta}
                color="#6200ee"
            />
        </View>
    );
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        paddingTop: 0
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
        maxHeight: 475,
        marginBottom: 40,
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        fontSize: 16,
    },
});