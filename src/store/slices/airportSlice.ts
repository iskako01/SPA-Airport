import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAirport, IFilter } from "../../types/models";

interface AirportState {
  loading: boolean;
  error: string;
  airports: IAirport[];
  airportsContainer: IAirport[];
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
  airportsContainer: [],
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
      state.airportsContainer = action.payload.airports;
      state.count = action.payload.count;
      state.error = "";
    },

    fetchError(state: AirportState, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },

    filter(state: AirportState, action: PayloadAction<IFilter>) {
      state.airports = state.airportsContainer
        .filter((airport) => airport.type.includes(action.payload.type))
        .filter((airport) => airport.region.includes(action.payload.region))
        .filter((airport) => airport.country.includes(action.payload.country));
    },
  },
});

export default airportSlice.reducer;
