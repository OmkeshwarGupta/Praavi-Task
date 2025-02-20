import React from "react";
import E2 from "../assets/E2.jpeg";

const AttendanceCard = () => {
  // Table headers and data
  const headers = ["P", "A", "WO", "∑ Bonus/Fine", "OT", "LT", "OT+LT", "Final Att.", ""];
  const calData = ["17.5", "2.5", "11", "+2000", "17:32 H", "-12:00 H", "05:32 H", "20", "Finalised by Rahul"];
  const finalData = ["23.5", "3.5", "4", "+400", "12:30 H", "-19:00 H", "-06:30 H", "27", "Locked by Shriniwas"];

  const ProfileSection = () => (
    <div className="flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer">
      <img
        src={E2}
        alt="Employee"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-bold text-gray-900">Bhaskar Sharma</h3>
        <p className="text-[10px] text-gray-500">
          Sales Manager | Sales Dept.
        </p>
      </div>
    </div>
  );

  const DesktopView = () => (
    <div className="hidden lg:flex p-4 bg-white shadow-lg rounded-xl justify-between items-center w-full overflow-x-auto">
      <ProfileSection />
      <div className="ml-4">
        <table className="w-full border border-gray-300 text-sm text-center font-semibold">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2"></td>
              {headers.map((header, index) => (
                <td key={index} className="border border-gray-300 p-2">{header}</td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Cal.</td>
              {calData.map((data, index) => (
                <td key={index} className="border border-gray-300 p-2 text-xs">{data}</td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Final</td>
              {finalData.map((data, index) => (
                <td key={index} className="border border-gray-300 p-2 text-xs">{data}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const MobileView = () => (
    <div className="lg:hidden bg-white shadow-lg rounded-xl p-4 space-y-4">
      <ProfileSection />
      
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-2">Calculated Attendance</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Present</p>
              <p className="font-semibold">17.5</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Absent</p>
              <p className="font-semibold">2.5</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Work Orders</p>
              <p className="font-semibold">11</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Bonus/Fine</p>
              <p className="font-semibold text-green-600">+2000</p>
            </div>
            <div className="p-2 bg-gray-50 rounded col-span-2">
              <p className="text-xs text-gray-500">Time Balance</p>
              <p className="font-semibold">OT: 17:32 H | LT: -12:00 H</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Final Attendance</p>
              <p className="font-semibold">20</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Status</p>
              <p className="text-xs">Finalised by Rahul</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-2">Final Attendance</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Present</p>
              <p className="font-semibold">23.5</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Absent</p>
              <p className="font-semibold">3.5</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Work Orders</p>
              <p className="font-semibold">4</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Bonus/Fine</p>
              <p className="font-semibold text-green-600">+400</p>
            </div>
            <div className="p-2 bg-gray-50 rounded col-span-2">
              <p className="text-xs text-gray-500">Time Balance</p>
              <p className="font-semibold">OT: 12:30 H | LT: -19:00 H</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Final Attendance</p>
              <p className="font-semibold">27</p>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-xs text-gray-500">Status</p>
              <p className="text-xs">Locked by Shriniwas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  );
};

export default AttendanceCard;