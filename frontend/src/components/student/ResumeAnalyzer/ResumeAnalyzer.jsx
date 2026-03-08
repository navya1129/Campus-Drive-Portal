import { useState } from "react";
import "./ResumeAnalyzer.css";
import StudentSidebar from "../../../components/student/StudentSidebar/StudentSidebar";
import StudentHeader from "../../../components/student/StudentHeader/StudentHeader";

function ResumeAnalyzer(){

  const [resume,setResume] = useState("");
  const [jobDesc,setJobDesc] = useState("");
  const [score,setScore] = useState(null);
  const [matched,setMatched] = useState([]);
  const [missing,setMissing] = useState([]);

  const requiredSkills = [
    "react",
    "javascript",
    "node",
    "mongodb",
    "html",
    "css",
    "express"
  ];

  const analyzeResume = () => {

    const resumeText = resume.toLowerCase();

    let matchedSkills = [];
    let missingSkills = [];

    requiredSkills.forEach(skill => {

      if(resumeText.includes(skill)){
        matchedSkills.push(skill);
      }
      else{
        missingSkills.push(skill);
      }

    });

    const matchScore = Math.round(
      (matchedSkills.length / requiredSkills.length) * 100
    );

    setScore(matchScore);
    setMatched(matchedSkills);
    setMissing(missingSkills);
  };

  return(

    <div>

      <StudentSidebar/>

      <div className="student-main">

        <StudentHeader/>

        <div className="analyzer-container">

          <h2>Resume Match Analyzer</h2>
          <p>Compare your resume with the job requirements</p>

          <div className="analyzer-grid">

            <div className="input-section">

              <label>Paste Resume</label>

              <textarea
                placeholder="Paste your resume text here..."
                value={resume}
                onChange={(e)=>setResume(e.target.value)}
              />

            </div>

            <div className="input-section">

              <label>Job Description</label>

              <textarea
                placeholder="Paste job description here..."
                value={jobDesc}
                onChange={(e)=>setJobDesc(e.target.value)}
              />

            </div>

          </div>

          <button className="analyze-btn" onClick={analyzeResume}>
            Analyze Resume
          </button>

          {score !== null && (

            <div className="result-card">

              <h3>Match Score: {score}%</h3>

              <div className="skills-section">

                <div>

                  <h4>Matched Skills</h4>

                  <ul>
                    {matched.map((skill,index)=>(
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>

                </div>

                <div>

                  <h4>Missing Skills</h4>

                  <ul>
                    {missing.map((skill,index)=>(
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>

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