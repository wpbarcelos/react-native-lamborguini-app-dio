import { create } from "zustand";
import { Car } from "../interfaces/Cart";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IShoppingCart {
  cars: Car[];
  addCar: (newCar: Car) => void;
  removeCar: (carDelete: Car) => void;
}

// export const carStore = create<IShoppingCart>((set) => ({
//   cars: [],
//   addCar: (newCar) => set((state) => ({ cars: [...state.cars, newCar] })),
//   removeCar: (index: number) =>
//     set((state) => ({
//       cars: state.cars.splice(index, 1),
//     })),
// }));

export const useCarStore = create(
  persist<IShoppingCart>(
    (set, get) => ({
      cars: [],
      addCar: (newCar: Car) => {
        if (get().cars.findIndex((c) => c.id == newCar.id) >= 0) {
          return;
        }
        const cars: Car[] = [...get().cars, newCar];
        set(() => ({ cars }));
      },
      removeCar: (carDelete: Car) =>
        set((state) => ({
          cars: state.cars.filter((c) => c.id !== carDelete.id),
        })),
    }),
    {
      name: "car-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
