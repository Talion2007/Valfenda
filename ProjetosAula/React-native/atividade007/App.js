// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaInicio from "./components/TelaInicio";
import TelaPerfil from "./components/TelaPerfil";
import TelaConfig from "./components/TelaConfig";
import Share from "./components/Share";
import Clipboard from "./components/Clipboard";
import Alert from "./components/Alert";
import Lista from "./components/Lista"; // Importando o componente Lista
import ModalComponent from "./components/Modal";
import GaleriaModal from "./components/Galeria";
import FormularioModal from "./components/Formulario";
import GaleriaHorizontal from "./components/Senha";
import ScrollInterativo from "./components/ScrollInterativo";
import SafeAreaView from "./components/SafeAreaView";
import ChatScreen from "./components/Keyboard";
import Comentarios from "./components/Comentario";
import ChatBot from "./components/chatbot";
import FormularioModalDois from "./components/FormularioModal";
import Tecladin from "./components/FormularioTeclado";
import MeuComponente from "./components/Orientacao";
const Drawer = createDrawerNavigator();
// Componentes das telas
// App principal
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        screenOptions={{
          // Cor de fundo do drawer
          drawerStyle: {
            backgroundColor: "#2c3e50", // Azul escuro
            width: 250,
          },
          // Cor do header
          headerStyle: {
            backgroundColor: "#34495e", // Azul acinzentado
          },

          headerTitleStyle: {
            fontWeight: "bold", // Estilo da fonte do título
            fontSize: 18,
          },
          headerTitleAlign: "center", // Alinhamento do título (left, center, right)

          headerTintColor: "#fff",
          // Estilo dos labels (texto dos itens)
          drawerLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#ecf0f1", // Texto claro
            marginTop: 5,
          },
          // Cor do item ativo
          drawerActiveTintColor: "#e74c3c", // Vermelho
          // Cor do item inativo
          drawerInactiveTintColor: "#bdc3c7", // Cinza claro
          // Cor de fundo do item ativo
          drawerActiveBackgroundColor: "#34495e",
          // Cor do ícone
          drawerIconStyle: {
            tintColor: "#ecf0f1",
          },
        }}
      >
        <Drawer.Screen
          name="Início"
          component={TelaInicio}
          options={{ title: "🏠 Página Inicial" }}
        />
        <Drawer.Screen
          name="Orientacao"
          component={MeuComponente}
          options={{ title: "📏 Orientação" }}
        />
        <Drawer.Screen
          name="ChatBot"
          component={ChatBot}
          options={{ title: "🤖 ChatBot" }}
        />
        <Drawer.Screen
          name="Teclado"
          component={Tecladin}
          options={{ title: "⌨ Teclado" }}
        />
        <Drawer.Screen
          name="FormularioDois"
          component={FormularioModalDois}
          options={{ title: "📝 Formulário" }}
        />
        <Drawer.Screen
          name="Comentários"
          component={Comentarios}
          options={{ title: "💬 Comentários" }}
        />
        <Drawer.Screen
          name="Chat"
          component={ChatScreen}
          options={{ title: "💬 Chat" }}
        />
        <Drawer.Screen
          name="SafeAreaView"
          component={SafeAreaView}
          options={{ title: "📏 Safe Area View" }}
        />
        <Drawer.Screen
          name="Perfil"
          component={TelaPerfil}
          options={{ title: "👤 Meu Perfil" }}
        />
        <Drawer.Screen
          name="Configuração"
          component={TelaConfig}
          options={{ title: "⚙ Configuração" }}
        />
        <Drawer.Screen
          name="Compartilhar"
          component={Share}
          options={{ title: "📤 Compartilhar Meme" }}
        />
        <Drawer.Screen
          name="Clipboard"
          component={Clipboard}
          options={{ title: "📋 Área de Transferência" }}
        />
        <Drawer.Screen
          name="Alert"
          component={Alert}
          options={{ title: "⚠ Alertas" }}
        />
        <Drawer.Screen
          name="Lista"
          component={Lista}
          options={{ title: "📃 Lista Animada" }}
        />
        <Drawer.Screen
          name="Modal"
          component={ModalComponent}
          options={{ title: "📑 Modal" }}
        />
        <Drawer.Screen
          name="Galeria"
          component={GaleriaModal}
          options={{ title: "🖼 Galeria" }}
        />
        <Drawer.Screen
          name="Formulario"
          component={FormularioModal}
          options={{ title: "📝 Formulário" }}
        />
        <Drawer.Screen
          name="GaleriaHorizontal"
          component={GaleriaHorizontal}
          options={{ title: "📸 Galeria Horizontal" }}
        />
        <Drawer.Screen
          name="ScrollInterativo"
          component={ScrollInterativo}
          options={{ title: "🕹️ Scroll Interativo" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
