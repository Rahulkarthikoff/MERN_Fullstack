// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Bell, Users, Briefcase, Calendar, CreditCard, PieChart, Shield, MessageSquare, LogOut } from "lucide-react";

// export default function AdminDashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen bg-blue-50">
//       {/* Sidebar */}
//       <div className={`bg-white shadow-lg p-5 transition-all ${isSidebarOpen ? "w-64" : "w-20"}`}>
//         <div className="flex items-center justify-between">
//           <h2 className={`text-xl font-bold text-blue-600 ${!isSidebarOpen && "hidden"}`}>Admin Panel</h2>
//           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-blue-600">☰</button>
//         </div>
//         <nav className="mt-5 space-y-3">
//           <Link to="/admin-dashboard/employee-management" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <Users className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Employee Management</span>
//           </Link>
//           <Link to="/department-management" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <Briefcase className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Department Management</span>
//           </Link>
//           <Link to="/attendance-leave" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <Calendar className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Attendance & Leave</span>
//           </Link>
//           <Link to="/payroll" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <CreditCard className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Payroll Management</span>
//           </Link>
//           <Link to="/reports" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <PieChart className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Reports & Analytics</span>
//           </Link>
//           <Link to="/access-control" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <Shield className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Role-Based Access</span>
//           </Link>
//           <Link to="/notifications" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <MessageSquare className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Notifications</span>
//           </Link>
//           <a href="#" className="flex items-center p-2 text-red-600 hover:bg-red-100 rounded-lg">
//             <LogOut className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Logout</span>
//           </a>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center">
//           <h1 className="text-xl font-semibold text-blue-600">Admin Dashboard</h1>
//           <div className="flex space-x-4">
//             <button className="relative text-blue-600">
//               <Bell className="w-6 h-6" />
//               <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
//             </button>
//             <div className="relative">
//               <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">A</button>
//             </div>
//           </div>
//         </header>

//         {/* Overview Cards */}
//         <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
//             <Users className="w-12 h-12 text-blue-500 mr-4" />
//             <div>
//               <h3 className="text-lg font-semibold">Total Employees</h3>
//               <p className="text-gray-600 text-xl">120</p>
//             </div>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
//             <Briefcase className="w-12 h-12 text-green-500 mr-4" />
//             <div>
//               <h3 className="text-lg font-semibold">Total Departments</h3>
//               <p className="text-gray-600 text-xl">8</p>
//             </div>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
//             <Users className="w-12 h-12 text-purple-500 mr-4" />
//             <div>
//               <h3 className="text-lg font-semibold">Active Employees</h3>
//               <p className="text-gray-600 text-xl">95</p>
//             </div>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
//             <Calendar className="w-12 h-12 text-orange-500 mr-4" />
//             <div>
//               <h3 className="text-lg font-semibold">Employees on Leave</h3>
//               <p className="text-gray-600 text-xl">5</p>
//             </div>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
//             <CreditCard className="w-12 h-12 text-red-500 mr-4" />
//             <div>
//               <h3 className="text-lg font-semibold">Payroll Processed</h3>
//               <p className="text-gray-600 text-xl">$150,000</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bell, Users, Briefcase, Calendar, CreditCard, PieChart, Shield, MessageSquare, LogOut
} from "lucide-react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./components/Sidebar";


export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation(); // Get current route

  const menuItems = [
    { name: "Employee Management", path: "/admin-dashboard/employee-management", icon: <Users /> },
    { name: "Department Management", path: "/department-management", icon: <Briefcase /> },
    { name: "Attendance & Leave", path: "/attendance-leave", icon: <Calendar /> },
    { name: "Payroll Management", path: "/payroll", icon: <CreditCard /> },
    { name: "Reports & Analytics", path: "/reports", icon: <PieChart /> },
    { name: "Role-Based Access", path: "/access-control", icon: <Shield /> },
    { name: "Notifications", path: "/notifications", icon: <MessageSquare /> },
  ];

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar />
      {/* <div className={`bg-white shadow-lg p-5 transition-all ${isSidebarOpen ? "w-64" : "w-16"} duration-300`}>
        <div className="flex items-center justify-between">
          <h2 className={`text-xl font-bold text-blue-600 transition-opacity ${!isSidebarOpen && "opacity-0"}`}>
            Admin Panel
          </h2>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-blue-600">
            ☰
          </button>
        </div>
        <nav className="mt-5 space-y-3">
          {menuItems.map(({ name, path, icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center p-2 rounded-lg transition-colors ${
                location.pathname === path ? "bg-blue-200 text-blue-800" : "text-blue-600 hover:bg-blue-100"
              }`}
            >
              <div className="w-6 h-6">{icon}</div>
              <span className={`ml-3 transition-opacity ${!isSidebarOpen && "opacity-0"}`}>{name}</span>
            </Link>
          ))}
          <button className="flex items-center p-2 text-red-600 hover:bg-red-100 rounded-lg">
            <LogOut className="w-5 h-5" />
            <span className={`ml-3 transition-opacity ${!isSidebarOpen && "opacity-0"}`}>Logout</span>
          </button>
        </nav>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        {/* <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-600">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button className="relative text-blue-600">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">A</button>
            </div>
          </div>
        </header> */}
        <Header />

        {/* Overview Cards */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Total Employees", count: 120, icon: <Users className="w-12 h-12 text-blue-500" /> },
            { label: "Total Departments", count: 8, icon: <Briefcase className="w-12 h-12 text-green-500" /> },
            { label: "Active Employees", count: 95, icon: <Users className="w-12 h-12 text-purple-500" /> },
            { label: "Employees on Leave", count: 5, icon: <Calendar className="w-12 h-12 text-orange-500" /> },
            { label: "Payroll Processed", count: "$150,000", icon: <CreditCard className="w-12 h-12 text-red-500" /> },
          ].map(({ label, count, icon }) => (
            <div key={label} className="bg-white p-6 shadow-lg rounded-lg flex items-center">
              {icon}
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{label}</h3>
                <p className="text-gray-600 text-xl">{count}</p>
              </div>
            </div>
          ))}
        </main>
        <div className="p-6">
         {/* <Outlet /> */}
          </div>
      </div>
    </div>
  );
}
