// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// function ProtectedRoute({ role, children }) {
//     const userRole = localStorage.getItem("userRole");
//     return userRole === role ? children : <Navigate to="/" />;
// }

// import Login from './Login.jsx';
// import AdminDashboard from './AdminDashboard.jsx';
// import ManagerDashboard from './ManagerDashboard.jsx';
// import EmployeeDashboard from './EmployeeDashBoard.jsx';
// import EmployeeManagement from './AdminFunctionality/EmployeeManagement.jsx';
// import DepartmentManagement from './AdminFunctionality/DepartmentManagement.jsx';
// import AttendanceAndLeave from './AdminFunctionality/AttendanceAndLeave.jsx';
// import PayrollManagement from './AdminFunctionality/PayrollManagement.jsx';
// import ReportsAndAnalytics from './AdminFunctionality/ReportsAndAnalytics.jsx';
// import RoleBasedAccess from './AdminFunctionality/RoleBasedAccess.jsx';
// import Notification from './AdminFunctionality/Notification.jsx';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
        
//         <Route path="/" element={<Login />} />
//         <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/manager-dashboard" element={<ManagerDashboard />} />
//         <Route path="/admin-dashboard/employee-management" element={<EmployeeManagement />} /> 
//         <Route path="/admin-dashboard/department-management" element={<DepartmentManagement />} />
//         <Route path="/admin-dashboard/attendance-leave" element={<AttendanceAndLeave />} />
//         <Route path="/admin-dashboard/payroll" element={<PayrollManagement />} />
//         <Route path="/admin-dashboard/reports" element={<ReportsAndAnalytics />} />
//         <Route path="/admin-dashboard/access-control" element={<RoleBasedAccess />} />
//         <Route path="/admin-dashboard/notifications" element={<Notification />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Login.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import ManagerDashboard from "./ManagerDashboard.jsx";
import EmployeeDashboard from "./EmployeeDashBoard.jsx";

// Admin Functionality Pages
import EmployeeManagement from "./AdminFunctionality/EmployeeManagement.jsx";
import DepartmentManagement from "./AdminFunctionality/DepartmentManagement.jsx";
import AttendanceAndLeave from "./AdminFunctionality/AttendanceAndLeave.jsx";
import PayrollManagement from "./AdminFunctionality/PayrollManagement.jsx";
import ReportsAndAnalytics from "./AdminFunctionality/ReportsAndAnalytics.jsx";
import RoleBasedAccess from "./AdminFunctionality/RoleBasedAccess.jsx";
import Notification from "./AdminFunctionality/Notification.jsx";
import TeamAndEmployeeManagement from "./ManagerFunctionality/TeamAndEmployeeManagement.jsx";
import MAttendanceAndLeave from "./ManagerFunctionality/MAttendanceAndLeave.jsx";
import MPayRollManagement from "./ManagerFunctionality/MPayRollManagement.jsx";
import EmployeeProfile from "./EmployeeFunctionality/EmployeeProfile.jsx";
import AttendanceAndLeaveTracking from "./EmployeeFunctionality/AttendanceAndLeaveTracking.jsx";
import PayrollAndSalary from "./EmployeeFunctionality/PayrollAndSalary.jsx";
import PerformanceAndReport from "./EmployeeFunctionality/PerformanceAndReport.jsx";
import ENotification from "./EmployeeFunctionality/ENotification.jsx";

// ✅ Protected Route Component
function ProtectedRoute({ allowedRoles, children }) {
  // const userRole = localStorage.getItem("userRole");

  // console.log("Checking Role:", userRole); // Debugging

  // if (!userRole || !allowedRoles.includes(userRole)) {
  //   return <Navigate to="/" />;
  // }

  return children;
}

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setUserRole(storedRole);
    console.log("User Role Updated:", storedRole); // Debugging
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Employee Dashboard */}
        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute allowedRoles={["Employee"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Dashboard (No Nested Routes) */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard/employee-management"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <EmployeeManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard/department-management"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <DepartmentManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance-leave"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
              <AttendanceAndLeave />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payroll"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
              <PayrollManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
              <ReportsAndAnalytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard/access-control"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <RoleBasedAccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
              <Notification />
            </ProtectedRoute>
          }
        />

        {/* Manager Dashboard */}
        <Route
          path="/manager-dashboard"
          element={
            <ProtectedRoute allowedRoles={["Manager"]}>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager-dashboard/team-management"
          element={
            <ProtectedRoute allowedRoles={["Manager"]}>
              <TeamAndEmployeeManagement />
            </ProtectedRoute>
          }
        />


        <Route
          path="/manager-dashboard/attendance-leave"
          element={
            <ProtectedRoute allowedRoles={["Manager"]}>
              <MAttendanceAndLeave />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager-dashboard/payroll"
          element={
            <ProtectedRoute allowedRoles={["Manager"]}>
              <MPayRollManagement />
            </ProtectedRoute>
          }
        />



        <Route
          path="/employee-dashboard/profile"
          element={
            <ProtectedRoute allowedRoles={["Employee"]}>
              <EmployeeProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-dashboard/attendance"
          element={
            <ProtectedRoute allowedRoles={["Employee"]}>
              <AttendanceAndLeaveTracking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-dashboard/payroll"
          element={
            <ProtectedRoute allowedRoles={["Employee"]}>
              <PayrollAndSalary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-dashboard/reports"
          element={
            <ProtectedRoute allowedRoles={["Employee"]}>
              <PerformanceAndReport />
            </ProtectedRoute>
          }
        />


        <Route
          path="/employee-dashboard/notifications"
          element={
            <ProtectedRoute allowedRoles={["Employee"]}>
              <ENotification />
            </ProtectedRoute>
          }
        />


        {/* Redirect unknown routes */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
