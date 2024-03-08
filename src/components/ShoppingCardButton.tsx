import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useCarStore } from "../store/car.store";
import { Link } from "expo-router";

export default function ShoppingCartButton() {
  const { cars } = useCarStore();

  return (
    <Link asChild href="/Cart">
      <TouchableOpacity
        style={{
          position: "absolute",
          padding: 10,
          top: 12,
          right: 12,
          zIndex: 10,
        }}
      >
        <View>
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
            <Text style={{ color: "white", fontSize: 12 }}>{cars.length}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
