import "./StudentHeader.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

function StudentHeader() {
  const userName = localStorage.getItem("userName");

  return (

    <div className="student-header">

      {/* <div className="header-left">
        <h2>Welcome, Rahul Sharma!</h2>
        <p>Computer Science Student</p>
      </div> */}

      <div className="header-right">

        <div className="notification">
          <FaBell/>
          <span className="badge"></span>
        </div>

        <div className="profile">

          <FaUserCircle className="avatar"/>

          <div className="profile-info">
            <h4>{userName}</h4>
            {/* <p>Computer Science Student</p> */}
          </div>

        </div>

      </div>

    </div>

  );

}

export default StudentHeader;