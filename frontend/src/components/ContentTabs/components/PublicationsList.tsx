import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Publication } from '../../../data/publications';
import { useNavigate } from 'react-router-dom';

interface PublicationsListProps {
  publications: Publication[];
}

const PublicationsList: React.FC<PublicationsListProps> = ({
  publications,
}) => {
  const navigate = useNavigate();

  const handlePublicationClick = (publicationId: string) => {
    navigate(`/publications/${publicationId}`);
  };

  return (
    <div className="publications-list">
      {publications.map((publication, index) => (
        <motion.div
          key={publication.id}
          className="publication-card"
          onClick={() => handlePublicationClick(publication.id)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="publication-image-container">
            <img
              src={publication.imageUrl || '/placeholder-publication.jpg'}
              alt={publication.title}
              className="publication-image"
            />
          </div>
          <div className="publication-details">
            <div className="publication-meta">
              {publication.journal} • {publication.year}
            </div>
            <h3 className="publication-title">{publication.title}</h3>
            <p className="publication-authors">
              {typeof publication.authors === 'string'
                ? publication.authors
                : publication.authors.map(author => author.name).join(', ')}
            </p>
            <p className="publication-abstract">{publication.abstract}</p>
            <button
              className="learn-more"
              onClick={(e) => {
                e.stopPropagation();
                handlePublicationClick(publication.id);
              }}
            >
              Read more <ArrowRight className="small-icon" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PublicationsList;
