import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import estilos from '../styles/estilos';

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
<View style={estilos.secaoInfo}>
<Text style={estilos.tituloSecao}>Experiencia</Text>
<Text style={estilos.textoInfo}>
Nenhuma
</Text>
</View>
</ScrollView>
);
};