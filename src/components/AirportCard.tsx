import React from "react";
import { useNavigate } from "react-router-dom";
import { IAirport } from "../types/models";

interface AirportCardProps {
  airport: IAirport;
}

export const AirportCard: React.FC<AirportCardProps> = ({ airport }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/airport/${airport.id}`);
  };

  return (
    <div
      className="border rounded-md py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer"
      onClick={handleClick}
    >
      <p className="text-lg font-bold">{airport.name}</p>
      <p className="text-md ">{airport?.region}</p>
      <p className="text-md ">{airport?.type}</p>
      <p className="text-md ">{airport?.country}</p>
      <p className="text-md ">{airport?.local_code}</p>
      <p className="text-md ">{airport?.ident}</p>
    </div>
  );
};
