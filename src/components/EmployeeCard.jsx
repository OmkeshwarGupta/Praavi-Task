import React from 'react'
import E1 from '../assets/E1.jpeg'
import E2 from '../assets/E2.jpeg'

const EmployeeCard = ({ name, position, department, isSelected, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 p-3 rounded-lg transition-colors w-[100%] cursor-pointer
      ${isSelected ? 'bg-[#e2e2ff]' : 'bg-[#f7f7fe] hover:bg-gray-50'}`}
  >
    <img
      src={E2}
      alt="Employee"
      className="w-10 h-10 rounded-full object-cover"
    />
    <div className="flex flex-col">
      <h3 className="text-xs font-medium text-gray-900">{name}</h3>
      <p className="text-[0.5rem] text-gray-500">
        {position} • {department}
      </p>
    </div>
  </div>
);

export default EmployeeCard