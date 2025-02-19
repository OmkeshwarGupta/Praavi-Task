import React from "react";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("finalReports");

  const tabs = [
    { id: "attenTeam", label: "Atten. Team (Admin)" },
    { id: "orgDetails", label: "Org. Details (Admin)" },
    { id: "inOutLogs", label: "In/Out Logs" },
    { id: "finalizeAtten", label: "Finalize Atten." },
    { id: "manageEmployees", label: "Manage Employees" },
    { id: "finalReports", label: "Final Reports" },
    { id: "errorReports", label: "Error Reports" },
  ];

  return (
    <div className=" h-[47px] w-[100%] border-b-[1px] border-[#00000014] bg-[#ECECF2] flex items-center justify-between px-4">
      {/* tabs */}
      <div>
        <nav className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-3  text-sm transition-colors duration-200 text-[#00000080] border border-[#00000014] font-semibold
                ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm text-[#323FDD] "
                    : "hover:bg-gray-200"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Module name */}
      <div>
        <p className="text-[#3640E0] font-semibold">Attendance Module</p>
      </div>
    </div>
  );
};

export default Header;

