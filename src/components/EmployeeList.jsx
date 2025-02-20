import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const employees = Array(10).fill({
    name: "Bhaskar Sharma",
    position: "Sales Manager",
    department: "Sales Dept."
  });

  return (
    <div className="bg-white rounded-xl shadow-sm
      w-full mx-auto lg:w-[90%] lg:mx-0
      max-h-[calc(100vh-200px)] lg:max-h-[600px]
      overflow-y-auto">
      
      

      {/* Employee List */}
      <div className="p-2 space-y-2">
        {employees.map((employee, index) => (
          <div key={index} className="hover:bg-gray-50 transition-colors">
            <EmployeeCard
              name={employee.name}
              position={employee.position}
              department={employee.department}
              isSelected={selectedIndex === index}
              onClick={() => {
                setSelectedIndex(index);
                // On mobile, you might want to trigger navigation to details
                if (window.innerWidth < 1024) {
                  // You can emit an event or use a callback prop here
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {employees.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          <p>No employees found</p>
        </div>
      )}

      
    </div>
  );
};

export default EmployeeList;