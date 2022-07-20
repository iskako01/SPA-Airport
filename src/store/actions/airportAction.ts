import { AppDispatch } from "./../index";

import { airportAPI } from "../../api";
import { airportSlice } from "../slices/airportSlice";

export const fetchAirports = (page = 1, count = 50) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(airportSlice.actions.fetching());
      const response = await airportAPI.getAirports(page, count );
      dispatch(airportSlice.actions.fetchSuccess(response.results));
    } catch (error) {
      dispatch(airportSlice.actions.fetchError(error as Error));
    }
  };
};
