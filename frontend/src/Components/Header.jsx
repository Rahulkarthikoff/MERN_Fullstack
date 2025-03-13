import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Users, Briefcase, Calendar, CreditCard, PieChart, Shield, MessageSquare, LogOut } from "lucide-react";



export default function Header() {
    return (
        <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-600">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button className="relative text-blue-600">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">A</button>
            </div>
          </div>
        </header>
        </div>

    );
  }
  