import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
export default function TelaPerfil () {
return (
<ScrollView style={estilos.container}>
{/* Seção do Avatar e Info Principal */}
<View style={estilos.secaoTopo}>
<View style={estilos.avatarContainer}>
<Text style={estilos.avatar}>👤</Text>
</View>
<Text style={estilos.nomeUsuario}>Murilo Araújo</Text>
<Text style={estilos.profissaoUsuario}>Desenvolvedor React Native</Text>
</View>
{/* Seção de Estatísticas */}
<View style={estilos.secaoEstatisticas}>
<View style={estilos.itemEstatistica}>
<Text style={estilos.numeroEstatistica}>150</Text>
<Text style={estilos.labelEstatistica}>Projetos</Text>
</View>
<View style={estilos.itemEstatistica}>
<Text style={estilos.numeroEstatistica}>1.2k</Text>
<Text style={estilos.labelEstatistica}>Seguidores</Text>
</View>
<View style={estilos.itemEstatistica}>
<Text style={estilos.numeroEstatistica}>890</Text>
<Text style={estilos.labelEstatistica}>Seguindo</Text>
</View>
</View>
{/* Seção de Botões de Ação */}
<View style={estilos.secaoBotoes}>
<TouchableOpacity style={estilos.botaoPrimario}>
<Text style={estilos.textoBotaoPrimario}>Seguir</Text>
</TouchableOpacity>
<TouchableOpacity style={estilos.botaoSecundario}>
<Text style={estilos.textoBotaoSecundario}>Mensagem</Text>
</TouchableOpacity>
</View>
{/* Seção de Informações Adicionais */}
<View style={estilos.secaoInfo}>
<Text style={estilos.tituloSecao}>Sobre</Text>
<Text style={estilos.textoInfo}>
Desenvolvedor apaixonado por criar experiências mobile incríveis.
Especialista em React Native e amante de código limpo.
</Text>
</View>
</ScrollView>
);
};
const estilos = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f8f9fa',
},
secaoTopo: {
backgroundColor: 'white',
alignItems: 'center',// Centraliza tudo horizontalmente
paddingVertical: 30,
marginBottom: 15,
},
avatarContainer: {
width: 100,
height: 100,
borderRadius: 50,
backgroundColor: '#e9ecef',
justifyContent: 'center',// Centraliza verticalmente
alignItems: 'center',// Centraliza horizontalmente
marginBottom: 15,
},
avatar: {
fontSize: 40,
},
nomeUsuario: {
fontSize: 24,
fontWeight: 'bold',
color: '#212529',
marginBottom: 5,
},
profissaoUsuario: {
fontSize: 16,
color: '#6c757d',
},
secaoEstatisticas: {
backgroundColor: 'white',
flexDirection: 'row',// Itens lado a lado
justifyContent: 'space-around',// Distribui igualmente
paddingVertical: 20,
marginBottom: 15,
},
itemEstatistica: {
alignItems: 'center',// Centraliza número e label
},
numeroEstatistica: {
fontSize: 20,
fontWeight: 'bold',
color: '#212529',
},
labelEstatistica: {
fontSize: 14,
color: '#6c757d',
marginTop: 5,
},
secaoBotoes: {
backgroundColor: 'white',
flexDirection: 'row',// Botões lado a lado
justifyContent: 'space-around',// Distribui igualmente
paddingVertical: 20,
marginBottom: 15,
},
botaoPrimario: {
backgroundColor: '#007bff',
paddingHorizontal: 30,
paddingVertical: 12,
borderRadius: 25,
flex: 0.4,// Ocupa 40% da largura
},
textoBotaoPrimario: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
textAlign: 'center',
},
botaoSecundario: {
borderWidth: 2,
borderColor: '#007bff',
paddingHorizontal: 30,
paddingVertical: 12,
borderRadius: 25,
flex: 0.4,// Ocupa 40% da largura
},
textoBotaoSecundario: {
color: '#007bff',
fontSize: 16,
fontWeight: 'bold',
textAlign: 'center',
},
secaoInfo: {
backgroundColor: 'white',
padding: 20,
marginBottom: 15,
},
tituloSecao: {
fontSize: 18,
fontWeight: 'bold',
color: '#212529',
marginBottom: 10,
},
textoInfo: {
fontSize: 14,
color: '#6c757d',
lineHeight: 22,
}
});