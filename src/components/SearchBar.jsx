import React from "react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { HiAdjustmentsVertical } from "react-icons/hi2";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-8 w-full my-4 px-4 flex justify-between items-center gap-4">
      <div className="flex justify-center items-center gap-4 ">
        {/* search box */}
        <div className="relative flex-grow w-[15%]  ">
          <IoIosSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={14}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" pl-7 pr-4 py-[6px] border border-[#D6D6D6] bg-white rounded-full font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {/* filter */}

        <button className="flex items-center gap-2 px-4 py-[6px]  text-gray-600 hover:bg-white rounded-full">
          <HiAdjustmentsVertical className="w-4 h-4" />
          <span className="text-xs">Filters</span>
        </button>
        {/* row */}
        <button className="flex items-center gap-2 px-4 py-[6px]  border border-[#D6D6D6] bg-white hover:bg-gray-50 rounded-full ">
          <span className="text-xs font-semibold">Rows</span>
          <FaChevronDown size={10} />
        </button>
        {/* Months */}
        <button className="flex items-center gap-2 px-4 py-[6px]  border border-[#D6D6D6] bg-white hover:bg-gray-50 rounded-full ">
          <span className="text-xs font-semibold">July</span>
          <FaChevronDown size={10}/>
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Export Button */}
        
        <button className="flex items-center gap-2 px-4 py-[6px] bg-blue-600 rounded-full text-white hover:bg-blue-700 ">
          <span className="text-xs font-semibold">Export</span>
          <FaChevronDown size={10} />
        </button>

        {/* Detailed View Button */}
        <button className="flex items-center gap-2 px-4 py-[6px]  border border-[#D6D6D6] bg-white hover:bg-gray-50 rounded-full ">
          <span className="text-xs font-semibold">Detailed View</span>
          <FaChevronDown size={10} />
        </button>
       
      </div>
    </div>
  );
};

export default SearchBar;
