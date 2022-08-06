import { authAPI } from "../../api";
import { authSlice } from "../slices/authSlice";
import { AppDispatch } from "./../index";

export interface AuthData {
  username: string;
  password: string;
}

export const register = (data: AuthData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await authAPI.register(data);
      dispatch(
        authSlice.actions.authorization({
          username: data.username,
          access: response.data.access,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (data: AuthData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await authAPI.login(data);
      dispatch(
        authSlice.actions.authorization({
          username: data.username,
          access: response.data.access,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
