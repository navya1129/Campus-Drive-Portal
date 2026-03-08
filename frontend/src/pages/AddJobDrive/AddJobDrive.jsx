import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./AddJobDrive.css";

function AddJobDrive() {

  const [jobData, setJobData] = useState({
    companyName: "",
    role: "",
    ctc: "",
    branches: "",
    deadline: "",
    description: "",
    skills: "",
    logo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJobData({
      ...jobData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setJobData({
      ...jobData,
      logo: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try{

    const token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("companyName",jobData.companyName);
    formData.append("role",jobData.role);
    formData.append("ctc",jobData.ctc);
    formData.append("branches",jobData.branches);
    formData.append("deadline",jobData.deadline);
    formData.append("description",jobData.description);
    formData.append("skills",jobData.skills);

    if(jobData.logo){
      formData.append("logo",jobData.logo);
    }

    await axios.post(
      "http://localhost:5000/api/jobs",
      formData,
      {
        headers:{
          Authorization:token,
          "Content-Type":"multipart/form-data"
        }
      }
    );

    alert("Job created successfully");
    setJobData({
      companyName: "",
    role: "",
    ctc: "",
    branches: "",
    deadline: "",
    description: "",
    skills: "",
    logo: null
    }

    )

  }catch(error){
    console.error(error);
  }

};

  return (

    <div className="admin-container">

      <Sidebar />

      <div className="main-section">

        <Header />

        <div className="content">

          <h2>Add New Job Drive</h2>
          <p className="subtitle">
            Create a new campus placement opportunity
          </p>

          <form className="job-form" onSubmit={handleSubmit}>

            {/* Company Name + Logo */}

            <div className="form-row">

              <div className="form-group">
                <label>Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="e.g., Google"
                  value={jobData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Company Logo</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                />
              </div>

            </div>


            {/* Role + CTC */}

            <div className="form-row">

              <div className="form-group">
                <label>Role *</label>
                <input
                  type="text"
                  name="role"
                  placeholder="e.g., Software Engineer"
                  value={jobData.role}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>CTC / Salary *</label>
                <input
                  type="text"
                  name="ctc"
                  placeholder="e.g., ₹18 LPA"
                  value={jobData.ctc}
                  onChange={handleChange}
                />
              </div>

            </div>


            {/* Branch + Deadline */}

            <div className="form-row">

              <div className="form-group">
                <label>Eligible Branches *</label>
                <input
                  type="text"
                  name="branches"
                  placeholder="e.g., CSE, IT, ECE"
                  value={jobData.branches}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Application Deadline *</label>
                <input
                  type="date"
                  name="deadline"
                  value={jobData.deadline}
                  onChange={handleChange}
                />
              </div>

            </div>


            {/* Job Description */}

            <div className="form-group">
              <label>Job Description *</label>
              <textarea
                name="description"
                placeholder="Describe the role and responsibilities..."
                value={jobData.description}
                onChange={handleChange}
              />
            </div>


            {/* Skills */}

            <div className="form-group">
              <label>Required Skills *</label>
              <input
                type="text"
                name="skills"
                placeholder="e.g., React, JavaScript, Node.js"
                value={jobData.skills}
                onChange={handleChange}
              />
            </div>


            {/* Buttons */}

            <div className="button-group">

              <button type="button" className="cancel-btn">
                Cancel
              </button>

              <button type="submit" className="publish-btn">
                Publish Job Drive
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  );
}

export default AddJobDrive;