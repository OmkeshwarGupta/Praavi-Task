
import React, { useState } from 'react'
import EmployeeCard from './EmployeeCard'

const EmployeeList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const employees = Array(10).fill({
    name: "Bhaskar Sharma",
    position: "Sales Manager",
    department: "Sales Dept."
  });

  return (
    <div className="bg-white p-[10px] space-y-2 w-[90%] ml-6 rounded-[10px]">
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.name}
          position={employee.position}
          department={employee.department}
          isSelected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  );
};

export default EmployeeList;