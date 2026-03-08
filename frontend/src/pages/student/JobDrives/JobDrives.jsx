import "./JobDrives.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import StudentSidebar from "../../../components/student/StudentSidebar/StudentSidebar";
import StudentHeader from "../../../components/student/StudentHeader/StudentHeader";

import { FaMoneyBillWave } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

function JobDrives() {

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  const token = localStorage.getItem("token");

  /* Fetch Jobs */

  const fetchJobs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/jobs",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setJobs(res.data);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {
    fetchJobs();
  }, []);

  return (

    <div>

      <StudentSidebar />

      <div className="student-main">

        <StudentHeader />

        <div className="jobdrives-container">

          <h2>Available Job Drives</h2>

          <p>
            Browse and apply to the latest campus placement opportunities
          </p>

          <div className="jobs-grid">

            {jobs.map((job) => (

              <div className="job-card" key={job._id}>

                <div className="job-header">

                 <img
  src={`http://localhost:5000/uploads/${job.logo}`}
  className="company-logo"
/>

                  <div>
                    <h3>{job.companyName}</h3>
                    <p>{job.role}</p>
                  </div>

                </div>

                <div className="job-details">

                  <p>
                    <FaMoneyBillWave className="job-icon"/>
                    {job.ctc}
                  </p>

                  <p>
                    <FaGraduationCap className="job-icon"/>
                    {job.branches}
                  </p>

                  <p>
                    <FaCalendarAlt className="job-icon"/>
                    Deadline: {job.deadline}
                  </p>

                </div>

                <div className="job-buttons">

                  <button
                    className="details-btn"
                    onClick={() => navigate(`/student/job/${job._id}`)}
                  >
                    View Details
                  </button>

                  <button
                    className="resume-btn"
                    onClick={() => navigate("/student/resume-analyzer")}
                  >
                    Check Resume Match
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default JobDrives;