import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./ManageJobs.css";

function ManageJobs() {

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

      console.error(error);

    }

  };

  /* Delete Job */

  const deleteJob = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/jobs/${id}`,
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert("Job deleted successfully");

      fetchJobs();

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="admin-container">

      <Sidebar />

      <div className="main-section">

        <Header />

        <div className="content">

          <h2>Manage Job Drives</h2>

          <p className="subtitle">
            View and manage all campus placement opportunities
          </p>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Company</th>
                  <th>Role</th>
                  <th>CTC</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {jobs.map((job) => (
                  <tr key={job._id}>

                    <td>{job.companyName}</td>
                    <td>{job.role}</td>
                    <td>{job.ctc}</td>
                    <td>{job.deadline}</td>

                    <td className="actions">

                      <button
                        className="delete-btn"
                        onClick={() => deleteJob(job._id)}
                      >
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

export default ManageJobs;