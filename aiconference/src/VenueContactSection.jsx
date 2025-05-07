import React from "react";

const VenueContactSection = () => {
  return (
    <>
      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .contact-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: black;
        }
      `}</style>

      <div
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
          borderRadius: "20px", // 👈 Added curved edges
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            padding: "30px 15px",
            boxSizing: "border-box",
          }}
        >
          {/* Event Venue */}
          <div
            className="hover-card"
            style={{
              background: "linear-gradient(135deg, #007FCF, #00B4DB)",
              borderRadius: "15px",
              padding: "15px",
              color: "#fff",
              boxShadow: "0 5px 10px rgba(0,0,0,0.25)",
              flex: "1 1 250px",
              maxWidth: "300px",
              border: "2px solid #c9d6e3",
            }}
          >
            <h2 style={{ fontSize: "1.2em", marginBottom: "6px" }}>
              Event Venue
            </h2>
            <p style={{ fontSize: "0.9em" }}>
              PSG College of Technology, Avinashi Rd, Peelamedu, Coimbatore,
              Tamil Nadu 641004
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1914993660457!2d77.00282279999999!3d11.0242544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1744041410975!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "160px",
                border: "0",
                borderRadius: "8px",
                marginTop: "10px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location"
            ></iframe>
          </div>

          {/* Contact Us */}
          <div
            className="hover-card"
            style={{
              background: "linear-gradient(135deg, #007FCF, #00B4DB)",
              borderRadius: "15px",
              padding: "15px",
              color: "#fff",
              boxShadow: "0 5px 10px rgba(0,0,0,0.25)",
              flex: "1 1 250px",
              maxWidth: "300px",
              border: "2px solid #c9d6e3",
            }}
          >
            <h2 style={{ fontSize: "1.2em", marginBottom: "6px" }}>
              Contact Us
            </h2>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                {[["Dr D Indumathi", "+91 7708126502"],
                  ["Dr R Rekha", "+91 9842163683"],
                  ["Dr K Sathiyapriya", "+91 9952419595"],
                  ["Dr R Senthil Prabha", "+91 9942912788"]].map(
                  ([name, phone], i) => (
                    <tr key={i}>
                      <td
                        style={{
                          padding: "6px 6px 6px 0",
                          fontSize: "0.9em",
                          textAlign: "left",
                          width: "60%",
                        }}
                      >
                        <strong>{name}</strong>
                      </td>
                      <td
                        style={{
                          padding: "6px 0",
                          fontSize: "0.9em",
                          textAlign: "left",
                          width: "40%",
                        }}
                      >
                        <a
                          className="contact-link"
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                        >
                          {phone}
                        </a>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <p style={{ fontSize: "0.9em", marginTop: "10px" }}>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:aiconsortium@psgtech.ac.in"
                className="contact-link"
              >
                aiconsortium@psgtech.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VenueContactSection;
