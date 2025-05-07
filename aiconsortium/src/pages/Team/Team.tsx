import { useState, useEffect, useRef } from "react";
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
  // Reference to the tabs container for scrolling
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Filter team members when selected role changes
  useEffect(() => {
    if (selectedRole === "All") {
      setFilteredMembers(teamDetails);
    } else {
      setFilteredMembers(teamDetails.filter(member => member.role === selectedRole));
    }
  }, [selectedRole]);

  // Handle scroll navigation
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsContainerRef.current) {
      const scrollAmount = 200; // Amount to scroll in pixels
      const currentScroll = tabsContainerRef.current.scrollLeft;

      tabsContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="team-container">
      {/* Team Members Section */}
      <section className="team-members-section">
        <h2 className="team-section-title">Meet Our Team</h2>

        {/* Role Tab Navigation with Arrows */}
        <div className="team-tabs-navigation">
          <button
            className="team-tabs-arrow team-tabs-arrow-left"
            onClick={() => scrollTabs('left')}
            aria-label="Scroll tabs left"
          >
            &lt;
          </button>

          <div className="team-tabs-container" ref={tabsContainerRef}>
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

          <button
            className="team-tabs-arrow team-tabs-arrow-right"
            onClick={() => scrollTabs('right')}
            aria-label="Scroll tabs right"
          >
            &gt;
          </button>
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
              department={member.department}
              showViewDetails={false} // Don't show view details button in team page
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIConsortium;