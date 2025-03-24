import { useState, useEffect } from "react";
import "./team.css";
import TeamMember from "../../components/TeamMember/TeamMember";
import { teamDetails } from "../../data/team";

const AIConsortium = () => {
  // Get unique roles from team data
  const allRoles = ["All", ...Array.from(new Set(teamDetails.map(member => member.role)))].filter(Boolean);

  // State to track the currently selected role
  const [selectedRole, setSelectedRole] = useState("All");
  // Filtered team members based on selected role
  const [filteredMembers, setFilteredMembers] = useState(teamDetails);

  // Filter team members when selected role changes
  useEffect(() => {
    if (selectedRole === "All") {
      setFilteredMembers(teamDetails);
    } else {
      setFilteredMembers(teamDetails.filter(member => member.role === selectedRole));
    }
  }, [selectedRole]);

  return (
    <div className="team-container">
      {/* Team Members Section */}
      <section className="team-members-section">
        <h2 className="team-section-title">Meet Our Team</h2>

        {/* Role Tab Navigation */}
        <div className="team-tabs-container">
          <div className="team-tabs">
            {allRoles.map(role => (
              <button
                key={role}
                className={`team-tab ${selectedRole === role ? 'active' : ''}`}
                onClick={() => setSelectedRole(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="team-members-grid">
          {filteredMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              designation={member.designation}
              image={member.image}
              shortDetails={member.shortDetails}
              fullDetails={member.fullDetails}
              achievements={member.achievements}
              contact={member.contact ? {
                email: member.contact.email,
                linkedin: member.contact.linkedin || undefined
              } : undefined}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIConsortium;