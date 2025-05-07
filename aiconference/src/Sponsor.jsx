import React from "react";
import psgcare from './assets/psgcare.png';

const Sponsor = () => {
  return (
    <>
      <style>{`
        .sponsor-card {
          background: linear-gradient(135deg, #007FCF, #00B4DB);
          color: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          text-align: center;
          font-weight: 500;
        }

        .sponsor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.35);
        }
      `}</style>

      <div
        style={{
          width: "100%",
          background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
          padding: "50px 20px",
          textAlign: "center",
          boxSizing: "border-box",
          margin: 0,
          marginTop: "60px",
          marginBottom: "60px",
          borderRadius: "20px", // 👈 Curved edges here
        }}
      >
        {/* Section Title */}
        <h2
          style={{
            color: "#fff",
            fontSize: "2rem",
            marginBottom: "40px",
          }}
        >
          Sponsors
        </h2>

        {/* Sponsor Cards Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="sponsor-card" style={{ width: "200px" }}>
              To be announced
            </div>
          ))}
        </div>

        {/* Association Line with Logo below */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "1.6rem",
              margin: 0,
            }}
          >
            In association with
          </h2>
          <img
            src={psgcare}
            alt="PSG CARE"
            style={{
              height: "50px",
              borderRadius: "10px",
              background: "#fff",
              padding: "5px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Sponsor;
