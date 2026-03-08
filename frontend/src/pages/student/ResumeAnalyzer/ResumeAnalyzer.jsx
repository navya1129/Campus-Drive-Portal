import { useState } from "react";
import "./ResumeAnalyzer.css";
import StudentSidebar from "../../../components/student/StudentSidebar/StudentSidebar";
import StudentHeader from "../../../components/student/StudentHeader/StudentHeader";

function ResumeAnalyzer() {

  const [resumeText, setResumeText] = useState("");
  const [jobText, setJobText] = useState("");

  const [score, setScore] = useState(null);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);

  const skills = [
    "react",
    "javascript",
    "typescript",
    "node",
    "mongodb",
    "express",
    "aws",
    "docker"
  ];

  const analyzeResume = () => {

    const resume = resumeText.toLowerCase();

    let matched = [];
    let missing = [];

    skills.forEach(skill => {

      if (resume.includes(skill)) {
        matched.push(skill);
      } else {
        missing.push(skill);
      }

    });

    const matchScore = Math.round(
      (matched.length / skills.length) * 100
    );

    setScore(matchScore);
    setMatchedSkills(matched);
    setMissingSkills(missing);

  };

  const handleFileUpload = (event) => {

  const file = event.target.files[0];

  if(!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const text = e.target.result;
    setResumeText(text);
  };

  reader.readAsText(file);

};

  return (

    <div>

      <StudentSidebar />

      <div className="student-main">

        <StudentHeader />

        <div className="resume-container">

          <p className="page-subtitle">
            Analyze your resume compatibility with job descriptions
          </p>

          <div className="resume-grid">

            {/* Resume Section */}

            <div className="resume-card">

              <h3>📄 Your Resume</h3>

             <div
 className="upload-box"
 onClick={() => document.getElementById("resumeUpload").click()}
>

  <div className="upload-icon">⬆</div>

  <p>Click to upload or drag and drop</p>
  <span>TXT files supported (Max 5MB)</span>

</div>

<input
 id="resumeUpload"
 type="file"
 accept=".txt"
 style={{display:"none"}}
 onChange={handleFileUpload}
/>
              <p className="or-text">OR</p>

              <label>Paste Resume Text</label>

              <textarea
                placeholder="Paste your resume content here..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              ></textarea>

            </div>

            {/* Job Description */}

            <div className="resume-card">

              <h3>📋 Job Description</h3>

              <label>Paste Job Description</label>

              <textarea
                className="job-desc"
                placeholder="Paste the job description you want to analyze against..."
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
              ></textarea>

            </div>

          </div>

          {/* Analyze Button */}

          <div className="analyze-btn-wrapper">

            <button
              className="analyze-btn"
              onClick={analyzeResume}
            >
              Analyze Resume Match
            </button>

          </div>

          {/* Results */}

          {score !== null && (

            <div className="result-card">

              <h2>Match Score: {score}%</h2>

              <div className="skills-result">

                <div>

                  <h4>Matched Skills</h4>

                  <div className="skills">

                    {matchedSkills.map((skill, index) => (
                      <span key={index} className="skill-tag match">
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

                <div>

                  <h4>Missing Skills</h4>

                  <div className="skills">

                    {missingSkills.map((skill, index) => (
                      <span key={index} className="skill-tag missing">
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default ResumeAnalyzer;