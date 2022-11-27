import React from "react";
import { BiSearch } from "react-icons/bi";
import TableSong from "./Tablesong/TableSong";

const Search = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold px-3 pt-3">Search Song</h1>
      <div className="lg:w-1/2 md:w-1/2 w-[60%] flex items-center mt-4 ml-5">
        <input
          type="text"
          placeholder="Search Song"
          className="border bg-transparent px-5  lg:py-2 py-1 rounded-full w-[90%]"
        />
        <BiSearch className="lg:text-3xl  text-xl lg:-ml-16 md:-ml-16 w-[10%]  -ml-10 " />
      </div>
      <div className="mt-4">
        <TableSong />
      </div>
    </div>
  );
};

export default Search;
