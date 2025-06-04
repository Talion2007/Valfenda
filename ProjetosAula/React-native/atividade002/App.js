import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [cor, setCor] = useState('red')

  function mudar() {
    if (cor == red) {
      setCor('blue')
    } else {
      setCor('red')
    }
  }

  return (
    <View style={backgroundColor= cor}>
      <TouchableOpacity onPress={mudar}>
      <Text style={styles.cordofundo}>Comprar maça!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
