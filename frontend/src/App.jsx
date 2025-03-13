import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import ManagerDashboard from './ManagerDashboard.jsx';
import EmployeeDashboard from './EmployeeDashBoard.jsx';
import EmployeeManagement from './AdminFunctionality/EmployeeManagement.jsx';
import DepartmentManagement from './AdminFunctionality/DepartmentManagement.jsx';
import AttendanceAndLeave from './AdminFunctionality/AttendanceAndLeave.jsx';
import PayrollManagement from './AdminFunctionality/PayrollManagement.jsx';
import ReportsAndAnalytics from './AdminFunctionality/ReportsAndAnalytics.jsx';
import RoleBasedAccess from './AdminFunctionality/RoleBasedAccess.jsx';
import Notification from './AdminFunctionality/Notification.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/admin-dashboard/employee-management" element={<EmployeeManagement />} /> 
        <Route path="/admin-dashboard/department-management" element={<DepartmentManagement />} />
        <Route path="/admin-dashboard/attendance-leave" element={<AttendanceAndLeave />} />
        <Route path="/admin-dashboard/payroll" element={<PayrollManagement />} />
        <Route path="/admin-dashboard/reports" element={<ReportsAndAnalytics />} />
        <Route path="/admin-dashboard/access-control" element={<RoleBasedAccess />} />
        <Route path="/admin-dashboard/notifications" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
