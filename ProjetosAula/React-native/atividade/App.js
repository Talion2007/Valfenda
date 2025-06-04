import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/music.mp3') // Coloque o arquivo de áudio aqui dentro da pasta assets
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); // limpa o som quando o componente desmonta ou quando troca som
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.emoji}>👨‍🦽</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.emoji}>👩‍🦽</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.emoji}>🧎‍♂️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.emoji}>🧎‍♀️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.emoji}>🚶‍♂️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.emoji}>🚶‍♀️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.emoji}>🏃‍♂️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.emoji}>🏃‍♀️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.emoji}>🕴</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 32,
  },
  button: {
    backgroundColor: 'darkolivegreen',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    margin: 10,
  },
  emoji: {
    fontSize: 58,
  },
});
