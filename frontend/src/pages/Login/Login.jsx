// import { useState } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const [activeTab, setActiveTab] = useState("student");
//   const navigate = useNavigate();

//   return (
//     <div className="login-page">

//       <div className="login-header">
//         <h1>Campus Jobs</h1>
//         <p>Sign in to your account</p>
//       </div>

//       <div className="login-card">

//         {/* Tabs */}
//         <div className="tabs">

//           <div
//             className={`tab ${activeTab === "student" ? "active" : ""}`}
//             onClick={() => setActiveTab("student")}
//           >
//             Student Login
//           </div>

//           <div
//             className={`tab ${activeTab === "coordinator" ? "active" : ""}`}
//             onClick={() => setActiveTab("coordinator")}
//           >
//             Placement Coordinator
//           </div>

//         </div>

//         {/* Form */}
//         <div className="form-section">

//           <label>Email</label>
//           <div className="input-box">
//             <span className="icon"></span>
//             <input type="email" placeholder="Enter your email" />
//           </div>

//           <label>Password</label>
//           <div className="input-box">
//             <span className="icon"></span>
//             <input type="password" placeholder="Enter your password" />
//           </div>

//           <button className="login-btn" onClick={() => {
//    if(activeTab === "student"){
//       navigate("/student/jobs")
//    } else{
//       navigate("/add-job")
//    }
//  }}>Login</button>

//           <p className="forgot">
//             Forgot your password? <span>Reset here</span>
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const [activeTab, setActiveTab] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password
      }
    );

    const { token, user } = res.data;

    /* Role validation */

    if (activeTab === "student" && user.role !== "student") {
      alert("Please login using Placement Coordinator tab");
      return;
    }

    if (activeTab === "coordinator" && user.role !== "admin") {
      alert("Please login using Student tab");
      return;
    }

    /* Save token */

    localStorage.setItem("token", token);
    localStorage.setItem("userRole", user.role);
 
  localStorage.setItem("userName", user.name);

    /* Redirect */

    if (user.role === "student") {
      navigate("/student/jobs");
    } else {
      navigate("/add-job");
    }

  } catch (error) {

    alert("Invalid email or password");

  }

};

  return (
    <div className="login-page">

      <div className="login-header">
        <h1>Campus Jobs</h1>
        <p>Sign in to your account</p>
      </div>

      <div className="login-card">

        {/* Tabs */}

        <div className="tabs">

          <div
            className={`tab ${activeTab === "student" ? "active" : ""}`}
            onClick={() => setActiveTab("student")}
          >
            Student Login
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

          <label>Email</label>

          <div className="input-box">
            <span className="icon"></span>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <label>Password</label>

          <div className="input-box">
            <span className="icon"></span>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <p className="forgot">
  Don't have an account?{" "}
  <span onClick={() => navigate("/register")}>
    Sign Up
  </span>
</p>

        </div>

      </div>

    </div>
  );
}

export default Login;