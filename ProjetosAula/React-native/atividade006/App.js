import { SafeAreaView, ScrollView } from "react-native";
import ExemploStatusBar from "./components/StatusBar";
import ExemploDrawer from "./components/Drawer";
import ExemploScrollView from "./components/ScroolView";
import AppLogin from "./components/Login";
import BuscadorProdutos from "./components/List";
import Galerry from "./components/Galery";
import ListaProdutos from "./components/Flatlist";
import ListaAgrupada from "./components/DatasList";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 5,
        margin: 10, 
      }}
    >
      <ScrollView style={{ padding: 20 }}>
        {/* 
      <ExemploDrawer/> 
      <ExemploStatusBar/>  
      <ExemploScrollView/> 
      <AppLogin/>
      <BuscadorProdutos/> 
      */}
        <Galerry />
        <ListaProdutos />
        <ListaAgrupada />
      </ScrollView>
    </SafeAreaView>
  );
}
