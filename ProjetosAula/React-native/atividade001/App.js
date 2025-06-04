import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Pressable,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";

export default function App() {
    const [sound, setSound] = useState();
    const [contador, setContador] = useState(1)
  
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

    function dogao() {
      setContador(contador => contador + 1)
      Alert.alert("Dogão!!!", `Voce dogou ${contador} vez!`)
    }

  function compartilhar() {
    Alert.alert("Compartilhar!", "Você compartilhou!!");
  }
  function curtir() {
    Alert.alert("Curtir!", "Você curtiu!!");
  }
  function enviar() {
    Alert.alert("Enviar!", "Você enviou!!");
  }
  function reagir() {
    Alert.alert("Reagir!", "Você reagiu!!");
  }
  function desativado() {}

  return (
    <ScrollView style={styles.scrollViewContent}>

    <View style={styles.container}>
      <View style={styles.cubo}>
        <Text style={styles.text}>
          Clique em 💞 para <Text style={styles.alttext}>Compartilhar!</Text>
        </Text>
        <Pressable title="Pressable" onPress={playSound}>
          <Image source={require("./assets/imagem.png")} style={styles.image} />
        </Pressable>
      </View>

      <View style={styles.cubo}>
        <Text style={styles.text}>
          Clique em 💓 para <Text style={styles.alttext}>Curtir!</Text>
        </Text>
        <TouchableOpacity title="click" onPress={dogao}>
        <Image
          source={{
            uri: "https://yt3.googleusercontent.com/ytc/AIdro_mNssFg1gP80uaBWFwlsMQcLGNFsQmDrY_MfyW3_Qbr6YA=s900-c-k-c0x00ffffff-no-rj",
          }}
          style={styles.image}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.cubo}>
        <Text style={styles.text}>
          Clique em 💌 para <Text style={styles.alttext}>Enviar!</Text>
        </Text>
        <Image
          source={{
            uri: "https://images7.memedroid.com/images/UPLOADED850/5df40555eaa5f.jpeg",
          }}
          style={styles.image}
          />
      </View>

      <View style={styles.cubo}>
        <Text style={styles.text}>
          Clique em 🥰 para <Text style={styles.alttext}>Reagir!</Text>
        </Text>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.91_OAlCl7vIUfL675nlr9wHaHa?rs=1&pid=ImgDetMain",
          }}
          style={styles.image}
          />
      </View>

      <View style={styles.cubo}>
        <Text style={styles.text}>
          Clique em 🤐 para <Text style={styles.alttext}>DESATIVADO!</Text>
        </Text>
        <Image source={require("./assets/cat.jpg")} style={styles.image} />
      </View>
      

      <View style={styles.cubo2}>
        <Button
          title="Compartilhar 💞"
          onPress={compartilhar}
          style={styles.baton}
          ></Button>
        <Button
          title="Curtir 💓"
          onPress={curtir}
          style={styles.baton}
          ></Button>
        <Button
          title="Enviar 💌"
          onPress={enviar}
          style={styles.baton}
          ></Button>
        <Button
          title="Reagir 🥰"
          onPress={reagir}
          style={styles.baton}
          ></Button>
        <Button
          title="Desativado 🤐"
          onPress={desativado}
          style={styles.baton}
          ></Button>
      </View>
      <StatusBar style="auto" />
    </View>
          </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "darkolivegreen",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 50
  },

  cubo: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderRadius: 10,
    gap: 10,
  },

  cubo2: {
    backgroundColor: "lightblue",
    flexDirection: "collum",
    justifyContent: "space-between",
    margin: 5,
    gap: 1,
    borderRadius: 10,
    width: 400,
  },

  text: {
    color: "darkred",
    fontSize: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    flex: 1,
    flexWrap: "wrap",
  },

  alttext: {
    color: "darkolivegreen",
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    margin: 10,
  },
});
