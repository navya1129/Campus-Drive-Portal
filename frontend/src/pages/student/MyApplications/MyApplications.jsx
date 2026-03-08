import {useEffect,useState} from "react";
import axios from "axios";

import "./MyApplications.css";
import StudentSidebar from "../../../components/student/StudentSidebar/StudentSidebar";
import StudentHeader from "../../../components/student/StudentHeader/StudentHeader";

function MyApplications(){

  const [applications,setApplications] = useState([]);

  const token = localStorage.getItem("token");

  const fetchApplications = async()=>{

    try{

      const res = await axios.get(
        "http://localhost:5000/api/applications/my",
        {
          headers:{
            Authorization:token
          }
        }
      );

      setApplications(res.data);

    }catch(error){
      console.error(error);
    }

  };

  useEffect(()=>{
    fetchApplications();
  },[]);

  return(

    <div>

      <StudentSidebar/>

      <div className="student-main">

        <StudentHeader/>

        <div className="applications-container">

          <h2>My Applications</h2>
          <p>Track the jobs you applied for</p>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Company</th>
                  <th>Role</th>
                  <th>Applied Date</th>
                </tr>
              </thead>

              <tbody>

                {applications.map((app)=>{

  if(!app.jobId) return null;

  return(
    <tr key={app._id}>

      <td>{app.jobId.companyName}</td>
      <td>{app.jobId.role}</td>

      <td>
        {new Date(app.appliedDate).toLocaleDateString()}
      </td>

    </tr>
  );

})}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

}

export default MyApplications;