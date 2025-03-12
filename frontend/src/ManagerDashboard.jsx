import { useState } from "react";
import { Bell, User, LogOut, Briefcase } from "lucide-react";

export default function ManagerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg p-5 transition-all ${isSidebarOpen ? "w-64" : "w-20"}`}>
        <div className="flex items-center justify-between">
          <h2 className={`text-xl font-bold text-blue-600 ${!isSidebarOpen && "hidden"}`}>Dashboard</h2>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-blue-600">☰</button>
        </div>
        <nav className="mt-5 space-y-3">
          <a href="#" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
            <Briefcase className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Department</span>
          </a>
          <a href="#" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
            <User className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Profile</span>
          </a>
          <a href="#" className="flex items-center p-2 text-red-600 hover:bg-red-100 rounded-lg">
            <LogOut className="w-5 h-5 mr-3" /> <span className={!isSidebarOpen ? "hidden" : ""}>Logout</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-600">Manager Dashboard</h1>
          <div className="flex space-x-4">
            <button className="relative text-blue-600">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">U</button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6"> 
          <p className="text-gray-600">Welcome to your dashboard!</p>
        </main>
      </div>
    </div>
  );
}
