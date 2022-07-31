import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { airportAPI } from "../api";
import { useDebounce } from "../hook/debounce";
import { useInput } from "../hook/input";
import { IAirport } from "../types/models";

export const AirportSearch = () => {
  const input = useInput("");
  const debounced = useDebounce(input.value);
  const [airports, setAirports] = useState<IAirport[]>([]);
  const navigate = useNavigate();

  const searchAirports = async () => {
    const response = await airportAPI.searchAirports(debounced, 10);
    setAirports(response.data.results);
    console.log(response.data);
  };

  useEffect(() => {
    if (debounced.length > 2) {
      searchAirports();
    }
    console.log("debounced", debounced);
  }, [debounced]);

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        className="border py-2 px-4 outline-0 w-full h-42px"
        placeholder="Type something here..."
        {...input}
      />

      {input.value && (
        <ul className="list-none absolute left-0 right-0 h-[280px] bg-white top-[42px] shadow-md overflow-y-scroll">
          {airports.map((airport) => (
            <li
              className="py-2 px4 mb-2 hover:bg-slate-500 hover:transition-colors cursor:pointer hover:text-white"
              key={airport.id}
              onClick={() => navigate(`/airport/${airport.id}`)}
            >
              {airport.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
