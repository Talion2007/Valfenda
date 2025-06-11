import { View } from "react-native";
import ExemploStatusBar from "./components/StatusBar";
import ExemploDrawer from "./components/Drawer";
import ExemploScrollView from "./components/ScroolView";
import AppLogin from "./components/Login";
import BuscadorProdutos from "./components/List";
import Galerry from "./components/Galery";

export default function App() {
  return (
    <View style= {{flex: 1, backgroundColor: '#f0f0f0', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {/* <ExemploDrawer/> */}
        {/* <ExemploStatusBar/> */} 
        {/* <ExemploScrollView/> */}
         <AppLogin/>
        {/* <BuscadorProdutos/> */}
        {/* <Galerry/> */}
    </View>
  );
}
