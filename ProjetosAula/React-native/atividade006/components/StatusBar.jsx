import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
export default function ExemploStatusBar() {
const [escuro, setEscuro] = React.useState(false);
return (
<View
style={{
flex: 1,
backgroundColor: escuro ? "#222" : "#fff",
justifyContent: "center",
alignItems: "center",
}}
>
<StatusBar
barStyle={escuro ? "light-content" : "dark-content"}
backgroundColor={escuro ? "#222" : "#fff"}
animated={true}
/>
<Text style={{ fontSize: 22, color: escuro ? "#fff" : "#222" }}>
StatusBar personalizada!
</Text>
<Button title="Alternar Tema" onPress={() => setEscuro((v) => !v)} />
    </View>
);
}