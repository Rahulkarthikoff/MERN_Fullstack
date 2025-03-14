import { useState } from "react";
import { FileText, BarChart3, Award } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function PerformanceAndReport() {
  const [employees] = useState([
    { id: 1, name: "John Doe", rating: 4.5, feedback: "Excellent work ethic!", promotions: 2, appraisalDue: "June 2025" },
    { id: 2, name: "Jane Smith", rating: 4.2, feedback: "Consistently meets expectations", promotions: 1, appraisalDue: "December 2024" },
  ]);

  const generateReport = (type) => {
    alert(`${type} Report Generated Successfully!`);
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Performance & Reports</h2>

          {/* Employee Performance Reviews */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Employee Performance Reviews</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-center">
                  <th className="p-2">Employee</th>
                  <th className="p-2">Performance Rating</th>
                  <th className="p-2">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id} className="border-t text-center">
                    <td className="p-2">{emp.name}</td>
                    <td className="p-2 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-blue-500 mr-2" />
                      {emp.rating} / 5
                    </td>
                    <td className="p-2">{emp.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Generate Reports Section */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Generate Reports</h3>
            <div className="flex space-x-4">
              <button onClick={() => generateReport("Attendance")} className="bg-blue-600 text-white p-2 rounded-lg flex items-center hover:bg-blue-700">
                <FileText className="w-5 h-5 mr-2" /> Attendance Report
              </button>
              <button onClick={() => generateReport("Leave")} className="bg-green-600 text-white p-2 rounded-lg flex items-center hover:bg-green-700">
                <FileText className="w-5 h-5 mr-2" /> Leave Report
              </button>
              <button onClick={() => generateReport("Payroll")} className="bg-yellow-600 text-white p-2 rounded-lg flex items-center hover:bg-yellow-700">
                <FileText className="w-5 h-5 mr-2" /> Payroll Report
              </button>
            </div>
          </div>

          {/* Promotions & Appraisals */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Promotions & Appraisals</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Employee</th>
                  <th className="p-2">Promotions</th>
                  <th className="p-2">Next Appraisal Due</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id} className="border-t text-center">
                    <td className="p-2">{emp.name}</td>
                    <td className="p-2 flex items-center justify-center">
                      <Award className="w-5 h-5 text-green-500 mr-2" />
                      {emp.promotions}
                    </td>
                    <td className="p-2">{emp.appraisalDue}</td>
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
