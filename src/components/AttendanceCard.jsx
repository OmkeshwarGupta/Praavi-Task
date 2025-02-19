import React from "react";
import E2 from "../assets/E2.jpeg";

const AttendanceCard = () => {
  return (
    <div className="p-4 bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] rounded-xl flex justify-between items-center  w-[1084px] h-32 overflow-x-auto">
      {/* Profile Section */}
      <div
        className={`flex items-center gap-3 p-3 rounded-lg transition-colors w-[200px] cursor-pointer`}
      >
        <img
          src={E2}
          alt="Employee"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className=" font-bold text-gray-900">Bhaskar Sharma</h3>
          <p className="text-[10px] text-gray-500">
            Sales Manager | Sales Dept.
          </p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="">
        <table className="w-full border border-gray-300 text-sm text-center font-semibold">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 "></td>

              <td className="border border-gray-300 p-2 ">P</td>
              <td className="border border-gray-300 p-2">A</td>
              <td className="border border-gray-300 p-2">WO</td>
              <td className="border border-gray-300 p-2">∑ Bonus/Fine</td>
              <td className="border border-gray-300 p-2">OT</td>
              <td className="border border-gray-300 p-2">LT</td>
              <td className="border border-gray-300 p-2">OT+LT</td>
              <td className="border border-gray-300 p-2">Final Att.</td>
              <td className="border border-gray-300 p-2 "></td>

            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Cal.</td>
              <td className="border border-gray-300 p-2">17.5</td>
              <td className="border border-gray-300 p-2">2.5</td>
              <td className="border border-gray-300 p-2">11</td>
              <td className="border border-gray-300 p-2">+2000</td>
              <td className="border border-gray-300 p-2">17:32 H</td>
              <td className="border border-gray-300 p-2">-12:00 H</td>
              <td className="border border-gray-300 p-2">05:32 H</td>
              <td className="border border-gray-300 p-2">20</td>
              <td className="border border-gray-300 p-2 text-xs">Finalised by Rahul</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Final</td>
              <td className="border border-gray-300 p-2">23.5</td>
              <td className="border border-gray-300 p-2">3.5</td>
              <td className="border border-gray-300 p-2">4</td>
              <td className="border border-gray-300 p-2">+400</td>
              <td className="border border-gray-300 p-2">12:30 H</td>
              <td className="border border-gray-300 p-2">-19:00 H</td>
              <td className="border border-gray-300 p-2">-06:30 H</td>
              <td className="border border-gray-300 p-2">27</td>
              <td className="border border-gray-300 p-2 text-xs">
                Locked by Shriniwas
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceCard;
