import axios from "axios";
import { AuthData } from "../store/actions/authAction";
import {
  IAirportDetails,
  IServerResponse,
  IAuthServerResponse,
} from "../types/models";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const authAPI = {
  login(data: AuthData) {
    return instance.post<IAuthServerResponse>("/auth/loogin", data);
  },
  register(data: AuthData) {
    return instance.post<IAuthServerResponse>("/auth/register", data);
  },
};

export const airportAPI = {
  getAirports(page: number, count: number) {
    return instance
      .get<IServerResponse>("/airports", { params: { page, count } })
      .then((response) => response.data);
  },
  searchAirports(search: string, count: number) {
    return instance.get("/airports", { params: { search, count } });
  },
  getAirportDetail(id: string) {
    return instance
      .get<IAirportDetails>(`/airports/${id}`)
      .then((response) => response.data);
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
