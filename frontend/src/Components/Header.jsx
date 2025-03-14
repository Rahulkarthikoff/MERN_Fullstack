// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Bell, Users, Briefcase, Calendar, CreditCard, PieChart, Shield, MessageSquare, LogOut } from "lucide-react";



// export default function Header() {
//     return (
//         <div className="flex-1 flex flex-col">
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
//         </div>

//     );
//   }
  
import { useState, useEffect } from "react";
import { Bell, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [role, setRole] = useState(null);
    const [username, setUsername] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userRole = localStorage.getItem("userRole");
        const storedUsername = localStorage.getItem("username"); 
        setRole(userRole);
        setUsername(storedUsername);
    }, []);

    // Navigate to notification page based on role
    const handleNotificationClick = () => {
        if (role === "Admin") navigate("/admin-dashboard/notification");
        else if (role === "Manager") navigate("/manager-dashboard/notification");
        else navigate("/employee-dashboard/notification");
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center relative">
            <h1 className="text-xl font-semibold text-blue-600">
                {role === "Admin" ? "Admin Dashboard" : role === "Manager" ? "Manager Dashboard" : "Employee Dashboard"}
            </h1>
            <div className="flex space-x-4 items-center">
                {/* Notification Button */}
                <button 
                    onClick={handleNotificationClick} 
                    className="relative flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-300 text-blue-600 hover:text-blue-900 rounded-lg transition duration-300"
                >
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
                </button>
                
                {/* Profile Dropdown */}
                <div className="relative">
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg hover:bg-blue-800 transition duration-300 text-lg font-semibold"
                    >
                        {username ? username.charAt(0).toUpperCase() : "U"}
                    </button>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            <ul className="py-2">
                                <li 
                                    onClick={() => navigate("/profile")} 
                                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                >
                                    <User className="w-4 h-4 mr-2" /> View Profile
                                </li>
                                <li 
                                    onClick={() => navigate("/settings")} 
                                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                >
                                    <Settings className="w-4 h-4 mr-2" /> Settings
                                </li>
                                <li 
                                    onClick={handleLogout} 
                                    className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                                >
                                    <LogOut className="w-4 h-4 mr-2" /> Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
