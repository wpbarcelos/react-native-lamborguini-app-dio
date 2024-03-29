import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CarList from "./src/components/CarList";
import ShoppingCartButton from "./src/components/ShoppingCardButton";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} hidden={true} />

      <ShoppingCartButton />

      <Text style={styles.title}>Lamborguini Shop</Text>

      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    marginTop: 16,
    fontStyle: "italic",
  },
});
