import axios from "axios";
import { Car } from "../interfaces/Cart";

export const getCars = async () => {
  const response = await axios.get<{ cars: Car[] }>(
    "https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json"
  );
  return response.data.cars;
};
