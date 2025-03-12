import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ Use navigate for redirection

  const API_URL = "http://localhost:5000";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getRoleFromEmail = (email) => {
    if (email.includes(".manager")) return "manager";
    if (email.includes(".admin")) return "admin";
    if (email.includes(".employee")) return "employee";
    return null; // No valid role found
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/register";

    try {
      const res = await axios.post(API_URL + endpoint, formData);
      setMessage(isLogin ? `Welcome, ${res.data.user.name}` : "Registration successful!");
      
      if (!isLogin) {
        setIsLogin(true);
      } else {
        const role = getRoleFromEmail(formData.email);

        if (role) {
          setTimeout(() => navigate(`/${role}-dashboard`), 1000); // ✅ Redirect based on role
        } else {
          setMessage("Invalid role in email. Please use a valid email format.");
        }
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">{isLogin ? "Login" : "Register"}</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="text" name="name" placeholder="Username" className="w-full p-2 border rounded-md" onChange={handleChange} />
          )}
          <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded-md" onChange={handleChange} required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 underline ml-1">
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
