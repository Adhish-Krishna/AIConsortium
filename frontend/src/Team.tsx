import React from "react";
import "./index.css";
import OrgChartAnimation from "./components/Animations/teamAnimation";

const AIConsortium = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">AI Consortium Leadership Structure</h1>
      
      <div className="org-chart">
        {/* Animation overlay */}
        <OrgChartAnimation levels={6} />
        
        {/* Top Level - Principal */}
        <div className="level principal-level">
          <div className="box principal-box">
            <h2>Principal</h2>
            <p>Executive Leadership</p>
          </div>
        </div>
        
        {/* Director Level */}
        <div className="level director-level">
          <div className="box director-box">
            <h2>Director</h2>
            <p>AI Consortium</p>
          </div>
        </div>
        
        {/* Program Manager */}
        <div className="level program-level">
          <div className="box program-box">
            <h2>Program Manager</h2>
            <p>AI Awareness and Outreach</p>
          </div>
        </div>
        
        {/* Two Key Divisions */}
        <div className="level managers-level">
          <div className="box manager-box">
            <h2>Community Outreach</h2>
            <p>Operations Manager</p>
          </div>
          <div className="box manager-box">
            <h2>Technical Lead</h2>
            <p>AI Product Development</p>
          </div>
        </div>
        
        {/* Faculty and Liaison Officers */}
        <div className="level advisors-level">
          <div className="box advisor-box">
            <h2>AI Faculty Advisor</h2>
          </div>
          <div className="box advisor-box">
            <h2>Curriculum Designer</h2>
          </div>
          <div className="box advisor-box">
            <h2>Industry Liaison</h2>
          </div>
          <div className="box advisor-box">
            <h2>AI Wing Coordinators</h2>
          </div>
        </div>
        
        {/* Student Engagement & Innovation */}
        <div className="level student-level">
          <div className="box student-box">
            <h2>Student Ambassadors</h2>
          </div>
          <div className="box student-box">
            <h2>Academic Advisors</h2>
            <p>Domain Specific & Innovation Mentors</p>
          </div>
          <div className="box student-box">
            <h2>Industry Advisors</h2>
            <p>AI Alumni Council</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsortium;