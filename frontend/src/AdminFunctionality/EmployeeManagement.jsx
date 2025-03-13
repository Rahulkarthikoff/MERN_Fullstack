// import { useState } from "react";
// import { Search, Edit, Trash2, PlusCircle } from "lucide-react";

// export default function EmployeeManagement() {
//   const [employees, setEmployees] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com", department: "IT", role: "Admin", joiningDate: "2023-01-10", status: "Active" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", department: "HR", role: "Manager", joiningDate: "2022-05-15", status: "Inactive" }
//   ]);
//   const [search, setSearch] = useState("");
//   const [newEmployee, setNewEmployee] = useState({ name: "", email: "", department: "", role: "", joiningDate: "", status: "Active" });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);

//   const handleSearch = (e) => setSearch(e.target.value);

//   const handleInputChange = (e) => {
//     setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
//   };

//   const handleAddEmployee = () => {
//     if (!newEmployee.name || !newEmployee.email) return;
//     if (isEditing) {
//       setEmployees(employees.map(emp => emp.id === editId ? { ...newEmployee, id: editId } : emp));
//       setIsEditing(false);
//       setEditId(null);
//     } else {
//       setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
//     }
//     setNewEmployee({ name: "", email: "", department: "", role: "", joiningDate: "", status: "Active" });
//   };

//   const handleEditEmployee = (employee) => {
//     setNewEmployee(employee);
//     setIsEditing(true);
//     setEditId(employee.id);
//   };

//   const handleDeleteEmployee = (id) => {
//     setEmployees(employees.filter(emp => emp.id !== id));
//   };

//   const filteredEmployees = employees.filter(emp =>
//     emp.name.toLowerCase().includes(search.toLowerCase()) ||
//     emp.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Employee Management</h2>
      
//       {/* Search Bar */}
//       <div className="flex mb-4">
//         <input type="text" placeholder="Search employees..." className="border p-2 rounded-lg w-full" value={search} onChange={handleSearch} />
//         <Search className="w-6 h-6 ml-2 text-gray-600" />
//       </div>
      
//       {/* Employee Form */}
//       <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//         <h3 className="text-lg font-semibold mb-2">{isEditing ? "Edit Employee" : "Add Employee"}</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <input type="text" name="name" placeholder="Name" className="border p-2 rounded-lg" value={newEmployee.name} onChange={handleInputChange} />
//           <input type="email" name="email" placeholder="Email" className="border p-2 rounded-lg" value={newEmployee.email} onChange={handleInputChange} />
//           <input type="text" name="department" placeholder="Department" className="border p-2 rounded-lg" value={newEmployee.department} onChange={handleInputChange} />
//           <select name="role" className="border p-2 rounded-lg" value={newEmployee.role} onChange={handleInputChange}>
//             <option value="">Select Role</option>
//             <option value="Admin">Admin</option>
//             <option value="Manager">Manager</option>
//             <option value="Employee">Employee</option>
//           </select>
//           <input type="date" name="joiningDate" className="border p-2 rounded-lg" value={newEmployee.joiningDate} onChange={handleInputChange} />
//           <select name="status" className="border p-2 rounded-lg" value={newEmployee.status} onChange={handleInputChange}>
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//         <button onClick={handleAddEmployee} className="mt-4 bg-blue-600 text-white p-2 rounded-lg w-full flex justify-center items-center">
//           <PlusCircle className="w-5 h-5 mr-2" /> {isEditing ? "Update Employee" : "Add Employee"}
//         </button>
//       </div>

