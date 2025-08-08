import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Importando as telas (exemplos simples)
import PaginaTarefas from "./components/PaginaTarefas";
import CardsRecomendados from "./components/CardsRecomendados";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início">
        <Drawer.Screen
          name="Início"
          component={PaginaTarefas}
          options={{ title: "🏠 Página Principal" }}
        />
        <Drawer.Screen
          name="Recomendados"
          component={CardsRecomendados}
          options={{ title: "📚 Recomendados" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
