import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airportReducer from "./slices/airportSlice";
import handbookReducer from "./slices/handbookSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  airport: airportReducer,
  handbook: handbookReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
