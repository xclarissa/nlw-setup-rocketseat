import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import Loading from "./src/assets/components/Loading";

export default function App() {

  // prevenir de exibir antes de carregar as fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  // se fonte nao estiver disponivel nao vai retornar nada
  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HELLO WOOOORLD</Text>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    backgroundColor: "#fffb00",
    fontWeight: "bold",
  },
});