import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import AttendanceCard from "./components/AttendanceCard";
import AttendanceDetails from "./components/AttendanceDetails";

const App = () => {
  return (
    <div className="h-[1380px] flex bg-[#f7f7fe]">
      {/* sidebar */}
      <div >
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
