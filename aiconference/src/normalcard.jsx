import React from 'react';

const NormalCard = ({ name, designation, organization, iconUrl, details, link }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #004AAD, #00B4D8)',
        color: '#FFFFFF',
        borderRadius: '20px',
        padding: '25px',
        width: '260px',
        textAlign: 'center',
        margin: '15px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        border: '4px solid #BCC6CC',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
      }}
    >
      {iconUrl && (
        <div
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #E5E4E2, #BCC6CC)',
            padding: '5px',
            display: 'inline-block',
            marginBottom: '15px',
          }}
        >
          <img
            src={iconUrl}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      <h2
        style={{
          margin: '15px 0 10px 0',
          fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
          fontWeight: '1000',
          letterSpacing: '0.4px',
          fontSize: '1.2em',
          color: '#FFFFFF',
        }}
      >
        {name}
      </h2>
      <h5
        style={{
          margin: '4.5px 0',
          fontSize: '1em',
          fontFamily: 'Georgia, Times, "Times New Roman", serif',
          fontWeight: '500',
        }}
      >
        {designation}
      </h5>
      {organization && (
        <h6
          style={{
            margin: '10px 0 0 0',
            fontSize: '1.0em',
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontWeight: '500',
          }}
        >
          {organization}
        </h6>
      )}
      <button
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          background: '#FFFFFF',
          color: '#004AAD',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
        onClick={() => window.open(link, '_blank')}
      >
        Know More 
      </button>
    </div>
  );
};

const NormalCardGrid = ({ cards }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        padding: '10px',
      }}
    >
      {cards.map((card, index) => (
        <NormalCard
          key={index}
          name={card.name}
          designation={card.designation}
          organization={card.organization}
          iconUrl={card.iconUrl}
          details={card.details}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default NormalCardGrid;
