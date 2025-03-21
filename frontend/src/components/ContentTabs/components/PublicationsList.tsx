import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Define Publication type
interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  abstract: string;
  imageUrl?: string;
}

interface PublicationsListProps {
  publications: Publication[];
  onPublicationClick: (publicationId: string) => void;
}

const PublicationsList: React.FC<PublicationsListProps> = ({
  publications,
  onPublicationClick,
}) => {
  return (
    <div className="publications-list">
      {publications.map((publication, index) => (
        <motion.div
          key={publication.id}
          className="publication-card"
          onClick={() => onPublicationClick(publication.id)}
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
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-abstract">{publication.abstract}</p>
            <button
              className="learn-more"
              onClick={(e) => {
                e.stopPropagation();
                onPublicationClick(publication.id);
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
