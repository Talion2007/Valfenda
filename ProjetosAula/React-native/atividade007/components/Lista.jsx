import React, { useState } from "react";
 import { View, Button, Text, LayoutAnimation, Platform, UIManager } from "react-native";
 if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
 UIManager.setLayoutAnimationEnabledExperimental(true);
 }
 export default function ListaAnimada() {
 const [itens, setItens] = useState(["Item 1", "Item 2", "Item 3"]);
 function adicionarItem() {
LayoutAnimation.configureNext({ duration: 1000, ...LayoutAnimation.Presets.easeInEaseOut });

 setItens([...itens, `Item ${itens.length + 1 }`]);
 }
 function removerItem() {
 if (itens.length >0 ) {
LayoutAnimation.configureNext({ duration: 5000, ...LayoutAnimation.Presets.easeInEaseOut });
 setItens(itens.slice(0, -1));
 }
 }
 return (
 <View style={{ padding: 16 }}>
 {itens.map((item, idx) => (
 <View key={idx} style={{ marginBottom: 8, padding: 12, backgroundColor: "#ff0000ff", borderRadius: 6 }}>
 <Text style={{ fontSize: 16 }}>{item}</Text>
 </View>
 ))}
 <Button title="Adicionar item" onPress={adicionarItem} />
 <Button title="Remover item" onPress={removerItem} color="#e76f51" />
 </View>
 );
 }