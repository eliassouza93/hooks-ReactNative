
import { SafeAreaView, StyleSheet } from "react-native";
import AppRotas from './src/rotas/AppRotas';

function App() {

  return (
    <SafeAreaView style={estilos.tela}>
      <AppRotas />
    </SafeAreaView>
  )

}
const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})

export default App