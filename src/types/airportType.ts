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
