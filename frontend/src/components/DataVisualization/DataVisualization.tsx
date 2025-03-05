import React from 'react';
import './DataVisualization.css';

const DataVisualization: React.FC = () => {
  const topics = [
    { name: "Generative AI", percentage: 78 },
    { name: "AI Ethics", percentage: 65 },
    { name: "Neural Networks", percentage: 54 },
    { name: "Computer Vision", percentage: 42 },
    { name: "Reinforcement Learning", percentage: 38 }
  ];

  const years = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const growthData = [30, 45, 60, 75, 85, 95];

  return (
    <section className="data-section">
      <div className="container">
        <div className="section-header">
          <h2 className="data-title text-gradient">
            AI Trends & Insights
          </h2>
          <p className="data-subtitle">
            Explore the latest trends and insights in artificial intelligence based on our community data.
          </p>
        </div>
        
        <div className="data-grid">
          <div className="data-card">
            <h3 className="data-card-title">Most Discussed Topics</h3>
            <div className="topics-list">
              {topics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <div className="topic-header">
                    <span className="topic-name">{topic.name}</span>
                    <span className="topic-percentage">{topic.percentage}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${topic.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="data-card">
            <h3 className="data-card-title">Community Growth</h3>
            <div className="chart-container">
              <div className="bar-chart">
                {growthData.map((height, index) => (
                  <div key={index} className="chart-bar-container">
                    <div 
                      className="chart-bar" 
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="chart-labels">
                {years.map((year, index) => (
                  <span key={index} className="year-label">{year}</span>
                ))}
              </div>
            </div>
            <div className="chart-caption">
              <p>500% growth over the last 5 years</p>
            </div>
          </div>
          
          <div className="data-card">
            <h3 className="data-card-title">Global Distribution</h3>
            <div className="map-container">
              <div className="map-overlay">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="World Map" 
                  className="world-map"
                />
                <div className="map-stats">
                  <div className="countries-count">52</div>
                  <div className="countries-label">Countries</div>
                  <div className="region-stats">
                    <div className="region">North America: 42%</div>
                    <div className="region">Europe: 28%</div>
                    <div className="region">Asia: 22%</div>
                    <div className="region">Others: 8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;