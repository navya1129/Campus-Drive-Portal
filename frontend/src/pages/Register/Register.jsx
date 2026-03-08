import { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("student");

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleRegister = async () => {

    try{

      const role = activeTab === "student" ? "student" : "admin";

      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          ...formData,
          role
        }
      );

      alert("Account created successfully");

      navigate("/");

    }catch(error){

      alert(error?.response?.data?.message || "Registration failed");

    }

  };

  return(

    <div className="login-page">

      <div className="login-header">
        <h1>Campus Jobs</h1>
        <p>Create a new account</p>
      </div>

      <div className="login-card">

        {/* Tabs */}

        <div className="tabs">

          <div
            className={`tab ${activeTab === "student" ? "active" : ""}`}
            onClick={() => setActiveTab("student")}
          >
            Student Signup
          </div>

          <div
            className={`tab ${activeTab === "coordinator" ? "active" : ""}`}
            onClick={() => setActiveTab("coordinator")}
          >
            Placement Coordinator
          </div>

        </div>

        {/* Form */}

        <div className="form-section">

          <label>Name</label>

          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>

          <label>Email</label>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>

          <label>Password</label>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>

          <button className="login-btn" onClick={handleRegister}>
            Sign Up
          </button>

          <p className="forgot">
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>
              Login
            </span>
          </p>

        </div>

      </div>

    </div>

  );

}

export default Register;