//       {/* Employee List */}
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold mb-2">Employee List</h3>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2">Name</th>
//               <th className="p-2">Email</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Role</th>
//               <th className="p-2">Joining Date</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredEmployees.map(emp => (
//               <tr key={emp.id} className="border-t">
//                 <td className="p-2">{emp.name}</td>
//                 <td className="p-2">{emp.email}</td>
//                 <td className="p-2">{emp.department}</td>
//                 <td className="p-2">{emp.role}</td>
//                 <td className="p-2">{emp.joiningDate}</td>
//                 <td className={`p-2 ${emp.status === "Active" ? "text-green-600" : "text-red-600"}`}>{emp.status}</td>
//                 <td className="p-2 flex space-x-2">
//                   <button onClick={() => handleEditEmployee(emp)} className="text-blue-600"><Edit className="w-5 h-5" /></button>
//                   <button onClick={() => handleDeleteEmployee(emp.id)} className="text-red-600"><Trash2 className="w-5 h-5" /></button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Search, Edit, Trash2, PlusCircle } from "lucide-react";

import Header from "../Components/Header";
import Sidebar from "../components/Sidebar";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", department: "IT", role: "Admin", joiningDate: "2023-01-10", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", department: "HR", role: "Manager", joiningDate: "2022-05-15", status: "Inactive" }
  ]);
  const [search, setSearch] = useState("");
  const [newEmployee, setNewEmployee] = useState({ name: "", email: "", department: "", role: "", joiningDate: "", status: "Active" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleInputChange = (e) => setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });

  const handleAddEmployee = () => {
    if (!newEmployee.name || !newEmployee.email) return;
    if (isEditing) {
      setEmployees(employees.map(emp => emp.id === editId ? { ...newEmployee, id: editId } : emp));
      setIsEditing(false);
      setEditId(null);
    } else {
      setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    }
    setNewEmployee({ name: "", email: "", department: "", role: "", joiningDate: "", status: "Active" });
  };

  const handleEditEmployee = (employee) => {
    setNewEmployee(employee);
    setIsEditing(true);
    setEditId(employee.id);
  };

  const handleDeleteEmployee = (id) => setEmployees(employees.filter(emp => emp.id !== id));

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Employee Management</h2>
          
          {/* Search Bar */}
          <div className="flex mb-4">
            <input type="text" placeholder="Search employees..." className="border p-2 rounded-lg w-full" value={search} onChange={handleSearch} />
            <Search className="w-6 h-6 ml-2 text-gray-600" />
          </div>
          
          {/* Employee Form */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">{isEditing ? "Edit Employee" : "Add Employee"}</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" className="border p-2 rounded-lg" value={newEmployee.name} onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Email" className="border p-2 rounded-lg" value={newEmployee.email} onChange={handleInputChange} />
              <input type="text" name="department" placeholder="Department" className="border p-2 rounded-lg" value={newEmployee.department} onChange={handleInputChange} />
              <select name="role" className="border p-2 rounded-lg" value={newEmployee.role} onChange={handleInputChange}>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
              <input type="date" name="joiningDate" className="border p-2 rounded-lg" value={newEmployee.joiningDate} onChange={handleInputChange} />
              <select name="status" className="border p-2 rounded-lg" value={newEmployee.status} onChange={handleInputChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button onClick={handleAddEmployee} className="mt-4 bg-blue-600 text-white p-2 rounded-lg w-full flex justify-center items-center">
              <PlusCircle className="w-5 h-5 mr-2" /> {isEditing ? "Update Employee" : "Add Employee"}
            </button>
          </div>

          {/* Employee List */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Employee List</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Joining Date</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map(emp => (
                  <tr key={emp.id} className="border-t">
                    <td className="p-2">{emp.name}</td>
                    <td className="p-2">{emp.email}</td>
                    <td className="p-2">{emp.department}</td>
                    <td className="p-2">{emp.role}</td>
                    <td className="p-2">{emp.joiningDate}</td>
                    <td className={`p-2 ${emp.status === "Active" ? "text-green-600" : "text-red-600"}`}>{emp.status}</td>
                    <td className="p-2 flex space-x-2">
                      <button onClick={() => handleEditEmployee(emp)} className="text-blue-600"><Edit className="w-5 h-5" /></button>
                      <button onClick={() => handleDeleteEmployee(emp.id)} className="text-red-600"><Trash2 className="w-5 h-5" /></button>
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
