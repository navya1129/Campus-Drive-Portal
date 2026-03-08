import StudentSidebar from "../../components/student/StudentSidebar/StudentSidebar";
import StudentHeader from "../../components/student/StudentHeader/StudentHeader";

function StudentDashboard() {
  return (
     <div>

      <StudentSidebar/>

      <StudentHeader/>

      <div style={{marginLeft:"240px",padding:"30px"}}>
        PAGE CONTENT HERE
      </div>

    </div>
  );
}

export default StudentDashboard;