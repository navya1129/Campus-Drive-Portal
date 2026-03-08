import "./Header.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  const userName = localStorage.getItem("userName");
  return (
    <div className="header">

      {/* Left Section */}
      <div className="header-left">
        {/* <h2>Welcome, Dr. Priya Sharma!</h2> */}
        {/* <p>Placement Coordinator</p> */}
      </div>

      {/* Right Section */}
      <div className="header-right">

        {/* Notification */}
        <div className="notification">
          <FaBell />
          <span className="badge"></span>
        </div>

        {/* Profile */}
        <div className="profile">

          <FaUserCircle className="avatar" />

          <div className="profile-info">
            <h4>{userName}</h4>
            {/* <p>Placement Coordinator</p> */}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;