import React, { useState, useEffect } from 'react';
import './latestainews.css';
import {mockNewsData} from '../../data/latestainewsdata';
import { NewsItem } from '../../data/latestainewsdata';

const LatestAINews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate API fetch
  useEffect(() => {
    const fetchNews = async () => {
      // Replace with actual API call in the future
      // const response = await fetch('api/news');
      // const data = await response.json();

      setTimeout(() => {
        setNews(mockNewsData);
        setLoading(false);
      }, 500); // Simulating network delay
    };

    fetchNews();
  }, []);

  return (
    <section className="latest-ai-news">
      <div className="news-container">
        <h2 className="section-title">Latest AI News</h2>

        {loading ? (
          <div className="loading">Loading latest news...</div>
        ) : (
          <div className="news-grid">
            {news.map((item: NewsItem) => (
              <div className="news-card" key={item.id}>
                <div className="news-image">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-source">{item.source}</span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-description">{item.description}</p>
                  <a href={item.url} className="read-more">Read More</a>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="view-all-container">
          <a href="/" className="view-all-button">View All News</a> {/*Should navigate to /news. */}
        </div>
      </div>
    </section>
  );
};

export default LatestAINews;
