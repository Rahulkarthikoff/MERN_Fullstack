import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../Components/Header";


export default function RoleBasedAccess() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Manage Users", "View Reports", "Edit Payroll"] },
    { id: 2, name: "Manager", permissions: ["View Reports", "Approve Leaves"] },
    { id: 3, name: "Employee", permissions: ["View Own Details", "Request Leave"] },
  ]);

  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const permissionsList = [
    "Manage Users",
    "View Reports",
    "Edit Payroll",
    "Approve Leaves",
    "View Own Details",
    "Request Leave"
  ];

  const handleRoleInput = (e) => {
    setNewRole({ ...newRole, name: e.target.value });
  };

  const handlePermissionChange = (permission) => {
    if (selectedPermissions.includes(permission)) {
      setSelectedPermissions(selectedPermissions.filter((perm) => perm !== permission));
    } else {
      setSelectedPermissions([...selectedPermissions, permission]);
    }
  };

  const handleAddOrEditRole = () => {
    if (!newRole.name) return;

    if (isEditing) {
      setRoles(
        roles.map((role) =>
          role.id === editId ? { ...newRole, id: editId, permissions: selectedPermissions } : role
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setRoles([...roles, { ...newRole, id: Date.now(), permissions: selectedPermissions }]);
    }

    setNewRole({ name: "", permissions: [] });
    setSelectedPermissions([]);
  };

  const handleEditRole = (role) => {
    setNewRole(role);
    setSelectedPermissions(role.permissions);
    setIsEditing(true);
    setEditId(role.id);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Header Navbar */}
        <Header />

        {/* Page Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Role-Based Access Control (RBAC)</h2>

          {/* Role Form */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">{isEditing ? "Edit Role" : "Add Role"}</h3>
            <input
              type="text"
              placeholder="Role Name"
              className="border p-2 rounded-lg w-full mb-2"
              value={newRole.name}
              onChange={handleRoleInput}
            />

            <h4 className="text-md font-medium mb-2">Assign Permissions:</h4>
            <div className="grid grid-cols-2 gap-2">
              {permissionsList.map((permission) => (
                <label key={permission} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedPermissions.includes(permission)}
                    onChange={() => handlePermissionChange(permission)}
                  />
                  <span>{permission}</span>
                </label>
              ))}
            </div>

            <button
              onClick={handleAddOrEditRole}
              className="mt-4 bg-blue-600 text-white p-2 rounded-lg w-full"
            >
              {isEditing ? "Update Role" : "Add Role"}
            </button>
          </div>

          {/* Roles List */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Defined Roles</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Role</th>
                  <th className="p-2">Permissions</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id} className="border-t">
                    <td className="p-2">{role.name}</td>
                    <td className="p-2">{role.permissions.join(", ")}</td>
                    <td className="p-2 flex space-x-2">
                      <button onClick={() => handleEditRole(role)} className="text-blue-600">
                        Edit
                      </button>
                      <button onClick={() => handleDeleteRole(role.id)} className="text-red-600">
                        Delete
                      </button>
                    </td>
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
