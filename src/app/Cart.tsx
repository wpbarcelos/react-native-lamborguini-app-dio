import {
  Alert,
  Button,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCarStore } from "../store/car.store";
import { Car } from "../interfaces/Cart";

import { MaterialIcons } from "@expo/vector-icons";
import { useMemo, useReducer } from "react";

export default function Cart() {
  const { cars, removeCar } = useCarStore();
  console.log(cars);

  const total = useMemo(() => {
    let total = 0;
    cars.forEach((car) => {
      total += Number(car.price.replace("$", "").replace(",", ""));
    });
    if (total === 0) {
      return "";
    }
    const USDDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return USDDollar.format(total);
  }, [cars]);

  function handleDelete(car: Car) {
    removeCar(car);
  }

  if (cars.length === 0) {
    return (
      <View style={styles.page}>
        <Text
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 200,
            fontSize: 16,
            color: "#aaa",
            lineHeight: 50,
          }}
        >
          O carrinho está vazio {"\n"}
          <MaterialIcons name="shopping-bag" size={30} />
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      {/* <Text style={styles.title}>Meu carrinho</Text> */}

      <FlatList<Car>
        data={cars}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#777",
                padding: 5,
                borderRadius: 3,
              }}
            >
              {Platform.OS === "web" && (
                <img
                  width={70}
                  height={70}
                  style={{ objectFit: "contain" }}
                  src={`https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/${item.id}.png`}
                />
              )}
              {Platform.OS !== "web" && (
                <Image
                  width={50}
                  height={50}
                  style={{ alignSelf: "center" }}
                  resizeMethod="resize"
                  resizeMode="contain"
                  source={{
                    uri: `https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/${item.id}.png`,
                  }}
                ></Image>
              )}

              <Text style={{ flex: 1 }}>{item.carName}</Text>

              <TouchableOpacity
                onPress={() => handleDelete(item)}
                style={{ padding: 4 }}
              >
                <MaterialIcons name="delete" size={22} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          color="#700"
          title="Finalizar Comprar"
          onPress={() =>
            Alert.alert("Desculpe", "Não temos estoque no momento.")
          }
        />
        <Text style={styles.total}>Total: {total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 12, backgroundColor: "#000", flex: 1 },
  title: { fontWeight: "bold", fontSize: 32, color: "#fff" },
  total: {
    marginTop: "auto",
    textAlign: "right",
    fontSize: 16,
    color: "white",
  },
});
