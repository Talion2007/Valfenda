import { View, Text, ScrollView, StyleSheet } from 'react-native';
export default function TelaConfig() {
const dadosEstatisticas = [
    { titulo: 'Vendas Hoje', valor: 'R$ 2.340', cor: '#28a745' },
{ titulo: 'Novos Clientes', valor: '24', cor: '#007bff' },
{ titulo: 'Pedidos', valor: '156', cor: '#ffc107' },
{ titulo: 'Receita Mensal', valor: 'R$ 45.2k', cor: '#dc3545' },
];
return (
<View style={estilos.container}>
{/* Header */}
<View style={estilos.header}>
<Text style={estilos.tituloHeader}>Dashboard</Text>
<Text style={estilos.subtituloHeader}>Bem-vindo de volta! 👋</Text>
</View>
<ScrollView style={estilos.conteudoScroll}>
{/* Grid de Estatísticas */}
<View style={estilos.gridEstatisticas}>
{dadosEstatisticas.map((item, index) => (
<View key={index}style={estilos.cardEstatistica}>
<View style={[estilos.indicadorCor, { backgroundColor: item.cor }]} />
<View style={estilos.conteudoCard}>
<Text stylee={estilos.tituloCard}>{item.titulo}</Text>
<Text styleee={[estilos.valorCard, { color: item.cor }]}>
{item.valor}
</Text>
</View>
</View>
))}
</View>
{/* Área de Gráfico Simulado */}
<View style={estilos.secaoGrafico}>
<Text stylee={estilos.tituloSecao}>Vendas dos Últimos 7 Dias</Text>
<View style={estilos.graficoSimulado}>
<Text style={estilos.textoGrafico}>📈 Gráfico aqui</Text>
<Text style={estilos.subtextoGrafico}>
Crescimento de 12% em relação à semana anterior
</Text>
</View>
</View>
{/* Lista de Atividades Recentes */}
<View style={estilos.secaoAtividades}>
<Text style={estilos.tituloSecao}>Atividades Recentes</Text>
{[1, 2, 3].map((item) => (
<View key={item}style={estilos.itemAtividade}>
<View style={estilos.iconeAtividade}>
<Text stylee={estilos.textoIcone}>💼</Text>
</View>
<View style={estilos.conteudoAtividade}>
<Text stylee={estilos.tituloAtividade}>Nova venda realizada</Text>
<Text stylee={estilos.tempoAtividade}>Há 2 minutos</Text>
</View>
</View>
))}
</View>
</ScrollView>
</View>
);
};
const estilos = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f8f9fa',
},
header: {
backgroundColor: 'white',
paddingHorizontal: 20,
paddingVertical: 25,
borderBottomWidth: 1,
borderBottomColor: '#e9ecef',
},
tituloHeader: {
fontSize: 28,
fontWeight: 'bold',
color: '#212529',
},
subtituloHeader: {
fontSize: 16,
color: '#6c757d',
marginTop: 5,
},
conteudoScroll: {
flex: 1,
padding: 15,
},
gridEstatisticas: {
flexDirection: 'row',// Elementos lado a lado
flexWrap: 'wrap',// Quebra linha quando necessário
justifyContent: 'space-between',// Espaça igualmente
marginBottom: 20,
},
cardEstatistica: {
backgroundColor: 'white',
width: '48%',// Cada card ocupa quase metade da largura
marginBottom: 15,
borderRadius: 12,
padding: 15,
elevation: 2,
shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.1,
shadowRadius: 2,
flexDirection: 'row',// Indicador e conteúdo lado a lado
alignItems: 'center',
},
indicadorCor: {
width: 4,
height: 40,
borderRadius: 2,
marginRight: 15,
},
conteudoCard: {
flex: 1,
},
tituloCard: {
fontSize: 12,
color: '#6c757d',
marginBottom: 5,
},
valorCard: {
fontSize: 20,
fontWeight: 'bold',
},
secaoGrafico: {
backgroundColor: 'white',
borderRadius: 12,
padding: 20,
marginBottom: 20,
elevation: 2,
shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.1,
shadowRadius: 2,
},
tituloSecao: {
fontSize: 18,
fontWeight: 'bold',
color: '#212529',
marginBottom: 15,
},
graficoSimulado: {
height: 120,
backgroundColor: '#f8f9fa',
borderRadius: 8,
justifyContent: 'center',// Centraliza verticalmente
alignItems: 'center',// Centraliza horizontalmente
},
textoGrafico: {
fontSize: 24,
marginBottom: 10,
},
subtextoGrafico: {
fontSize: 14,
color: '#28a745',
textAlign: 'center',
},
secaoAtividades: {
backgroundColor: 'white',
borderRadius: 12,
padding: 20,
elevation: 2,
shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.1,
shadowRadius: 2,
},
itemAtividade: {
flexDirection: 'row',// Ícone e conteúdo lado a lado
alignItems: 'center',
paddingVertical: 12,
borderBottomWidth: 1,
borderBottomColor: '#f1f3f4',
},
iconeAtividade: {
width: 40,
height: 40,
borderRadius: 20,
backgroundColor: '#e9ecef',
justifyContent: 'center',// Centraliza verticalmente
alignItems: 'center',// Centraliza horizontalmente
marginRight: 15,
},
textoIcone: {
fontSize: 16,
},
conteudoAtividade: {
flex: 1,
},
tituloAtividade: {
fontSize: 14,
fontWeight: '600',
color: '#212529',
},
tempoAtividade: {
fontSize: 12,
color: '#6c757d',
marginTop: 2,
}
});