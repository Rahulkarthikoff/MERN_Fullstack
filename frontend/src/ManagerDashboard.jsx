import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./Components/Header";


export default function ManagerDashboard() {
  // Dummy data for demonstration (Replace with API data)
  const [teamStats, setTeamStats] = useState({
    totalMembers: 12,
    attendanceRate: "85%",
    pendingLeaveRequests: 3,
  });

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, type: "New Joiner", details: "John Doe joined Sales team." },
    { id: 2, type: "Leave Approved", details: "Jane Smith's leave request approved." },
    { id: 3, type: "Performance Update", details: "Alex Johnson received an 'Excellent' rating." },
  ]);

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Header />

        {/* Content Area */}
        <main className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h1>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700">Total Team Members</h2>
              <p className="text-2xl font-bold text-blue-600">{teamStats.totalMembers}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700">Attendance Rate</h2>
              <p className="text-2xl font-bold text-green-600">{teamStats.attendanceRate}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700">Pending Leave Requests</h2>
              <p className="text-2xl font-bold text-red-600">{teamStats.pendingLeaveRequests}</p>
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-blue-600">
              Employee Records
            </button>
            <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-blue-600">
              Payroll Reports
            </button>
            <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-blue-600">
              Approvals
            </button>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activities</h2>
            <ul className="space-y-3">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="border-l-4 border-blue-500 pl-3 text-gray-700">
                  <span className="font-semibold">{activity.type}:</span> {activity.details}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
