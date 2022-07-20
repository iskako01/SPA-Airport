import axios from "axios";
import { IServerResponse } from "../types/airportType";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const airportAPI = {
  getAirports(page: number, count: number) {
    return instance
      .get<IServerResponse>("/airports", { params: { page, count } })
      .then((response) => response.data);
  },
};
