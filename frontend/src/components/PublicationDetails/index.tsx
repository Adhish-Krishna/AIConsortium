import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PublicationDetails from './PublicationDetails'
import { publications, Publication } from '../../data/publications';

const PublicationDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we'll simulate a fetch with a timeout
    const fetchPublication = async () => {
      setLoading(true);
      try {
        setTimeout(() => {
          const foundPublication = publications.find(pub => pub.id === id);
          if (foundPublication) {
            setPublication(foundPublication);
          }
          setLoading(false);
        }, 500); // Simulate network delay
      } catch (error) {
        console.error('Error fetching publication:', error);
        setLoading(false);
      }
    };

    fetchPublication();
  }, [id]);

  if (loading) {
    return <div className="loading-container">Loading publication...</div>;
  }

  if (!publication) {
    return (
      <div className="error-container">
        <h2>Publication not found</h2>
        <button onClick={() => navigate('/publications')} className="back-button">
          <ArrowLeft size={18} /> Back to Publications
        </button>
      </div>
    );
  }

  return (
    <div>
      <PublicationDetails {...publication} />
    </div>
  );
};

export default PublicationDetailsPage;
