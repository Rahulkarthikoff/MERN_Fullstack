import { useState } from "react";
import { Bell, User, LogOut, Briefcase } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./Components/Header";

export default function EmployeeDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-screen bg-blue-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Header />

        {/* Content Area */}
        <main className="p-6"> 
          <p className="text-gray-600">Welcome to your dashboard!</p>
        </main>
      </div>
    </div>
  );
}
