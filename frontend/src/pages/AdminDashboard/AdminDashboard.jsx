import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

function AdminDashboard() {

  return (
    <div style={{display:"flex"}}>

      <Sidebar />

      <div style={{flex:1}}>

        <Header />

        <div style={{padding:"30px"}}>
          <h2>Add New Job Drive</h2>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;