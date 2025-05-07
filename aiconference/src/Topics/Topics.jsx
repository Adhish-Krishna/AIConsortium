import React, { useState, useEffect, useRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import { 
  FaAtom, FaIndustry, FaRocket, FaChevronDown, FaBolt
} from 'react-icons/fa';

const cardStyle = {
  width: '450px', // Increased width for better readability when 2 per line
  height: '320px',
  margin: '15px',
  cursor: 'pointer',
};

const frontBackSharedStyle = {
  background: 'linear-gradient(135deg, #004AAD, #00B4D8)',
  color: '#fff',
  padding: '30px',
  borderRadius: '20px',
  border: '4.5px solid #BCC6CC',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
};

const TopicCard = ({ title, description, topics, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const contentRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  // Use useEffect to calculate dimensions when component mounts or flips
  useEffect(() => {
    if (isFlipped && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
      setContainerHeight(contentRef.current.clientHeight);
    }
  }, [isFlipped]);

  // Determine if there's more content to scroll down to
  const hasMoreContent = contentHeight > containerHeight && scrollPosition < contentHeight - containerHeight;

  return (
    <div style={cardStyle}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{height: '100%'}}>
        {/* Front */}
        <div key="front" style={{ 
          ...frontBackSharedStyle, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }} onClick={handleClick}>
          {icon && <div style={{ fontSize: '2.5em', marginBottom: '15px' }}>{icon}</div>}
          <h3 style={{ 
            fontFamily: 'Libre Baskerville, Georgia, serif', 
            fontSize: '1.5em', 
            fontWeight: 'bold',
            margin: '0 0 10px 0'
          }}>{title}</h3>
          <p style={{ fontSize: '0.9em', marginTop: '15px', opacity: 0.8 }}>Click to view topics</p>
        </div>

        {/* Back */}
        <div key="back" style={{ 
          ...frontBackSharedStyle, 
          padding: '20px', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          overflowY: 'hidden',
          position: 'relative'
        }} onClick={handleClick}>
          <h4 style={{ 
            fontFamily: 'Libre Baskerville, Georgia, serif', 
            fontSize: '1.2em', 
            fontWeight: 'bold', 
            marginTop: '0',
            marginBottom: '8px'
          }}>{description}</h4>
          <div 
            ref={contentRef}
            style={{ 
              overflowY: 'auto', 
              flex: 1,
              paddingRight: '10px',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            onScroll={handleScroll}
          >
            <ul style={{ 
              listStyleType: 'disc', 
              paddingLeft: '20px', 
              fontSize: '0.9em', 
              textAlign: 'left', 
              margin: 0 
            }}>
              {topics.map((topic, index) => (
                <li key={index} style={{ marginBottom: '4px' }}>{topic}</li>
              ))}
            </ul>
          </div>
          
          {/* Show down arrow when content exceeds container height */}
          {(contentHeight > containerHeight) && (
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              fontSize: '1.2em',
              pointerEvents: 'none',
              animation: hasMoreContent ? 'none' : 'fadeOut 0.5s forwards'
            }}>
              <FaChevronDown />
            </div>
          )}

          {/* Add CSS for scrollbar hiding and arrow animation */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
            @keyframes fadeOut {
              to { opacity: 0; }
            }
          `}</style>
        </div>
      </ReactCardFlip>
    </div>
  );
};

const TopicsSection = () => {
  const topicsData = [
    {
      title: 'Track 1: AI Genesis',
      description: 'Origin, Evolution, and Development of AI Technologies',
      icon: <FaAtom />,
      topics: [
        'Evolution of Machine Learning Algorithms',
        'Neural Networks: From Perceptrons to Deep Learning',
        'Perspectives on AI Research',
        'Reinforcement Learning Development',
        'AI Hardware Evolution (CPUs → GPUs → TPUs)',
        'Benchmarking and Dataset Evolution',
        'Explainability in Early AI Systems'
      ]
    },
    {
      title: 'Track 2: AI Impact',
      description: 'Transforming Industries, Societies, and Workspaces',
      icon: <FaIndustry />,
      topics: [
        'AI in Healthcare: Diagnosis, Imaging, Drug Discovery',
        'Smart Manufacturing and Industry 4.0',
        'AI in Education and Personalized Learning',
        'Smart Cities and Urban Intelligence',
        'AI and Ethics in Society',
        'Societal and Behavioral Impacts of AI',
        'AI Regulations and Policy Frameworks'
      ]
    },
    {
      title: 'Track 3: AI Horizon',
      description: 'Future Trends, Innovations, and the Next Frontiers of AI',
      icon: <FaRocket />,
      topics: [
        'Artificial General Intelligence (AGI)',
        'Quantum Machine Learning',
        'Federated Learning and Data Privacy',
        'Trustworthy and Transparent AI',
        'Emotionally Intelligent AI',
        'Autonomous Vehicles and Robotics',
        'Edge AI and Next-Gen Hardware'
      ]
    },
    {
      title: 'Track 4: AI Disrupt',
      description: 'Breakthroughs & Cross-Disciplinary Disruptions',
      icon: <FaBolt />,
      topics: [
        'Agentic AI and Next-Gen Autonomous Agents',
        'Large Language Models as Generalist Agents (GPT, Claude, Gemini)',
        'AI-Augmented Creativity and Generative Design',
        'AI + Blockchain: Decentralized Intelligence',
        'Digital Twins and Simulation-Based AI',
        'AI in the Metaverse and XR (VR/AR/MR)',
        'Synthetic Data and Data-Centric AI'
      ]
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
      borderRadius: '20px',
      padding: '40px 30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      maxWidth: '1200px',
      margin: '40px auto',
    }}>
      <h2 style={{ 
        fontFamily: 'Libre Baskerville, Georgia, serif',
        fontSize: '2em', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '30px',
        color: 'white',
      }}>CONFERENCE TRACKS & TOPICS</h2>
      
      {/* First row: Track 1 and Track 2 */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center', 
        flexWrap: 'wrap',
        gap: '40px',
        marginBottom: '30px',
      }}>
        {topicsData.slice(0, 2).map((data, index) => (
          <TopicCard 
            key={index} 
            title={data.title} 
            description={data.description}
            topics={data.topics} 
            icon={data.icon} 
          />
        ))}
      </div>
      
      {/* Second row: Track 3 and Track 4 */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '40px',
      }}>
        {topicsData.slice(2, 4).map((data, index) => (
          <TopicCard 
            key={`row2-${index}`} 
            title={data.title} 
            description={data.description}
            topics={data.topics} 
            icon={data.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default TopicsSection;