import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { MoreVertical } from "lucide-react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const FilterButton = ({ children, className = "" }) => (
    <button 
      className={`flex items-center gap-2 px-4 py-2 border border-[#D6D6D6] 
        bg-white hover:bg-gray-50 rounded-full text-xs font-semibold ${className}`}
    >
      {children}
      <FaChevronDown size={10} />
    </button>
  );

  return (
    <div className="relative">
      <div className="w-full px-4 py-2 flex flex-col sm:flex-row gap-4">
        {/* Left Section */}
        <div className="flex-1 flex flex-wrap gap-4">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[200px]">
            <IoIosSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={14}
            />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-2 border border-[#D6D6D6] bg-white 
                rounded-full text-xs font-semibold
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 
              hover:bg-white rounded-full">
              <HiAdjustmentsVertical className="w-4 h-4" />
              <span className="text-xs">Filters</span>
            </button>
            <FilterButton>Rows</FilterButton>
            <FilterButton>July</FilterButton>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-between gap-4">
          {/* Export Button - Always Visible */}
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 
            rounded-full text-white hover:bg-blue-700">
            <span className="text-xs font-semibold">Export</span>
            <FaChevronDown size={10} />
          </button>

          {/* Detailed View - Hidden on Mobile */}
          <div className="hidden md:block">
            <FilterButton>Detailed View</FilterButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <>
          <div className="absolute right-4 top-full mt-2 bg-white rounded-lg shadow-lg 
            border border-gray-200 p-2 z-20 min-w-[200px] md:hidden">
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 
                rounded-lg text-gray-600">
                <HiAdjustmentsVertical className="w-4 h-4" />
                <span className="text-sm">Filters</span>
              </button>
              <button className="flex items-center justify-between px-4 py-2 
                hover:bg-gray-50 rounded-lg">
                <span className="text-sm">Rows</span>
                <FaChevronDown size={10} />
              </button>
              <button className="flex items-center justify-between px-4 py-2 
                hover:bg-gray-50 rounded-lg">
                <span className="text-sm">July</span>
                <FaChevronDown size={10} />
              </button>
              <button className="flex items-center justify-between px-4 py-2 
                hover:bg-gray-50 rounded-lg">
                <span className="text-sm">Detailed View</span>
                <FaChevronDown size={10} />
              </button>
            </div>
          </div>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-10"
            onClick={() => setShowMobileMenu(false)}
          />
        </>
      )}
    </div>
  );
};

export default SearchBar;
