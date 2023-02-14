import Home from "./src/telas/home";
import { SafeAreaView, StyleSheet } from "react-native";

function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <Home />
    </SafeAreaView>


  )

}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})

export default App