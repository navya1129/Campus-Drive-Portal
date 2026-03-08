// import "./Sidebar.css";
// import { FaThLarge, FaPlus, FaFolderOpen, FaUsers, FaSignOutAlt } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="sidebar">

//       {/* Logo */}
//       <div className="sidebar-header">
//         <h2>Campus Jobs</h2>
//         <p>Admin Portal</p>
//       </div>

//       {/* Menu */}
//       <div className="sidebar-menu">

//         {/* <NavLink to="/dashboard" className="menu-item">
//           <FaThLarge className="icon"/>
//           <span>Dashboard</span>
//         </NavLink> */}

//         <NavLink to="/add-job" className="menu-item">
//           <FaPlus className="icon"/>
//           <span>Add Job Drive</span>
//         </NavLink>

//         <NavLink to="/manage-jobs" className="menu-item">
//           <FaFolderOpen className="icon"/>
//           <span>Manage Job Drives</span>
//         </NavLink>

//         {/* <NavLink to="/applications" className="menu-item">
//           <FaUsers className="icon"/>
//           <span>View Applications</span>
//         </NavLink> */}

//       </div>

//       {/* Logout */}
//       <NavLink to="/" className="sidebar-footer">
//         <FaSignOutAlt className="icon"/>
//         <span>Logout</span>
//       </NavLink>

//     </div>
//   );
// }

// export default Sidebar;


import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaThLarge, FaPlus, FaFolderOpen, FaUsers, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userRole");
  navigate("/");
};

  return (

    <div className="student-sidebar">

      {/* Logo */}
      <div className="sidebar-header">
        <h2>Campus Jobs</h2>
        <p>Admin Portal</p>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">

      <NavLink to="/add-job" className="menu-item">
          <FaPlus className="icon"/>
          <span>Add Job Drive</span>
         </NavLink>

       <NavLink to="/manage-jobs" className="menu-item">
           <FaFolderOpen className="icon"/>
          <span>Manage Job Drives</span>
       </NavLink>

      </div>

      {/* Logout */}
       <div className="sidebar-footer" onClick={handleLogout}>
  <FaSignOutAlt className="icon"/>
  <span>Logout</span>
</div>

    </div>

  );
}

export default Sidebar;