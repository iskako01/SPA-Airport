import axios from "axios";
import { IServerResponse } from "../types/models";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const airportAPI = {
  getAirports(page: number, count: number) {
    return instance
      .get<IServerResponse>("/airports", { params: { page, count } })
      .then((response) => response.data);
  },
  searchAirports(search: string, count: number) {
    return instance.get("/airports", { params: { search, count } });
  },
};

export const handbookAPI = {
  getAirportTypes() {
    return instance.get<Array<string>>("/handbooks/airport-types");
  },
  getAirportRegions() {
    return instance.get<Array<string>>("/handbooks/regions");
  },
  getAirportCountries() {
    return instance.get<Array<string>>("/handbooks/countries");
  },
};
