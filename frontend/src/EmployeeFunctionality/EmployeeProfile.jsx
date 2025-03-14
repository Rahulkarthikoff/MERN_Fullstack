import { useState } from "react";
import { UploadCloud, FileText } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function EmployeeProfile() {
  const [employee, setEmployee] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    department: "IT",
    role: "Software Engineer",
    joiningDate: "2023-06-15",
  });

  const [documents, setDocuments] = useState([
    { id: 1, name: "Resume.pdf", type: "Resume" },
    { id: 2, name: "Offer_Letter.pdf", type: "Offer Letter" },
  ]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocuments([...documents, { id: documents.length + 1, name: file.name, type: "Uploaded File" }]);
    }
  };

  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar />
      <div className="flex-1 overflow-scroll">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Employee Profile</h2>

          {/* Employee Information */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Employee Information</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Name:</td>
                  <td className="p-2">{employee.name}</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Email:</td>
                  <td className="p-2">{employee.email}</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Phone:</td>
                  <td className="p-2">{employee.phone}</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Department:</td>
                  <td className="p-2">{employee.department}</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Role:</td>
                  <td className="p-2">{employee.role}</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Joining Date:</td>
                  <td className="p-2">{employee.joiningDate}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Document Upload & Management */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Upload & Manage Documents</h3>
            <input type="file" onChange={handleFileUpload} className="mb-2" />
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Document Name</th>
                  <th className="p-2">Type</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-t">
                    <td className="p-2 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      {doc.name}
                    </td>
                    <td className="p-2">{doc.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Personal & Contact Details */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Personal & Contact Details</h3>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Address:</strong> 123 Main St, New York, USA</p>
          </div>

          {/* Educational & Work Experience */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Educational & Work Experience</h3>
            <p><strong>Education:</strong> B.Sc. Computer Science - XYZ University</p>
            <p><strong>Experience:</strong> 5 years in Software Development</p>
          </div>

        </div>
      </div>
    </div>
  );
}
