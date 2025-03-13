import { useState } from "react";
import { PlusCircle, Trash2, Users } from "lucide-react";
import Header from "../Components/Header";
import Sidebar from "../components/Sidebar";


export default function DepartmentManagement() {
  const [departments, setDepartments] = useState([
    { id: 1, name: "HR", employees: ["John Doe", "Jane Smith"] },
    { id: 2, name: "IT", employees: ["Alice Johnson", "Bob Brown"] },
    { id: 3, name: "Sales", employees: ["Charlie Davis"] },
    { id: 4, name: "Marketing", employees: [] },
  ]);

  const [newDepartment, setNewDepartment] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleAddDepartment = () => {
    if (!newDepartment.trim()) return;
    setDepartments([...departments, { id: Date.now(), name: newDepartment, employees: [] }]);
    setNewDepartment("");
  };

  const handleDeleteDepartment = (id) => {
    setDepartments(departments.filter(dep => dep.id !== id));
  };

  const handleAssignEmployee = () => {
    if (!employeeName.trim() || !selectedDepartment) return;
    setDepartments(departments.map(dep =>
      dep.name === selectedDepartment ? { ...dep, employees: [...dep.employees, employeeName] } : dep
    ));
    setEmployeeName("");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Department Management</h2>

          {/* Add Department Section */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Create New Department</h3>
            <div className="flex space-x-4">
              <input 
                type="text" 
                placeholder="Department Name" 
                className="border p-2 rounded-lg flex-1" 
                value={newDepartment} 
                onChange={(e) => setNewDepartment(e.target.value)}
              />
              <button onClick={handleAddDepartment} className="bg-blue-600 text-white p-2 rounded-lg flex items-center">
                <PlusCircle className="w-5 h-5 mr-2" /> Add
              </button>
            </div>
          </div>

          {/* Assign Employee Section */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Assign Employee to Department</h3>
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Employee Name" 
                className="border p-2 rounded-lg" 
                value={employeeName} 
                onChange={(e) => setEmployeeName(e.target.value)}
              />
              <select 
                className="border p-2 rounded-lg" 
                value={selectedDepartment} 
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                {departments.map(dep => (
                  <option key={dep.id} value={dep.name}>{dep.name}</option>
                ))}
              </select>
            </div>
            <button onClick={handleAssignEmployee} className="mt-4 bg-green-600 text-white p-2 rounded-lg w-full flex justify-center items-center">
              <Users className="w-5 h-5 mr-2" /> Assign Employee
            </button>
          </div>

          {/* Department List */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Department List</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Department</th>
                  <th className="p-2">Employees</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map(dep => (
                  <tr key={dep.id} className="border-t">
                    <td className="p-2">{dep.name}</td>
                    <td className="p-2">{dep.employees.length > 0 ? dep.employees.join(", ") : "No employees assigned"}</td>
                    <td className="p-2">
                      <button onClick={() => handleDeleteDepartment(dep.id)} className="text-red-600">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
