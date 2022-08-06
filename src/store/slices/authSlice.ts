import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  access: string;
  username: string;
  isAuth: boolean;
}

interface AuthPayload {
  access: string;
  username: string;
}

const initialState: AuthState = {
  access: localStorage.getItem("access") || "",
  username: localStorage.getItem("username") || "",
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorization(state: AuthState, action: PayloadAction<AuthPayload>) {
      state.access = action.payload.access;
      state.username = action.payload.username;
      state.isAuth = Boolean(action.payload.access);

      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("username", action.payload.username);
    },
    logout(state: AuthState) {
      state.access = "";
      state.username = "";
      state.isAuth = false;

      localStorage.removeItem("access");
      localStorage.removeItem("username");
    },
  },
});

export default authSlice.reducer;
