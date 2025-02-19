import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { WiTime1 } from "react-icons/wi";
import { RxPerson } from "react-icons/rx";
import { TiAttachment } from "react-icons/ti";
import { FaRegComment } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import Data from "../data.json";

const AttendanceDetails = () => {
  const data = Data.attendanceRecords;
  console.log(data);
  return (
    <div className="overflow-x-auto mt-4 bg-white">
      <table className="w-full overflow-x-auto mt-4 bg-white">
        <thead className="w-full text-sm text-center font-semibold border-collapse">
          <tr className="border">
            <td className="border text-start pl-4  border-gray-300 p-2 ">
              Date
            </td>
            <td className="border border-gray-300 p-2">Time planned + WH</td>
            <td className="border border-gray-300 p-2">Actual Time</td>
            <td className="border border-gray-300 p-2">Fine/Bonus</td>
            <td className="border border-gray-300 p-2">Error</td>
            <td className="border border-gray-300 p-2">Cal. Att.</td>
            <td className="border border-gray-300 p-2">Final Att.</td>
            <td className="border border-gray-300 p-2 "></td>
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
                  <span className="text-sm text-[#2EA81A]">
                    {item.fineBonus}
                  </span>
                  <span className="text-xs text-[#A1A1A1] line-through">
                    {item.bonusExtra}
                  </span>
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </td>

              <td className="px-4 py-3 border border-gray-300">
                <div className="flex flex-row gap-1">
                  {item.errors.includes("location") && (
                    <HiOutlineLocationMarker className=" text-red-500" />
                  )}
                  {item.errors.includes("late") && (
                    <WiTime1 className=" text-red-500" />
                  )}
                  {item.errors.includes("user") && (
                    <RxPerson className=" text-red-500" />
                  )}
                </div>
              </td>
              <td className="border border-gray-300 p-2 text-sm  text-[#2EA81A] font-semibold">
                {item.calAtt}
              </td>
              <td className="border border-gray-300  p-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">{item.finalAtt}</span>
                  <span>
                    <IoIosArrowDown size={12} />
                  </span>
                  <span className="text-xs text-[#FFAE00] bg-[#FFAE001A] p-1">{item.overtimeNote}</span>
                </div>
              </td>
              <td className="border border-gray-300 p-2">
                <div className="flex text-xs items-center space-x-2">
                 <span> <TiAttachment size={18}/> </span>
                 <span>{item.links}</span>
                 <span> <FaRegComment size={18} /></span>
                 <span>{item.messages}</span>
                 <span> <IoIosArrowDown size={18} /></span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceDetails;
