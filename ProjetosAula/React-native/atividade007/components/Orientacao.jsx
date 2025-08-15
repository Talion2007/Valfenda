import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

const MeuComponente = () => {
    const [valor, setValor] = useState('');
    const [valorAltura, setValorAltura] = useState('');
    const [dimensions, setDimensions] = useState(Dimensions.get('window'));
    const [orientation, setOrientation] = useState('portrait');

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setDimensions(window);
            setOrientation(window.width > window.height ? 'landscape' : 'portrait');
        });

        return () => subscription.remove();
    }, []);

    // Novas cores verdes
    const corFundo = orientation === 'portrait' ? '#A8E6CF' : '#98d0f6ff';
    const corTexto = '#1B5E20';

    function calcularAltura() {
        const largura = parseFloat(valor);
        if (!isNaN(largura)) {
            setValorAltura(((largura * 9) / 16).toFixed(2));
        } else {
            setValorAltura('');
        }
    }

    const { width, height } = dimensions;

    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: corFundo }]}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Text style={[styles.titulo, { color: corTexto }]}>
                Modo Atual: {orientation === 'portrait' ? 'Retrato 😁' : 'Paisagem 😎'}
            </Text>

            <Text style={[styles.titulo, { color: corTexto }]}>Calculadora de Proporções</Text>
            <Text style={styles.valorText}>
                Altura x Largura: {height.toFixed(0)} / {width.toFixed(0)}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite a largura desejada"
                placeholderTextColor="#557"
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
            />

            <TouchableOpacity style={styles.botao} onPress={calcularAltura}>
                <Text style={styles.textoBotao}>Calcular</Text>
            </TouchableOpacity>

            {valorAltura ? (
                <View style={styles.resultadoBox}>
                    <Text style={styles.resultadoTexto}>
                        Altura proporcional: {valorAltura}
                    </Text>
                </View>
            ) : null}
        </KeyboardAvoidingView>
    );
};

export default MeuComponente;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    valorText: {
        fontSize: 16,
        marginBottom: 20,
        color: '#33691E',
    },
    input: {
        width: '90%',
        backgroundColor: '#F1F8E9',
        borderWidth: 1,
        borderColor: '#A5D6A7',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    botao: {
        backgroundColor: '#388E3C',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 10,
        marginTop: 10,
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultadoBox: {
        backgroundColor: '#C8E6C9',
        padding: 16,
        borderRadius: 10,
        marginTop: 30,
        width: '90%',
        alignItems: 'center',
    },
    resultadoTexto: {
        fontSize: 18,
        color: '#1B5E20',
        fontWeight: 'bold',
    },
});