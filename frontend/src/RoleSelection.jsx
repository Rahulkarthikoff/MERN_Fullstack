import { useNavigate } from 'react-router-dom';

export default function RoleSelection() {
  const navigate = useNavigate();

  const roles = [
    { name: "Admin", path: "/admin-dashboard", color: "bg-red-500" },
    { name: "Manager", path: "/manager-dashboard", color: "bg-green-500" },
    { name: "Employee", path: "/employee-dashboard", color: "bg-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Select Your Role</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role) => (
          <div
            key={role.name}
            onClick={() => navigate(role.path)}
            className={`p-8 rounded-xl shadow-lg text-white text-center text-2xl font-semibold cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl ${role.color}`}
          >
            {role.name}
          </div>
        ))}
      </div>
    </div>
  );
}
