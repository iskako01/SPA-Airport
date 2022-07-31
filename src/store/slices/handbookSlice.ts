import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HandbookState {
  loading: boolean;
  types: string[];
  regions: string[];
  countries: string[];
}

const initialState: HandbookState = {
  loading: false,
  types: [],
  regions: [],
  countries: [],
};

interface HandbookPayload {
  types: string[];
  regions: string[];
  countries: string[];
}

export const handbookSlice = createSlice({
  name: "handbook",
  initialState,
  reducers: {
    fetching(state: HandbookState) {
      state.loading = true;
    },

    fetchSuccess(state: HandbookState, action: PayloadAction<HandbookPayload>) {
      state.loading = false;
      state.types = action.payload.types;
      state.regions = action.payload.regions;
      state.countries = action.payload.countries;
    },

    fetchError(state: HandbookState, action: PayloadAction<Error>) {
      state.loading = false;
      //   state.error = action.payload.message;
    },
  },
});

export default handbookSlice.reducer;
