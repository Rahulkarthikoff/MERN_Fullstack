// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Bell, Users, Briefcase, Calendar, CreditCard, PieChart, Shield, MessageSquare, LogOut } from "lucide-react";

// export default function Sidebar() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const navigate = useNavigate();
//     const handleLogout  = () => {
//       // Clear authentication data (localStorage/sessionStorage)
//       localStorage.removeItem("authToken");
//       //redirect to login page
//       navigate("/");
//     }
//   return (
//     <>
//     <div className={`bg-white shadow-lg p-5 transition-all ${isSidebarOpen ? "w-64" : "w-20"}`}>
//         <div className="flex items-center justify-between">
//           <h2 className={`text-xl font-bold text-blue-600 ${!isSidebarOpen && "hidden"}`}>Admin Panel</h2>
//           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-blue-600">☰</button>
//         </div>
//         <nav className="mt-5 space-y-3">
//           <Link to="/admin-dashboard/employee-management" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <Users className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Employee Management</span>
//           </Link>
//           <Link to="/admin-dashboard/department-management" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <Briefcase className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Department Management</span>
//           </Link>
//           <Link to="/admin-dashboard/attendance-leave" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <Calendar className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Attendance & Leave</span>
//           </Link>
//           <Link to="/admin-dashboard/payroll" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <CreditCard className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Payroll Management</span>
//           </Link>
//           <Link to="/admin-dashboard/reports" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <PieChart className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Reports & Analytics</span>
//           </Link>
//           <Link to="/admin-dashboard/access-control" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <Shield className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Role-Based Access</span>
//           </Link>
//           <Link to="/admin-dashboard/notifications" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//             <MessageSquare className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Notifications</span>
//           </Link>
//           <button onClick={handleLogout} className="w-full text-left flex items-center p-2 text-red-600 hover:bg-red-100 rounded-lg">
//           <LogOut className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Logout</span>
//         </button>
//         </nav>
//       </div>
//       </>

//   );
// }



import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users, Briefcase, Calendar, CreditCard, PieChart, Shield, MessageSquare, LogOut } from "lucide-react";

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Get role from localStorage (replace with global state if using Context/Redux)
        const userRole = localStorage.getItem("userRole");
        setRole(userRole);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userRole");
        navigate("/");
    };

    return (
        <div className={`bg-white shadow-lg p-5 transition-all ${isSidebarOpen ? "w-64" : "w-20"}`}>
            <div className="flex items-center justify-between">
                <h2 className={`text-xl font-bold text-blue-600 ${!isSidebarOpen && "hidden"}`}>HRMS</h2>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-blue-600">☰</button>
            </div>
            <nav className="mt-5 space-y-3">
                {/* Admin and Manager Both See This */}
                { (role === "Admin")&& 
                <><Link to="/admin-dashboard" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                    <Briefcase className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Dashboard</span>
                </Link></>}

                {/* Admin Only */}
                {role === "Admin" && (
                    <>
                        <Link to="/admin-dashboard/employee-management" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <Users className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Employee Management</span>
                        </Link>
                        <Link to="/admin-dashboard/department-management" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <Briefcase className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Department Management</span>
                        </Link>
                        <Link to="/admin-dashboard/access-control" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <Shield className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Role-Based Access</span>
                        </Link>
                    </>
                )}

                {(role === "Manager") && (
                  <>
                  <Link to="/manager-dashboard" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                  <Briefcase className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Dashboard</span>
              </Link>

              <Link to="/manager-dashboard/team-management" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
              <Users className="w-5 h-5 mr-3" /> 
              <span className={!isSidebarOpen ? "hidden" : ""}>Team Management</span>
                </Link>

                <Link to="/manager-dashboard/attendance-leave" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <Calendar className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Attendance & Leave</span>
                        </Link>
                        <Link to="/manager-dashboard/payroll" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <CreditCard className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Payroll Management</span>
                        </Link>
              </>
                )}


                {(role === "Employee") && (
                        <>
                    <Link to="/employee-dashboard" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                        <Briefcase className="w-5 h-5 mr-2" /> 
                        <span className={!isSidebarOpen ? "hidden" : ""}>Dashboard</span>
                    </Link>

                    <Link to="/employee-dashboard/profile" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                        <Users className="w-5 h-5 mr-2" /> 
                        <span className={!isSidebarOpen ? "hidden" : ""}>Profile</span>
                    </Link>
                    <Link to="/employee-dashboard/attendance" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                        <Calendar className="w-5 h-5 mr-2" /> 
                        <span className={!isSidebarOpen ? "hidden" : ""}>Attendance & Leave</span>
                    </Link>
                    <Link to="/employee-dashboard/payroll" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                        <CreditCard className="w-5 h-5 mr-2" /> 
                        <span className={!isSidebarOpen ? "hidden" : ""}>Payroll</span>
                    </Link>

                    <Link to="/employee-dashboard/reports" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <PieChart className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Performance & Reports</span>
                        </Link>

                        <Link to="/employee-dashboard/notifications" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <MessageSquare className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Notifications</span>
                        </Link>
                    </>
                )}


                {/* Admin & Manager Can See */}
                {(role === "Admin" || role === "Manager") && (
                    <>
                        
                        
                        <Link to="/reports" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <PieChart className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Reports & Analytics</span>
                        </Link>
                        <Link to="/notifications" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                            <MessageSquare className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Notifications</span>
                        </Link>
                    </>
                )}

                {/* Logout Button */}
                <button onClick={handleLogout} className="w-full text-left flex items-center p-2 text-red-600 hover:bg-red-100 rounded-lg">
                    <LogOut className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Logout</span>
                </button>
            </nav>
        </div>
    );
}

