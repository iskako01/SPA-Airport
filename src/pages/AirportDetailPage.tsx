import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { airportAPI } from "../api";
import { useAppSelector } from "../hook/redux";
import { IAirportDetails } from "../types/models";

export const AirportDetailPage = () => {
  const params = useParams<"id">();

  const [airport, setAirports] = useState<IAirportDetails>();

  const fetchAirportsDetail = async () => {
    try {
      const response = await airportAPI.getAirportDetail(params.id!);
      setAirports(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAirportsDetail();
  }, []);

  console.log(airport);

  return (
    <div className="container mx-auto pt-5 ">
      <h1>
        <p className="text-lg font-bold">{airport?.name}</p>
        <p className="text-md ">{airport?.region}</p>
        <p className="text-md ">{airport?.type}</p>
        <p className="text-md ">{airport?.country}</p>
        <p className="text-md ">{airport?.local_code}</p>
        <p className="text-md ">{airport?.continent}</p>
        <p className="text-md ">{airport?.ident}</p>
        <p className="text-md ">{airport?.elevation_ft}</p>
        <p className="text-md ">{airport?.municipality}</p>
        <p className="text-md ">{airport?.gps_code}</p>
      </h1>
    </div>
  );
};
