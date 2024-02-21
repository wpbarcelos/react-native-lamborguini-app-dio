import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CarList from "./src/components/CarList";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 12, right: 12 }}>
        <MaterialIcons
          name="shopping-cart"
          color="white"
          size={22}
          style={{ zIndex: 1 }}
        />
        <View
          style={{
            backgroundColor: "rgba(255,0,0,0.8)",
            position: "absolute",
            bottom: -7,
            right: -7,
            zIndex: 10,
            paddingVertical: 2,
            paddingHorizontal: 4,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>0</Text>
        </View>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 32,
          textAlign: "center",
          marginTop: 16,
        }}
      >
        Lamborguini Shop
      </Text>
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
