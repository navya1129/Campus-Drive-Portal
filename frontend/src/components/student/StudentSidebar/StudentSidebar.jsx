import "./StudentSidebar.css";
import { NavLink } from "react-router-dom";
import { FaThLarge, FaBriefcase, FaFileAlt, FaClipboardList, FaSignOutAlt } from "react-icons/fa";

function StudentSidebar() {

  return (

    <div className="student-sidebar">

      {/* Logo */}
      <div className="sidebar-header">
        <h2>Campus Jobs</h2>
        <p>Student Portal</p>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">

        {/* <NavLink to="/student/dashboard" className="menu-item">
          <FaThLarge className="icon"/>
          <span>Dashboard</span>
        </NavLink> */}

        <NavLink to="/student/jobs" className="menu-item">
          <FaBriefcase className="icon"/>
          <span>Job Drives</span>
        </NavLink>

        <NavLink to="/student/resume-analyzer" className="menu-item">
          <FaFileAlt className="icon"/>
          <span>Resume Analyzer</span>
        </NavLink>

        <NavLink to="/student/applications" className="menu-item">
          <FaClipboardList className="icon"/>
          <span>My Applications</span>
        </NavLink>

      </div>

      {/* Logout */}
      <NavLink to="/" className="sidebar-footer">
        <FaSignOutAlt className="icon"/>
        <span>Logout</span>
      </NavLink >

    </div>

  );
}

export default StudentSidebar;