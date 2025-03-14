import { useState } from "react";
import { Download, FileText, DollarSign } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function PayrollAndSalary() {
  const [salaries] = useState([
    { id: 1, name: "John Doe", baseSalary: 5000, bonus: 500, overtime: 200, deductions: 300, netSalary: 5400 },
    { id: 2, name: "Jane Smith", baseSalary: 4500, bonus: 400, overtime: 100, deductions: 250, netSalary: 4750 },
  ]);

  const downloadPayslip = (name) => {
    alert(`Payslip for ${name} downloaded successfully!`);
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Payroll & Salary Management</h2>

          {/* Salary Structure */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Salary Structure</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Employee</th>
                  <th className="p-2">Base Salary</th>
                  <th className="p-2">Bonus</th>
                  <th className="p-2">Overtime</th>
                  <th className="p-2">Deductions</th>
                  <th className="p-2">Net Salary</th>
                  <th className="p-2">Payslip</th>
                </tr>
              </thead>
              <tbody>
                {salaries.map(salary => (
                  <tr key={salary.id} className="border-t">
                    <td className="p-2">{salary.name}</td>
                    <td className="p-2">${salary.baseSalary}</td>
                    <td className="p-2">${salary.bonus}</td>
                    <td className="p-2">${salary.overtime}</td>
                    <td className="p-2">${salary.deductions}</td>
                    <td className="p-2 font-bold">${salary.netSalary}</td>
                    <td className="p-2">
                      <button onClick={() => downloadPayslip(salary.name)} className="bg-blue-600 text-white p-2 rounded-lg flex items-center hover:bg-blue-700">
                        <Download className="w-5 h-5 mr-2" /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payroll Reports */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Payroll Reports</h3>
            <button className="mt-4 bg-green-600 text-white p-2 rounded-lg w-full flex justify-center items-center hover:bg-green-700">
              <FileText className="w-5 h-5 mr-2" /> Generate Payroll Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
