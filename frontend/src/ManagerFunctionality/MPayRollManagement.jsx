import { useState } from "react";
import { FileText, Download } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function MPayRollManagement() {
  const [salaries, setSalaries] = useState([
    { id: 1, name: "John Doe", baseSalary: 5000, bonus: 500, deductions: 200, netSalary: 5300 },
    { id: 2, name: "Jane Smith", baseSalary: 4500, bonus: 400, deductions: 150, netSalary: 4750 }
  ]);

  const generateSalaryReport = () => {
    alert("Salary report generated successfully!");
  };

  const downloadPayrollStatement = () => {
    alert("Payroll statement downloaded successfully!");
  };

  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Payroll & Salary Management</h2>

          {/* Salary Reports */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Salary Reports</h3>
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Employee</th>
                  <th className="p-2">Base Salary</th>
                  <th className="p-2">Bonus</th>
                  <th className="p-2">Deductions</th>
                  <th className="p-2">Net Salary</th>
                </tr>
              </thead>
              <tbody>
                {salaries.map(salary => (
                  <tr key={salary.id} className="border-t">
                    <td className="p-2">{salary.name}</td>
                    <td className="p-2">${salary.baseSalary}</td>
                    <td className="p-2">${salary.bonus}</td>
                    <td className="p-2">${salary.deductions}</td>
                    <td className="p-2 font-bold">${salary.netSalary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download Reports */}
          <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
            <h3 className="text-lg font-semibold mb-2">Download Reports</h3>
            <button onClick={generateSalaryReport} className="bg-blue-600 text-white p-2 rounded-lg w-full flex justify-center items-center hover:bg-blue-800">
              <FileText className="w-5 h-5 mr-2" /> Download Salary Report
            </button>
            <button onClick={downloadPayrollStatement} className="bg-blue-600 text-white p-2 rounded-lg w-full flex justify-center items-center hover:bg-blue-800">
              <Download className="w-5 h-5 mr-2" /> Download Payroll Statement
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
