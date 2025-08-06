import React from "react";
import { SafeAreaView, SectionList, Text } from "react-native";
const dados = [
{ titulo: "Segunda", data: ["Estudar Matemática", "Estudar Química", "Estudar Portugues"] },
{ titulo: "Terça", data: ["Estudar História", "Estudar Geografia", "Estudar Portugues", "Estudar Matemática"] },
{ titulo: "Quarta", data: ["Estudar React-Native", "Estudar Expo", "Estudar Renderização Condicional"] },
{ titulo: "Quinta", data: ["Estudar React", "Estudar Vite", "Estudar Arrow Functions"] },
{ titulo: "Sexta", data: ["Estudar Biologia", "Estudar Física", "Estudar Inglês"] },

];
export default function ListaAgrupada() {
return (
<SafeAreaView style={{ flex: 1, padding: 20}}>
<SectionList
style ={{ flex: 1, backgroundColor: "lightgreen", borderRadius: 10 }}
sections={dados}
keyExtractor={(item, idx) => item + idx}
renderItem={({ item }) => (
<Text style={{ padding: 8 }}>• {item}</Text>
)}
renderSectionHeader={({ section: { titulo } }) => (
<Text style={{ fontWeight: "bold", backgroundColor: "green", padding: 8, color: "white" }}>{titulo}</Text>
)}
stickySectionHeadersEnabled
/>
</SafeAreaView>
);
}