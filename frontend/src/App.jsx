import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import RoleSelection from './RoleSelection.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import ManagerDashboard from './ManagerDashboard.jsx';
import EmployeeDashboard from './EmployeeDashBoard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/select-role" element={<RoleSelection />} /> */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
