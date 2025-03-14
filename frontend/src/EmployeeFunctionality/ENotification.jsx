import { useState } from "react";
import { ThumbsUp, Heart, Smile, Bell } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function ENotification() {
  const [notifications, setNotifications] = useState([
    { id: 1, sender: "Admin", message: "Company meeting at 3 PM. Please join on time.", reactions: {} },
    { id: 2, sender: "Manager", message: "Great job on the recent project! Keep it up! 🎉", reactions: {} },
  ]);

  const reactToMessage = (id, emoji) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, reactions: { ...notification.reactions, [emoji]: (notification.reactions[emoji] || 0) + 1 } } 
        : notification
    ));
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Bell className="w-6 h-6 mr-2 text-blue-600" /> Notifications
          </h2>

          {/* Notification List */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <div key={notification.id} className="border-b p-4 last:border-none">
                  <h3 className="text-lg font-semibold text-blue-600">{notification.sender}</h3>
                  <p className="text-gray-700 mt-1">{notification.message}</p>

                  {/* Reaction Buttons */}
                  <div className="flex space-x-3 mt-2">
                    <button onClick={() => reactToMessage(notification.id, "👍")} className="flex items-center text-gray-600 hover:text-blue-600">
                      <ThumbsUp className="w-5 h-5 mr-1" /> {notification.reactions["👍"] || 0}
                    </button>
                    <button onClick={() => reactToMessage(notification.id, "❤️")} className="flex items-center text-gray-600 hover:text-red-600">
                      <Heart className="w-5 h-5 mr-1" /> {notification.reactions["❤️"] || 0}
                    </button>
                    <button onClick={() => reactToMessage(notification.id, "😊")} className="flex items-center text-gray-600 hover:text-yellow-500">
                      <Smile className="w-5 h-5 mr-1" /> {notification.reactions["😊"] || 0}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No new notifications</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
