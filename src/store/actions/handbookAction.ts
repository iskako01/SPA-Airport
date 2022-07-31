import { AppDispatch } from "../index";
import { handbookAPI } from "../../api";
import { handbookSlice } from "../slices/handbookSlice";

export const fetchHandbook = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(handbookSlice.actions.fetching());
      const data = await Promise.all([
        handbookAPI.getAirportTypes(),
        handbookAPI.getAirportRegions(),
        handbookAPI.getAirportCountries(),
      ]);
      dispatch(
        handbookSlice.actions.fetchSuccess({
          types: data[0].data,
          regions: data[1].data,
          countries: data[2].data,
        })
      );
      console.log(data);
    } catch (error) {
      //   dispatch(airportSlice.actions.fetchError(error as Error));
    }
  };
};
