import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function Notification() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "Approval", message: "Leave request approved for John Doe", date: "2025-03-12" },
    { id: 2, type: "Birthday", message: "Happy Birthday to Jane Smith!", date: "2025-03-14" },
  ]);

  const [newNotification, setNewNotification] = useState({ type: "", message: "" });

  const handleInputChange = (e) => {
    setNewNotification({ ...newNotification, [e.target.name]: e.target.value });
  };

  const handleSendNotification = () => {
    if (!newNotification.type || !newNotification.message) return;

    setNotifications([
      ...notifications,
      { id: Date.now(), type: newNotification.type, message: newNotification.message, date: new Date().toISOString().split("T")[0] },
    ]);

    setNewNotification({ type: "", message: "" });
  };

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Header Navbar */}
        <Header />

        {/* Page Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Notifications & Alerts</h2>

          {/* Notification Form */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Send Notification</h3>
            <select
              name="type"
              className="border p-2 rounded-lg w-full mb-2"
              value={newNotification.type}
              onChange={handleInputChange}
            >
              <option value="">Select Type</option>
              <option value="Approval">Approval</option>
              <option value="Update">Update</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Work Anniversary</option>
            </select>
            <input
              type="text"
              name="message"
              placeholder="Notification Message"
              className="border p-2 rounded-lg w-full mb-2"
              value={newNotification.message}
              onChange={handleInputChange}
            />
            <button onClick={handleSendNotification} className="mt-4 bg-blue-600 text-white p-2 rounded-lg w-full">
              Send Notification
            </button>
          </div>

          {/* Notifications List */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Recent Notifications</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Type</th>
                  <th className="p-2">Message</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notif) => (
                  <tr key={notif.id} className="border-t text-center">
                    <td className="p-2">{notif.type}</td>
                    <td className="p-2">{notif.message}</td>
                    <td className="p-2">{notif.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
