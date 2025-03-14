import { useState } from "react";
import { CalendarCheck, History, ClipboardList, CheckCircle } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function AttendanceAndLeaveTracking() {
  const [attendance, setAttendance] = useState([]);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [leaveType, setLeaveType] = useState("");

  const handleCheckIn = () => {
    if (!isCheckedIn) {
      setAttendance([...attendance, { date: new Date().toLocaleDateString(), status: "Checked In" }]);
      setIsCheckedIn(true);
    }
  };

  const handleCheckOut = () => {
    if (isCheckedIn) {
      setAttendance(attendance.map(item =>
        item.date === new Date().toLocaleDateString() ? { ...item, status: "Checked Out" } : item
      ));
      setIsCheckedIn(false);
    }
  };

  const applyLeave = () => {
    if (leaveType) {
      setLeaves([...leaves, { type: leaveType, date: new Date().toLocaleDateString(), status: "Pending" }]);
      setLeaveType("");
      alert("Leave request submitted!");
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Attendance & Leave Tracking</h2>

          {/* Mark Attendance */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Mark Attendance</h3>
            <div className="flex space-x-4">
              <button onClick={handleCheckIn} disabled={isCheckedIn} className={`px-4 py-2 rounded-lg text-white ${isCheckedIn ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}>
                Check-In
              </button>
              <button onClick={handleCheckOut} disabled={!isCheckedIn} className={`px-4 py-2 rounded-lg text-white ${!isCheckedIn ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}>
                Check-Out
              </button>
            </div>
          </div>

          {/* Attendance History */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Attendance History</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendance.length > 0 ? (
                  attendance.map((entry, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2">{entry.date}</td>
                      <td className={`p-2 ${entry.status.includes("Out") ? "text-green-600" : "text-yellow-600"}`}>{entry.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="p-2 text-center" colSpan="2">No attendance records found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Apply for Leave */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Apply for Leave</h3>
            <div className="flex space-x-4">
              <select className="border p-2 rounded-lg w-full" value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
                <option value="">Select Leave Type</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Vacation">Vacation</option>
              </select>
              <button onClick={applyLeave} disabled={!leaveType} className={`px-4 py-2 rounded-lg text-white ${!leaveType ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>
                Apply Leave
              </button>
            </div>

            {/* Leave Requests */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Leave Requests</h4>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2">Date</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leaves.length > 0 ? (
                    leaves.map((leave, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2">{leave.date}</td>
                        <td className="p-2">{leave.type}</td>
                        <td className="p-2 text-yellow-600">{leave.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="p-2 text-center" colSpan="3">No leave requests found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
