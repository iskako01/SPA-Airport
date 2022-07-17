import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAirport } from "../../types/airportType";

interface AirportState {
  loading: boolean;
  error: string;
  airports: IAirport[];
}

const initialState: AirportState = {
  loading: false,
  error: "",
  airports: [],
};

export const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {
    fetching(state: AirportState) {
      state.loading = true;
    },

    fetchSuccess(state: AirportState, action: PayloadAction<IAirport[]>) {
      state.loading = false;
      state.airports = action.payload;
    },

    fetchError(state: AirportState, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default airportSlice.reducer;
