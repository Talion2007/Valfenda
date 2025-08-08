import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function ScrollInterativo() {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [items, setItems] = useState([
    { id: 1, texto: 'Item especial 1', especial: true },
    { id: 2, texto: 'Item normal 1', especial: false },
    { id: 3, texto: 'Item especial 2', especial: true },
    { id: 4, texto: 'Item normal 2', especial: false },
    { id: 5, texto: 'Item especial 3', especial: true },
  ]);

  const adicionarItem = () => {
    const novoItem = {
      id: items.length + 1,
      texto: `Item ${items.length + 1}`,
      especial: Math.random() > 0.5,
    };
    setItems([...items, novoItem]);
  };

  const handleScrollBeginDrag = () => {
    console.log('🛑 Usuário começou a scrollar');
  };

  const handleScrollEndDrag = () => {
    console.log('✅ Usuário parou de scrollar');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>🕹️ Scroll Controlado</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={[
            styles.botao,
            scrollEnabled ? styles.botaoAtivo : styles.botaoInativo,
          ]}
          onPress={() => setScrollEnabled(!scrollEnabled)}
        >
          <Text style={styles.textoBotao}>
            {scrollEnabled ? '🔓 Destravar' : '🔒 Travar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarItem}
        >
          <Text style={styles.textoBotao}>⭐ Adicionar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        scrollEnabled={scrollEnabled}
        bounces={true}
        showsVerticalScrollIndicator={true}
        onScrollBeginDrag={handleScrollBeginDrag}
        onScrollEndDrag={handleScrollEndDrag}
        onContentSizeChange={(w, h) =>
          console.log(`📏 Tamanho do conteúdo: ${h.toFixed(0)}px`)
        }
      >
        <Text style={styles.instrucao}>
          {scrollEnabled
            ? '✅ Scroll liberado: Deslize à vontade'
            : '⛔ Scroll travado! Destrave acima'}
        </Text>

        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.itemCard,
              item.especial ? styles.itemEspecial : styles.itemNormal,
            ]}
            onPress={() => Alert.alert('📢', ` Você tocou no ${item.texto}`)}
          >
            <Text style={styles.itemTexto}>
              {item.especial ? '🌟 ' : '📄 '}
              {item.texto}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.rodape}>
          <Text style={styles.textoRodape}>
            📦 Total de itens: {items.length}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7e4',
  },
  header: {
    backgroundColor: '#22c55e',
    padding: 16,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botao: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    minWidth: 120,
  },
  botaoAtivo: {
    backgroundColor: '#22c55e',
  },
  botaoInativo: {
    backgroundColor: '#ef4444',
  },
  botaoAdicionar: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  instrucao: {
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    padding: 16,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  itemCard: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
  },
  itemEspecial: {
    backgroundColor: '#86efac',
    borderColor: '#4ade80',
  },
  itemNormal: {
    backgroundColor: '#34d399',
    borderColor: '#7f1d8d',
  },
  itemTexto: {
    color: '#fff',
    fontSize: 16,
  },
  rodape: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#20c3e9',
    borderRadius: 12,
    alignItems: 'center',
  },
  textoRodape: {
    color: '#ecf0f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});