import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './latestainews.css';
import {mockNewsData} from '../../data/latestainewsdata';
import { NewsItem } from '../../data/latestainewsdata';

const LatestAINews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left'
        ? -container.offsetWidth * 0.8
        : container.offsetWidth * 0.8;

      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="latest-ai-news">
      <div className="news-container">
        <h2 className="news-section-title">Latest AI News</h2>

        {loading ? (
          <div className="loading">Loading latest news...</div>
        ) : (
          <div className="news-scroll-container">
            <button
              className="scroll-button scroll-left"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              &#10094;
            </button>

            <div className="news-grid" ref={scrollContainerRef}>
              {news.map((item: NewsItem, index: number) => (
                <motion.div
                  className="news-card"
                  key={item.id}
                  initial={{ opacity: 0, translateY: 50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="news-image">
                    <img src={item.imageUrl} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <span className="news-source">{item.source}</span>
                      <span className="news-date">{item.date}</span>
                    </div>
                    <h3 className="news-title">{item.title}</h3>
                    <a href={item.url} className="read-more">Read More</a>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              className="scroll-button scroll-right"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestAINews;
