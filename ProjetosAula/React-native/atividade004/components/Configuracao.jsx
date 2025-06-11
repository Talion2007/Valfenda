import { useState } from "react";
import { View, Text, Switch, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function MeuConfiguracao() {

    const [nome, setnome] = useState("");
    const [notificacao, setNotificacao] = useState(true);
    const [brilho, setBrilho] = useState(75);
    const [idioma, setIdioma] = useState("pt");

    return(
        <View style={{ padding: 20 }}>

            <TextInput
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setnome}
            style={{borderWidth: 1, padding: 10, marginBottom: 10 }}
            />

            <Text>notificações: {notificacao ? 'Ativado' : 'Desativado'}</Text>
            <Switch value={notificacao}
            onValueChange={setNotificacao}
            />

            <Text>Brilho: {brilho}%</Text>
            <Slider
            value={brilho}
            onValueChange={setBrilho}
            minimumValue={0}
            maximumValue={100}
            step={1}
            />

            <Text>Idioma: {idioma}</Text>
            <Picker selectedValue={idioma} onValueChange={setIdioma}>
                <Picker.Item label="Português" value="pt" />
                <Picker.Item label="Inglês" value="en" />
                <Picker.Item label="Espanhol" value="es" />
                <Picker.Item label="Francês" value="fr" />
            </Picker>

        </View>
    )

}