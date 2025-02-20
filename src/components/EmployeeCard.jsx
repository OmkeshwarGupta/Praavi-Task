import React from 'react'
import E1 from '../assets/E1.jpeg'
import E2 from '../assets/E2.jpeg'

const EmployeeCard = ({ name, position, department, isSelected, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-colors w-full cursor-pointer
      ${isSelected ? 'bg-[#e2e2ff]' : 'bg-[#f7f7fe] hover:bg-gray-50'}`}
  >
    <img
      src={E2}
      alt="Employee"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
    />
    <div className="flex flex-col min-w-0">
      <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">{name}</h3>
      <p className="text-[0.5rem] sm:text-xs text-gray-500 truncate">
        {position} • {department}
      </p>
    </div>
  </div>
);

export default EmployeeCard