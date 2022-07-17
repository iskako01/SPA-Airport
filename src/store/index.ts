import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airportReducer from "./slices/airportSlice";

const rootReducer = combineReducers({
  airport: airportReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
