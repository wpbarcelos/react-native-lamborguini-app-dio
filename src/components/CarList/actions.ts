import { getCars } from "../../api/getCars";
import { Car } from "../../interfaces/Cart";

export async function getApiCars(
  setCars: React.Dispatch<React.SetStateAction<Car[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true);
  const data = await getCars();

  try {
    setCars(data);
    setLoading(false);
  } catch (error) {
    console.log("err", error);
  }
}
