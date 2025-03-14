import { useState } from "react";
import { CheckCircle, FileText, Download } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function PayrollManagement() {
  const [salaries, setSalaries] = useState([
    { id: 1, name: "John Doe", baseSalary: 5000, bonus: 500, deductions: 200, netSalary: 5300, status: "Pending" },
    { id: 2, name: "Jane Smith", baseSalary: 4500, bonus: 400, deductions: 150, netSalary: 4750, status: "Pending" }
  ]);

  const handleApprovePayslip = (id) => {
    setSalaries(salaries.map(salary =>
      salary.id === id ? { ...salary, status: "Approved" } : salary
    ));
  };

  const generateSalaryReport = () => {
    alert("Salary report generated successfully!");
  };

  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Payroll Management</h2>

          {/* Salary Structure */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Salary Structure</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Employee</th>
                  <th className="p-2">Base Salary</th>
                  <th className="p-2">Bonus</th>
                  <th className="p-2">Deductions</th>
                  <th className="p-2">Net Salary</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
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
                    <td className={`p-2 ${salary.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                      {salary.status}
                    </td>
                    <td className="p-2 flex space-x-2">
                      {salary.status === "Pending" && (
                        <button onClick={() => handleApprovePayslip(salary.id)} className="text-green-600">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download Salary Reports */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Download Salary Reports</h3>
            <button onClick={generateSalaryReport} className="mt-4 bg-blue-600 text-white p-2 rounded-lg w-full flex justify-center items-center">
              <Download className="w-5 h-5 mr-2" /> Download Salary Report
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
