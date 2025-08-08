import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function PaginaTarefas() {
  const linguagens = [
    { id: 1, nome: 'Javascript', emoji: ' 🤖', backgroundColor : '#f7dc6f' },
    { id: 2, nome: 'React', emoji: ' 💻', backgroundColor : '#61dafb' },
    { id: 3, nome: 'React Native', emoji: ' 📱 ', backgroundColor : '#1c9ec2ff' },
    { id: 4, nome: 'Node.js', emoji: ' 💾', backgroundColor : '#8cc84b' },
    { id: 5, nome: 'Python', emoji: ' 🐍', backgroundColor : '#ffcc00' },
    { id: 6, nome: 'Java', emoji: ' ☕', backgroundColor : '#f89820' },
    { id: 7, nome: 'C#', emoji: ' #️⃣', backgroundColor : '#af74beff' },
    { id: 8, nome: 'PHP', emoji: ' 🐘' , backgroundColor : '#4CAF50'},
  ];

  const pensamentos = [
    { id: 1, texto: 'Deu problema no código, mas é assim que aprendemos!' },
    { id: 2, texto: 'A View está quebrada, mas é só um bug!' },
    { id: 3, texto: 'Estou aprendendo muito, mas ainda estou longe do ideal.' },
    { id: 4, texto: 'Cada erro é uma oportunidade de aprender.' },
    { id: 5, texto: 'O App está quebrado, mas vou consertar!' },
    { id: 6, texto: 'Eu não sei como resolver isso, mas vou tentar.' },
    { id: 7, texto: 'Não consegui resolver, mas vou pedir ajuda.' },
    { id: 8, texto: 'Acho que não vou virar um programador famoso, mas vou continuar estudando.' },
    { id: 9, texto: 'Estou cansado, mas vou continuar estudando.' },
    { id: 10, texto: 'Acho que não vou conseguir, mas vou tentar.' },
  ];

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Listas do Dev 👨‍💻 </Text>

      <Text style={styles.subtitulo}>Linguagens de Programação 🖥️</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.galeriaContent}
        style={styles.galeriaContainer}
      >
        {linguagens.map((id) => (
          <View key={id} style={styles.fotoCard}
            backgroundColor={id.backgroundColor}>
            <Text style={styles.emoji}>{id.emoji}</Text>
            <Text style={styles.nome}>{id.nome}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.subtitulo}>Pensamentos 💭</Text>

      <ScrollView
        style={styles.listaContainer}
        contentContainerStyle={styles.listaContent}
      >
        {
            pensamentos.map((pensamento) => (
                <View key={pensamento.id} style={styles.itemLista}>
                <Text style={styles.itemTexto}>{pensamento.texto}</Text>
                </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    marginTop: 40,
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
    marginTop: 24,
    color: '#2c3e50',
        textAlign: 'center',
  },
  galeriaContainer: {
    maxHeight: 120,
    margin: 16,
  },
  galeriaContent: {
    paddingHorizontal: 16,
  },
  fotoCard: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emoji: {
    fontSize: 40,
  },
    nome: {
        fontSize: 14,
        color: '#2c3e50',
        marginTop: 4,
    },

  listaContainer: {
    flex: 1,
  },
  listaContent: {
    padding: 16,
  },
  itemLista: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
  },
  itemTexto: {
    fontSize: 16,
    color: '#2c3e50',
  },
});

