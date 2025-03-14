import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { FileText, Download } from "lucide-react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export default function ReportsAndAnalytics() {
  const [reportType, setReportType] = useState("performance");

  const employeePerformanceData = {
    labels: ["John Doe", "Jane Smith", "Mark Wilson", "Emma Johnson"],
    datasets: [
      {
        label: "Performance Score",
        data: [85, 90, 78, 92],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const salaryDistributionData = {
    labels: ["IT", "HR", "Marketing", "Sales"],
    datasets: [
      {
        label: "Salary ($)",
        data: [50000, 40000, 45000, 48000],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const leaveAttendanceTrends = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Leaves Taken",
        data: [5, 8, 6, 10, 7, 4],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
      },
    ],
  };

  const handleDownloadReport = (format) => {
    alert(`Exporting reports as ${format.toUpperCase()}...`);
  };

  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>

          {/* Report Type Selection */}
          <div className="mb-4">
            <select
              className="border p-2 rounded-lg w-full"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="performance">Employee Performance</option>
              <option value="salary">Payroll & Salary Analysis</option>
              <option value="leave">Leave & Attendance Trends</option>
            </select>
          </div>

          {/* Display Report Charts */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            {reportType === "performance" && (
              <>
                <h3 className="text-lg font-semibold mb-2">Employee Performance Report</h3>
                <Bar data={employeePerformanceData} />
              </>
            )}

            {reportType === "salary" && (
              <>
                <h3 className="text-lg font-semibold mb-2">Payroll & Salary Distribution</h3>
                <Bar data={salaryDistributionData} />
              </>
            )}

            {reportType === "leave" && (
              <>
                <h3 className="text-lg font-semibold mb-2">Leave & Attendance Trends</h3>
                <Line data={leaveAttendanceTrends} />
              </>
            )}
          </div>

          {/* Export Reports */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-lg font-semibold mb-2">Export Reports</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => handleDownloadReport("pdf")}
                className="bg-blue-600 text-white p-2 rounded-lg flex items-center"
              >
                <FileText className="w-5 h-5 mr-2" /> Export as PDF
              </button>
              <button
                onClick={() => handleDownloadReport("excel")}
                className="bg-green-600 text-white p-2 rounded-lg flex items-center"
              >
                <Download className="w-5 h-5 mr-2" /> Export as Excel
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
