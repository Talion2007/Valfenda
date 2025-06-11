import React, { useRef } from "react";
import { View, Text, Button, DrawerLayoutAndroid } from "react-native";
export default function ExemploDrawer() {
const drawer = useRef(null);
const menuLateral = (
<View style={{ flex: 1, backgroundColor: "#cce", padding: 24 }}>
<Text style={{ fontSize: 22, marginBottom: 16 }}>Menu Ninja</Text>
<Text style={{ marginBottom: 8 }}>🏠 Home</Text>
<Text style={{ marginBottom: 8 }}>⚙️ Configurações</Text>
<Text style={{ marginBottom: 8 }}>🔓 Sair</Text>
</View>
);
return (
<DrawerLayoutAndroid
ref={drawer}
drawerWidth={280}
drawerPosition="left"
renderNavigationView={() => menuLateral}
>
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
<Text style={{ fontSize: 20 }}>Tela Principal</Text>
<Button
title="Abrir Menu"
onPress={() => drawer.current.openDrawer()}
/>
</View>
</DrawerLayoutAndroid>
);
}