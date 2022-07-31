import React, { ChangeEvent, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { airportSlice } from "../store/slices/airportSlice";
import { IFilter } from "../types/models";

export const AirportFilter = () => {
  const dispatch = useAppDispatch();
  const { types, regions, countries, loading } = useAppSelector(
    (state) => state.handbook
  );

  const [hasFilter, setHasFilter] = useState(false);

  const [filter, setFilter] = useState<IFilter>({
    type: "",
    region: "",
    country: "",
  });

  const changeHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setHasFilter(true);
  };

  const handleClearFilter = () => {
    setFilter({ type: "", region: "", country: "" });
    setHasFilter(false);
    console.log(filter);
  };

  useEffect(() => {
    dispatch(airportSlice.actions.filter(filter));
  }, [dispatch, filter]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="border py-2 px-4 mb-2 flex justify-between ">
      <select
        className="w-full"
        name="type"
        value={filter.type}
        onChange={changeHandle}
      >
        <option disabled className="text-gray-500" value="">
          Type
        </option>
        {types.map((t) => (
          <option value={t} key={t}>
            {t}
          </option>
        ))}
      </select>

      <select
        className="w-full"
        name="region"
        value={filter.region}
        onChange={changeHandle}
      >
        <option disabled className="text-gray-500" value="">
          Country
        </option>
        {regions.map((r) => (
          <option value={r} key={r}>
            {r}
          </option>
        ))}
      </select>

      <select
        className="w-full"
        name="country"
        value={filter.country}
        onChange={changeHandle}
      >
        <option disabled className="text-gray-500" value="">
          Region
        </option>
        {countries.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>

      {hasFilter && (
        <button
          className="border bg-red-600 text-white px-1 m-2 rounded-md"
          onClick={handleClearFilter}
        >
          &times;
        </button>
      )}
    </div>
  );
};
