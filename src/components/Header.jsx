import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("finalReports");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    <div className="relative">
      {/* Main Header */}
      <div className="bg-[#ECECF2] border-b border-[#00000014]">
        <div className="flex items-center justify-between px-4 h-12">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-200 rounded-lg"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu size={20} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block overflow-x-auto">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 py-3 text-sm transition-colors duration-200 
                    text-[#00000080] border border-[#00000014] font-semibold
                    whitespace-nowrap
                    ${
                      activeTab === tab.id
                        ? "bg-white shadow-sm text-[#323FDD]"
                        : "hover:bg-gray-200"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Module Name */}
          <div className="text-[#3640E0] text-center font-semibold">
            Attendance Module
          </div>
        </div>

        {/* Mobile Tab Scroll */}
        <div className="md:hidden relative">
          <div className="overflow-x-auto scrollbar-hide">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 py-2 text-sm transition-colors duration-200 
                    text-[#00000080] border border-[#00000014] font-semibold
                    whitespace-nowrap
                    ${
                      activeTab === tab.id
                        ? "bg-white shadow-sm text-[#323FDD]"
                        : "hover:bg-gray-200"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <>
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-20 md:hidden">
            <div className="py-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowMobileMenu(false);
                  }}
                  className={`
                    w-full px-4 py-3 text-left text-sm
                    ${
                      activeTab === tab.id
                        ? "bg-gray-100 text-[#323FDD]"
                        : "text-[#00000080] hover:bg-gray-50"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
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

export default Header;