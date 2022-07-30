import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAirport } from "../../types/airportType";

interface AirportState {
  loading: boolean;
  error: string;
  airports: IAirport[];
  count: number;
}
interface AirportPayload {
  airports: IAirport[];
  count: number;
}

const initialState: AirportState = {
  loading: false,
  error: "",
  airports: [],
  count: 0,
};

export const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {
    fetching(state: AirportState) {
      state.loading = true;
    },

    fetchSuccess(state: AirportState, action: PayloadAction<AirportPayload>) {
      state.loading = false;
      state.airports = action.payload.airports;
      state.count = action.payload.count;
      state.error = "";
    },

    fetchError(state: AirportState, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default airportSlice.reducer;
