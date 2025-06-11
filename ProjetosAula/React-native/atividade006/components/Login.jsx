import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Alert, StatusBar } from 'react-native';
export default function AppLogin() {
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [escuro, setEscuro] = useState('blue');
    const login = () => {
        setCarregando(true);
        setMensagem('');
        setTimeout(() => {
            setCarregando(false);
            if (nome === 'admin' && senha === '123') {
                setMensagem('Login realizado com sucesso! ✅');
                Alert.alert('Login realizado com sucesso!', `Bem vindo, ${nome}!`);
                setEscuro('green')
            } else {
                setMensagem('Login inválido! ❌');
                setEscuro('red')
            }
        }, 10000);
    };
    return (
        <View style={estilos.container}>
            <StatusBar
                barStyle={escuro ? "light-content" : "dark-content"}
                backgroundColor={escuro}
                animated={true}
            />
            <TextInput placeholder="Usuário" style={estilos.input} onChangeText={setNome} value={nome} />
            <TextInput placeholder="Senha" secureTextEntry style={estilos.input} onChangeText={setSenha} value={senha} />
            <Button title="Cadastrar" onPress={login} />
            <Text></Text>
            {carregando && <ActivityIndicator size="large" color="#FF9800" />}
            {mensagem !== '' && <Text style={estilos.mensagem}>{mensagem}</Text>}
        </View>
    );
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'none'
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    mensagem: {
        marginTop: 20,
        fontSize: 16,
        color: 'green',
    },
});