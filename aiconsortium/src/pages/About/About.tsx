import './About.css';
import PSG from '../../assets/PSG.jpeg';

function About() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="abt-about-container">
        <div className="abt-hero-section">
          <div className="abt-hero-grid">
            <div className="abt-hero-text">
              <h1 className="abt-epiq-title">EPIQ</h1>
              <p className="abt-epiq-subtitle">Empowering Ethics Progress Innovation and Quality in AI</p>
            </div>
          </div>
        </div>

        <div className="abt-cards-container">
          <section className="abt-card psg-section">
            <div className="abt-card-header">
              <h1 className="text-4xl font-bold" style={{"color":"#DC9E57"}}>About PSG College of Technology</h1>
            </div>
            <div className="abt-card-content">
              <div className="abt-content-image">
                <img
                  src={PSG}
                  alt="PSG College Campus"
                />
              </div>
              <div className="content-text">
                <p className="mb-4 abt-content-text">
                PSG College of Technology, is a Govt. Aided, Autonomous, Affiliated to Anna University and ISO 9001:2015 certified Institution. This is one of the foremost institutions founded by the PSG & Sons' Charities Trust (1926). The College was established in the year 1951 and the Founders wisely decided to locate it in the same campus as the PSG Industrial Institute for effective industry-institute interaction.
                </p>
                <p className="mb-4 abt-content-text" style={{"marginTop":"10px"}}>
                PSG College of Technology is situated at about 8 km from Coimbatore Railway Station and 5 km from Airport. The campus is spread over 45 acres of land, economically utilized for the College, Hostels, Staff Quarters, Play Fields and Gardens.
                </p>
                <div className="abt-stats-container">
                  <div className="abt-stat-item">
                    <span className="abt-stat-value">70+</span>
                    <span className="stat-label">Years of Excellence</span>
                  </div>
                  <div className="abt-stat-item">
                    <span className="abt-stat-value">50+</span>
                    <span className="stat-label">Programs Offered</span>
                  </div>
                  <div className="abt-stat-item">
                    <span className="abt-stat-value">200+</span>
                    <span className="stat-label">Research Projects</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="abt-card ai-section">
            <div className="abt-card-header">
              <h2 className="text-3xl font-bold" style={{"color":"#DC9E57"}}>About PSG - AI Consortium</h2>
            </div>

            <div className="abt-consortium-content">
              <p className="abt-content-text mb-4">
                The advancement of Artificial Intelligence must be paired with a commitment to ethics and Responsible AI (RAI),
                ensuring that innovation aligns with fairness, transparency, and the broader benefit of society.
              </p>

              <p className="abt-content-text mb-4">
                The AI Consortium at PSG College of Technology, inspired by the vision of EPIQ AI – Empowering Ethics, Progress,
                Innovation & Quality in AI, serves as a dynamic platform for fostering AI research, innovation, and industry
                collaboration. With a multidisciplinary approach, it promotes advancements in key AI domains.
                The consortium actively facilitates knowledge exchange through international conferences, workshops, and
                expert-led discussions. It supports faculty and students in groundbreaking research, ensuring that PSG College
                of Technology remains at the forefront of AI advancements.
              </p>

              <div className="abt-quote">
                <p>"AI is not just a tool. It is a catalyst for a smarter, more efficient world."</p>
                <span>– Sundar Pichai</span>
              </div>

              <div className="abt-section-title">
                <h3>Evolution of the AI Consortium</h3>
              </div>
              <p className="abt-content-text mb-4">
                The journey of AI excellence at PSG College of Technology began in 2019 with the establishment of the
                Centre for Artificial Intelligence Research (AIR). This initiative laid the foundation for AI-driven research
                and collaborations, strengthening the institution's commitment to technological advancements.
              </p>
              <p className="abt-content-text mb-4">
                Guided by the philosophy that <em>just as AIR is vital for life, Artificial Intelligence Research is essential
                for progress—fueling the future with innovation and possibility</em>, the centre has been instrumental in driving
                AI-powered solutions, fostering interdisciplinary collaborations, and bridging academia with industry leaders.
              </p>

              <div className="abt-section-title">
                <h3>AI Wing and Specialized Centers</h3>
              </div>
              <p className="abt-content-text mb-4">
                Recognizing AI's transformative potential, the <strong>AI Wing</strong> was established on the 3rd floor of the
                E-Block, managed by the Department of CSE with strong support from the institution. This wing hosts four
                specialized centers, each focused on a critical aspect of AI research and application:
              </p>

              <div className="abt-table-container">
                <table className="abt-table">
                  <thead>
                    <tr>
                      <th>Center Name</th>
                      <th>Research Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Centre for Algorithms and Applied Artificial Intelligence (3AI)</td>
                      <td>Advanced AI algorithms and applications</td>
                    </tr>
                    <tr>
                      <td>Centre for Artificial Intelligence Research (AIR)</td>
                      <td>Fundamental AI research and development</td>
                    </tr>
                    <tr>
                      <td>Centre for Smart Cyber-Physical Systems</td>
                      <td>AI integration in smart systems and IoT</td>
                    </tr>
                    <tr>
                      <td>Centre for Cyber Security and Privacy</td>
                      <td>AI-driven cybersecurity solutions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="abt-content-text mb-4">
                Additionally, the AI Wing tracks global AI trends, research opportunities, and competitions by scraping
                industry news, ensuring continuous engagement with the evolving AI landscape.
              </p>

              <div className="abt-section-title">
                <h3>AI in Indian Education: The 2025 Vision</h3>
              </div>
              <p className="abt-content-text mb-4">
                The year <strong>2025</strong> has been officially designated as the <strong>Year of Artificial Intelligence (AI)</strong>
                by AICTE, underlining its transformative role in reshaping India's education system. AI is not just a technological
                advancement but a catalyst for change across industries, Security, Healthcare, Manufacturing, Finance, Agriculture,
                Governance, Economy and societies. For India to lead this revolution, AI must become a part of higher education system,
                equipping students with the skills necessary for an AI-powered future.
              </p>

              <p className="abt-content-text mb-4">
                As a part of this AI consortium the following measures are to be adopted to affirm India's leadership in AI:
              </p>

              <div className="abt-list-container">
                <ol className="abt-ordered-list">
                  <li>
                    <strong>AI Affirmation Pledge</strong>
                    <ul className="abt-unordered-list">
                      <li>Foster Innovation and research in AI</li>
                      <li>Promote ethical use of AI for social benefit</li>
                      <li>Introduce and Integrate AI courses across various disciplines</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Campus wide campaign (AI for All: The Future Begins Here)</strong>
                    <p>Key elements of the campaign are:</p>
                    <ul className="abt-unordered-list">
                      <li>AI awareness week</li>
                      <li>AI Student Chapters</li>
                      <li>AI Labs</li>
                      <li>AI Career Pathways</li>
                    </ul>
                  </li>
                  <li><strong>AI First Curriculum:</strong> Updating Curriculum to include both foundational and Advanced AI topics, fostering interdisciplinary approaches</li>
                  <li><strong>Faculty Development:</strong> Conducting workshops and certifications to equip faculty with AI teaching expertise</li>
                  <li><strong>Industry Collaboration:</strong> Partnering with AI driven organizations to provide real world exposure through internships, projects and mentorships</li>
                </ol>
              </div>

              <p className="abt-content-text mb-4">
                AICTE's dynamic model curriculum integrates emerging fields such as AI, Quantum computing, Sustainable energy and Defence Technology.
              </p>

              <p className="abt-content-text mb-4">
                As we welcome 2025 as the year of Artificial Intelligence we are looking forward to partnering with AI driven organizations
                to provide real world exposure to students through internships, projects and mentorships.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;