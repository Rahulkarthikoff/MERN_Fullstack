import { useState } from "react";
import { CheckCircle, XCircle, FileText } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function AttendanceAndLeave() {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: "John Doe", date: "2025-03-10", status: "Present" },
    { id: 2, name: "Jane Smith", date: "2025-03-10", status: "Absent" },
    { id: 3, name: "Alice Johnson", date: "2025-03-10", status: "Present" }
  ]);

  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: "Bob Brown", date: "2025-03-15", reason: "Medical", status: "Pending" },
    { id: 2, name: "Charlie Davis", date: "2025-03-20", reason: "Vacation", status: "Pending" }
  ]);

  const [leavePolicy, setLeavePolicy] = useState("");

  const handleApproveLeave = (id) => {
    setLeaveRequests(leaveRequests.map(req =>
      req.id === id ? { ...req, status: "Approved" } : req
    ));
  };

  const handleRejectLeave = (id) => {
    setLeaveRequests(leaveRequests.map(req =>
      req.id === id ? { ...req, status: "Rejected" } : req
    ));
  };

  const generateReport = () => {
    alert("Attendance report generated successfully!");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Attendance & Leave Management</h2>

          {/* Daily Attendance Records */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Daily Attendance Records</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Employee</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map(record => (
                  <tr key={record.id} className="border-t">
                    <td className="p-2">{record.name}</td>
                    <td className="p-2">{record.date}</td>
                    <td className={`p-2 ${record.status === "Present" ? "text-green-600" : "text-red-600"}`}>
                      {record.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Leave Requests Section */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Leave Requests</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Employee</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Reason</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map(req => (
                  <tr key={req.id} className="border-t">
                    <td className="p-2">{req.name}</td>
                    <td className="p-2">{req.date}</td>
                    <td className="p-2">{req.reason}</td>
                    <td className={`p-2 ${req.status === "Approved" ? "text-green-600" : req.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>
                      {req.status}
                    </td>
                    <td className="p-2 flex space-x-2">
                      {req.status === "Pending" && (
                        <>
                          <button onClick={() => handleApproveLeave(req.id)} className="text-green-600">
                            <CheckCircle className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleRejectLeave(req.id)} className="text-red-600">
                            <XCircle className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Leave Policy Section */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Set Leave Policies</h3>
            <textarea
              className="border p-2 rounded-lg w-full"
              rows="3"
              placeholder="Enter leave policy details..."
              value={leavePolicy}
              onChange={(e) => setLeavePolicy(e.target.value)}
            ></textarea>
          </div>

          {/* Generate Attendance Report */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Generate Reports</h3>
            <button onClick={generateReport} className="mt-4 bg-blue-600 text-white p-2 rounded-lg w-full flex justify-center items-center">
              <FileText className="w-5 h-5 mr-2" /> Generate Attendance Report
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
