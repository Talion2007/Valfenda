import { useState } from 'react';
import { FlatList, Text, View, TextInput, StyleSheet } from 'react-native';
const produtos = [
{ id: '1', nome: 'Notebook' },
{ id: '2', nome: 'Mouse' },
{ id: '3', nome: 'Teclado' },
{ id: '4', nome: 'Monitor' },
{ id: '5', nome: 'Fone de Ouvido' },
];
export default function BuscadorProdutos() {
const [busca, setBusca] = useState('');
const produtosFiltrados = produtos.filter((produto) =>
produto.nome.toLowerCase().includes(busca.toLowerCase())
);
return (
<View style={estilos.container}>
<TextInput
style={estilos.input}
placeholder="Digite o nome do produto"
value={busca}
onChangeText={setBusca}
/>
<FlatList
data={produtosFiltrados}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={estilos.item}>
<Text>{item.nome}</Text>
</View>
)}
/>
</View>
);
}
const estilos = StyleSheet.create({
container: {
flex: 1,
margin: 100
},
input: {
borderWidth: 1,
borderColor: '#999',
padding: 10,
marginBottom: 10,
borderRadius: 5,
},
item: {
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#ccc',
},
});