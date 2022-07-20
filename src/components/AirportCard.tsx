import React from "react";
import { IAirport } from "../types/airportType";

interface AirportCardProps {
  airport: IAirport;
}

export const AirportCard: React.FC<AirportCardProps> = ({ airport }) => {
  return <div>{airport.name}</div>;
};
