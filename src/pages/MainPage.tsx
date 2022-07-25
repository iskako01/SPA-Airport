import React, { useEffect, useState } from "react";
import { AirportCard } from "../components/AirportCard";
import { AirportFilter } from "../components/AirportFilter";
import { AirportSearch } from "../components/AirportSearch";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { fetchAirports } from "../store/actions/airportAction";
import ReactPaginate from "react-paginate";
import { IAirport } from "../types/airportType";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { loading, error, airports } = useAppSelector((state) => state.airport);
  const [currentItems, setCurrentItems] = useState<IAirport[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  const itemsPerPage = 4;

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % airports.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(fetchAirports());
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(airports.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(airports.length / itemsPerPage));
  }, [dispatch, itemOffset, itemsPerPage]);
  return (
    <div className="container mx-auto max-w-[760px] pt-5 ">
      <AirportSearch />
      <AirportFilter />

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-lg text-red-700">{error}</p>}

      {currentItems.map((airport) => (
        <AirportCard airport={airport} key={airport.id} />
      ))}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
      />
    </div>
  );
};
