import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaInicio() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>🏠 Bem-vindo à Tela Inicial!</Text>
        </View>
    );
} 

// Estilos
const estilos = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'lightyellow'
},
texto: {
fontSize: 22,
fontWeight: 'bold'
}
});