 import React from "react";
 import { View, Button, Share } from "react-native";
 export default function ExemploShare() {
 async function compartilharMeme() {
 try {
 const resultado = await Share.share({
 message: `Você reparou a quantidade de preços diferentes que o mesmo quarto pode ter?

Em vez de perder horas procurando, deixe que o Trivago facilite a sua busca pelo hotel ideal com o melhor preço.

Trivago compara os preços de mais de setecentos mil hotéis e mais de duzentos sites de reserva de uma só vez, é só acessar trivago.com.br, digitar o lugar para onde quer viajar.

Com apenas dois cliques escolher as datas de entrada e de saida e então é só buscar, simples assim.

O Trivago procura em centenas de sites de reserva e mostra os melhores hotéis.

Você pode o preço máximo que quer gastar por noite, a categoria do hotel e até filtrar pelas avaliações dos usuários, não se esqueça, Trivago mostra todos os preços disponíveis para o mesmo quarto de hotel assim sem dúvida você vai encontrar o seu hotel ideal pelo melhor preço com trivago.com.br.

Hotel? Trivago.`,
 url: "https://formula1-statistics.vercel.app/"
 });
 if (resultado.action === Share.sharedAction) {
 alert("Compartilhado com sucesso!");
 } else if (resultado.action === Share.dismissedAction) {
 alert("Compartilhamento cancelado!");
 }
 } catch (erro) {
 alert("Ih, não rolou o compartilhamento. Tenta de novo!");
 }
 }
 return (
 <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
 <Button title="Compartilhar Trivago" onPress={compartilharMeme} />
 </View>
 );
 }