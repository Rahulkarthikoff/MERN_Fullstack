import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function TeamAndEmployeeManagement() {
  // Dummy Data for Team Members (Replace with API data)
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "John Doe", role: "Software Engineer", performance: "Good", status: "Active" },
    { id: 2, name: "Jane Smith", role: "UI/UX Designer", performance: "Excellent", status: "Active" },
    { id: 3, name: "Michael Johnson", role: "QA Engineer", performance: "Average", status: "On Leave" },
    { id: 4, name: "Emily Davis", role: "Project Manager", performance: "Excellent", status: "Active" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOption, setSortOption] = useState("name");
  const [taskModal, setTaskModal] = useState({ open: false, employee: null });

  // Filter & Search Logic
  const filteredMembers = teamMembers
    .filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((member) => (filterStatus === "All" ? true : member.status === filterStatus))
    .sort((a, b) => (a[sortOption] > b[sortOption] ? 1 : -1));

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
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Team & Employee Management</h1>

          {/* Search & Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <input
              type="text"
              placeholder="Search employee..."
              className="p-2 border rounded-lg shadow-sm focus:outline-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
              className="p-2 border rounded-lg shadow-sm"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
            </select>

            <select
              className="p-2 border rounded-lg shadow-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="role">Sort by Role</option>
              <option value="performance">Sort by Performance</option>
            </select>
          </div>

          {/* Team Members Table */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Assigned Team Members</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100 text-left">
                  <th className="p-2">Name</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Performance</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="border-b">
                    <td className="p-2">{member.name}</td>
                    <td className="p-2">{member.role}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-lg text-sm ${
                        member.performance === "Excellent"
                          ? "bg-green-200 text-green-700"
                          : member.performance === "Good"
                          ? "bg-yellow-200 text-yellow-700"
                          : "bg-red-200 text-red-700"
                      }`}>
                        {member.performance}
                      </span>
                    </td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-lg text-sm ${
                        member.status === "Active"
                          ? "bg-green-200 text-green-700"
                          : "bg-red-200 text-red-700"
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="p-2">
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={() => setTaskModal({ open: true, employee: member })}
                      >
                        Assign Task
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Task Assignment Modal */}
          {taskModal.open && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Assign Task</h2>
                <p className="text-gray-600 mb-2">Assigning to: <strong>{taskModal.employee.name}</strong></p>
                <textarea
                  className="w-full p-2 border rounded-lg shadow-sm"
                  rows="3"
                  placeholder="Enter task details..."
                ></textarea>
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                    onClick={() => setTaskModal({ open: false, employee: null })}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
