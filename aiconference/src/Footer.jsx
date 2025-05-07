import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: "20px",
        color: "#ffffff",
        textAlign: "center",
        padding: "30px 20px",
        fontSize: "1.1rem",
        borderTop: "4px solid #ffffff44",
        width: "100%", // full-width
        marginTop: "40px",
        boxSizing: "border-box",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Developed By PSG-AI CONSORTIUM</p>
      <p></p>
    </footer>
  );
};

export default Footer;