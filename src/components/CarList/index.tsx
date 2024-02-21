import { Button, FlatList, Image, Platform, Text, View } from "react-native";
import { Car } from "../../interfaces/Cart";
import { useEffect, useState } from "react";
import { getCars } from "../../api/getCars";
import { getApiCars } from "./actions";

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApiCars(setCars, setLoading);
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ width: "100%", backgroundColor: "black" }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        data={cars}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
          <View
            style={{
              margin: 10,
              backgroundColor: "rgba(250,250,250,0.12)",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  {item.carName}
                </Text>
                <Text style={{ fontSize: 16, color: "#cacaca" }}>
                  {item.releaseYear}
                </Text>
              </View>
            </View>

            {Platform.OS === "web" && (
              <img
                width={300}
                height={300}
                style={{ objectFit: "contain" }}
                src={`https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/${item.id}.png`}
              />
            )}
            {Platform.OS !== "web" && (
              <Image
                width={300}
                height={300}
                style={{ alignSelf: "center" }}
                resizeMethod="resize"
                resizeMode="contain"
                source={{
                  uri: `https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/${item.id}.png`,
                }}
              ></Image>
            )}
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#999", fontSize: 22 }}>{item.price}</Text>
              <Button color={"#007bff"} title="Add to Cart" />
            </View>
          </View>
        )}
      />
    </View>
  );
}
