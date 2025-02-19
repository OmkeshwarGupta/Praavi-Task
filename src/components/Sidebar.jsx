import React, { useState } from "react";
import Person from "../assets/person.jpeg";
import { TbCalendarEvent } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { IoPower } from "react-icons/io5";

const Sidebar = () => {
  const [selected, setSelected] = useState("calendar");

  const menuItems = [
    { id: "calendar", icon: <TbCalendarEvent size={25} />, label: "Calendar" },
    { id: "group", icon: <HiOutlineUserGroup size={25} />, label: "Group" },
    { id: "wallet", icon: <IoWalletOutline size={25} />, label: "Wallet" },
  ];

  return (
    <div className="w-24 bg-[#323FDD] h-full flex flex-col items-center py-6 relative">
      <p className="text-[#FFFFFF] text-2xl font-normal">P</p>
      <div className="border-[1.5px] border-[#FFFFFF] opacity-20 w-full my-4"></div>

      {/* Profile Image */}
      <img src={Person} alt="User" className="w-10 h-10 rounded-full" />
      <div className="border-[1.5px] border-[#FFFFFF] opacity-20 w-full my-4"></div>

      {/* Menu Items */}
      <div className="flex flex-col items-center gap-8 mt-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`p-3 rounded-lg transition-all ${
              selected === item.id ? "bg-white/20" : "bg-transparent"
            }`}
            onClick={() => setSelected(item.id)}
          >
            <div className="text-white cursor-pointer">{item.icon}</div>
          </div>
        ))}
      </div>
      <div className="absolute top-[910px]">
        <IoPower size={25} className="text-white mt-8 cursor-pointer" />
      </div>

      <div className="absolute w-[99.12px] h-[99.12px] -top-13 left-[-12px] rounded-full rotate-[70deg] bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute w-[67px] h-[67px] top-[670.56px] rounded-full -left-6 rotate-90 bg-gradient-to-b from-white/10 to-transparent"></div>
    </div>
  );
};

export default Sidebar;
