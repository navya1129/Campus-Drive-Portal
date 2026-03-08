import React from 'react'
import './App.css'
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";

import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

import AddJobDrive from "./pages/AddJobDrive/AddJobDrive";
import ManageJobs from "./pages/ManageJobs/ManageJobs";

import ResumeAnalyzer from "./pages/student/ResumeAnalyzer/ResumeAnalyzer";
import MyApplications from "./pages/student/MyApplications/MyApplications";

import JobDetails from "./pages/student/JobDrives/JobDetails/JobDetails.jsx";
import JobDrives from "./pages/student/JobDrives/JobDrives";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Student Routes */}

      <Route
        path="/student-dashboard"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/jobs"
        element={
          <ProtectedRoute role="student">
            <JobDrives />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/job/:id"
        element={
          <ProtectedRoute role="student">
            <JobDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/resume-analyzer"
        element={
          <ProtectedRoute role="student">
            <ResumeAnalyzer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/applications"
        element={
          <ProtectedRoute role="student">
            <MyApplications />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-job"
        element={
          <ProtectedRoute role="admin">
            <AddJobDrive />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-jobs"
        element={
          <ProtectedRoute role="admin">
            <ManageJobs />
          </ProtectedRoute>
        }
      />

      <Route path="/register" element={
        <Register />} />

    </Routes>
  );
}

export default App;