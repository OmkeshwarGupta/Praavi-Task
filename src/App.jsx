import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import AttendanceCard from "./components/AttendanceCard";
import AttendanceDetails from "./components/AttendanceDetails";
import { useState } from "react";
import { Menu } from "lucide-react";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-full w-screen overflow-auto flex bg-[#f7f7fe]">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#323FDD] text-white"
      >
        <Menu size={24} />
      </button>

      {/* sidebar */}
      <div  className={`fixed lg:relative lg:block
            ${isMobileMenuOpen ? 'block' : 'hidden'}
            z-40`} >
        <Sidebar />
      </div>
      {/* main content */}
      <div className="h-full w-full">
        <Header />
        <SearchBar />
        <div className="flex space-x-6 p-6">
          {/* profile list */}
          <div>
            <EmployeeList />
          </div>
          {/* attendance card */}
          <div>
            <AttendanceCard />
            <AttendanceDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
