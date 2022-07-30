import React, { useEffect, useState } from "react";
import { AirportCard } from "../components/AirportCard";
import { AirportFilter } from "../components/AirportFilter";
import { AirportSearch } from "../components/AirportSearch";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { fetchAirports } from "../store/actions/airportAction";
import ReactPaginate from "react-paginate";
import { IAirport } from "../types/airportType";

const ITEMS_PER_PAGE = 50;

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { loading, error, airports, count } = useAppSelector(
    (state) => state.airport
  );
  const [page, setPage] = useState<number>(0);
  //   const [currentItems, setCurrentItems] = useState<IAirport[]>([]);
  //   const [pageCount, setPageCount] = useState<number>(0);
  //   const [itemOffset, setItemOffset] = useState<number>(0);

  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  const itemsPerPage = 4;

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected);
    // const newOffset = (selected * itemsPerPage) % airports.length;
    // console.log(
    //   `User requested page number ${selected}, which is offset ${newOffset}`
    // );
    // setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(fetchAirports(page + 1, ITEMS_PER_PAGE));
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(airports.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(airports.length / itemsPerPage));
    // console.log("airports", airports);
  }, [dispatch, page]);
  return (
    <div className="container mx-auto max-w-[760px] pt-5 ">
      <AirportSearch />
      <AirportFilter />

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-lg text-red-700">{error}</p>}

      {airports.map((airport) => (
        <AirportCard airport={airport} key={airport.id} />
      ))}

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="flex"
        pageClassName="py-1 px-2 border ml-2 "
        nextClassName="py-1 px-2 border mr-2 "
        previousClassName="py-1 px-2 border"
        activeClassName="bg-gray-500 text-white"
        forcePage={page}
      />
    </div>
  );
};
