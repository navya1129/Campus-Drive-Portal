import "./JobDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import StudentSidebar from "../../../../components/student/StudentSidebar/StudentSidebar.jsx";
import StudentHeader from "../../../../components/student/StudentHeader/StudentHeader.jsx";

function JobDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  const token = localStorage.getItem("token");

  const fetchJob = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/jobs/${id}`,
        {
          headers: {
            Authorization: token
          }
        }
      );

      setJob(res.data);

    } catch (error) {

      console.error(error);

    }

  };

  const applyJob = async () => {

  try {

    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:5000/api/applications",
      { jobId: id },
      {
        headers: {
          Authorization: token
        }
      }
    );

    alert(res.data.message);

  } catch (error) {

    alert(error?.response?.data?.message || "Application failed");

  }

};

  useEffect(() => {
    fetchJob();
  }, []);

  if (!job) {
    return <h2>Loading job details...</h2>;
  }

  const skillsArray = job.skills.split(",");

  return (
    <div>

      <StudentSidebar />

      <div className="student-main">

        <StudentHeader />

        <div className="job-details-container">

          <button
            className="back-btn"
            onClick={() => navigate("/student/jobs")}
          >
            ← Back to Job Drives
          </button>

          <div className="job-card">

            <div className="job-header">

             <img
  src={`http://localhost:5000/uploads/${job.logo}`}
  className="company-logo"
/>

              <div>
                <h2>{job.role}</h2>
                <p>{job.companyName}</p>
              </div>

            </div>

            <div className="job-info">

              <p><strong>CTC / Salary:</strong> {job.ctc}</p>

              <p><strong>Eligibility:</strong> {job.branches}</p>

              <p><strong>Application Deadline:</strong> {job.deadline}</p>

            </div>

            <div className="job-section">

              <h3>Job Description</h3>

              <p>{job.description}</p>

            </div>

            <div className="job-section">

              <h3>Required Skills</h3>

              <div className="skills">

                {skillsArray.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill.trim()}
                  </span>
                ))}

              </div>

            </div>

            <div className="job-buttons">

              <button
                className="resume-btn"
                onClick={() => navigate("/student/resume-analyzer")}
              >
                Check Resume Match
              </button>

              <button className="applyd-btn" onClick={applyJob}>
  Apply Now
</button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;