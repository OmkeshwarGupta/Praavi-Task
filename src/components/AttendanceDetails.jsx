import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { WiTime1 } from "react-icons/wi";
import { RxPerson } from "react-icons/rx";
import { TiAttachment } from "react-icons/ti";
import { FaRegComment } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Data from "../data.json";

const AttendanceDetails = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const data = Data.attendanceRecords;

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  // Desktop view
  const DesktopTable = () => (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full mt-4 bg-white">
        <thead className="text-sm text-center font-semibold">
          <tr className="border">
            <td className="border text-start pl-4 border-gray-300 p-2">Date</td>
            <td className="border border-gray-300 p-2">Time planned + WH</td>
            <td className="border border-gray-300 p-2">Actual Time</td>
            <td className="border border-gray-300 p-2">Fine/Bonus</td>
            <td className="border border-gray-300 p-2">Error</td>
            <td className="border border-gray-300 p-2">Cal. Att.</td>
            <td className="border border-gray-300 p-2">Final Att.</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, ind) => (
            <tr key={ind} className="border">
              <td className="space-x-2 border text-xs text-center font-semibold border-gray-300 p-2">
                <span>{item.day}</span>
                <span>{item.date}</span>
              </td>
              <td className="border text-xs text-center font-semibold border-gray-300 p-2">
                <div className="flex items-center justify-center space-x-2">
                  <span>{item.timePlanned}</span>
                  <div className="w-1.5 h-1.5 bg-[#B9B9B9] rounded-full"></div>
                  <span>{item.workHours}</span>
                </div>
              </td>
              <td className="border text-xs text-center font-semibold border-gray-300 p-2">
                <div className="flex items-center justify-center space-x-2">
                  <span>{item.actualTime}</span>
                  <div className="w-1.5 h-1.5 bg-[#B9B9B9] rounded-full"></div>
                  <span>{item.overtime}</span>
                </div>
              </td>
              <td className="border text-xs text-center font-semibold border-gray-300 p-2">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm text-[#2EA81A]">{item.fineBonus}</span>
                  <span className="text-xs text-[#A1A1A1] line-through">{item.bonusExtra}</span>
                  <BsThreeDotsVertical />
                </div>
              </td>
              <td className="px-4 py-3 border border-gray-300">
                <div className="flex flex-row gap-1">
                  {item.errors.includes("location") && <HiOutlineLocationMarker className="text-red-500" />}
                  {item.errors.includes("late") && <WiTime1 className="text-red-500" />}
                  {item.errors.includes("user") && <RxPerson className="text-red-500" />}
                </div>
              </td>
              <td className="border border-gray-300 p-2 text-sm text-[#2EA81A] font-semibold">{item.calAtt}</td>
              <td className="border border-gray-300 p-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">{item.finalAtt}</span>
                  <IoIosArrowDown size={12} />
                  <span className="text-xs text-[#FFAE00] bg-[#FFAE001A] p-1">{item.overtimeNote}</span>
                </div>
              </td>
              <td className="border border-gray-300 p-2">
                <div className="flex text-xs items-center space-x-2">
                  <TiAttachment size={18} />
                  <span>{item.links}</span>
                  <FaRegComment size={18} />
                  <span>{item.messages}</span>
                  <IoIosArrowDown size={18} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Mobile view
  const MobileView = () => (
    <div className="md:hidden space-y-4">
      {data.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleRow(index)}
          >
            <div className="space-y-1">
              <div className="font-semibold">
                {item.day} {item.date}
              </div>
              <div className="text-sm text-gray-600">
                {item.timePlanned} • {item.workHours}
              </div>
            </div>
            <IoIosArrowDown 
              className={`transform transition-transform ${expandedRow === index ? 'rotate-180' : ''}`}
            />
          </div>

          {expandedRow === index && (
            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span>Actual Time:</span>
                <span>{item.actualTime} • {item.overtime}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Fine/Bonus:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[#2EA81A]">{item.fineBonus}</span>
                  <span className="text-[#A1A1A1] line-through">{item.bonusExtra}</span>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span>Errors:</span>
                <div className="flex gap-2">
                  {item.errors.includes("location") && <HiOutlineLocationMarker className="text-red-500" />}
                  {item.errors.includes("late") && <WiTime1 className="text-red-500" />}
                  {item.errors.includes("user") && <RxPerson className="text-red-500" />}
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span>Cal. Att:</span>
                <span className="text-[#2EA81A]">{item.calAtt}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Final Att:</span>
                <div className="flex items-center space-x-2">
                  <span>{item.finalAtt}</span>
                  <span className="text-xs text-[#FFAE00] bg-[#FFAE001A] p-1">{item.overtimeNote}</span>
                </div>
              </div>

              <div className="flex justify-between text-sm border-t pt-2">
                <div className="flex items-center space-x-2">
                  <TiAttachment />
                  <span>{item.links}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRegComment />
                  <span>{item.messages}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-4">
      <DesktopTable />
      <MobileView />
    </div>
  );
};

export default AttendanceDetails;