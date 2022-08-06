export interface IAirport {
  id: number;
  name: string;
  ident: string;
  local_code: string;
  region: string;
  type: string;
  country: string;
}

export interface IServerResponse {
  count: number;
  next: number;
  previous: null | number;
  results: IAirport[];
}

export interface IAuthServerResponse {
  access: string;
  refresh: string;
}

export interface IFilter {
  type: string;
  region: string;
  country: string;
}

export interface IAirportDetails {
  continent: string;
  coordinates: string;
  country: string;
  elevation_ft: string;
  gps_code: string | null;
  iata_code: string | null;
  ident: string;
  local_code: string | null;
  municipality: string;
  name: string;
  region: string;
  type: string;
}
