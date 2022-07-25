import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hook/redux";

export const AirportDetailPage = () => {
  const params = useParams<"id">();

  const airport = useAppSelector((state) => state.airport.airports).find(
    (airport) => airport.id === Number(params.id)
  );

  console.log(airport);

  return (
    <div className="container mx-auto pt-5 ">
      <h1>
        <p className="text-lg font-bold">{airport?.name}</p>
        <p className="text-md ">{airport?.region}</p>
        <p className="text-md ">{airport?.type}</p>
        <p className="text-md ">{airport?.country}</p>
        <p className="text-md ">{airport?.local_code}</p>
        <p className="text-md ">{airport?.ident}</p>
      </h1>
    </div>
  );
};
