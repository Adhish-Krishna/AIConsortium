import React from 'react';

// Paper Submission Component
const PaperSubmission = () => {
  return (
    <div style={{ 
      marginBottom: '80px', 
      background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '90%',
      margin: '0 auto 60px',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>PAPER SUBMISSION</h2>
      
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc', borderColor: 'white' }}>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          <strong>Submission Guidelines:</strong> We invite authors to submit original research papers, case studies, and review articles relevant to the conference themes. Submissions must adhere to the following guidelines:
        </li>
        <li style={{ textAlign: 'left', fontWeight: 'bold', color: 'white', marginBottom: '10px', borderColor: 'white' }}>
          Accepted full papers [12–15 pages]
        </li>
        <li style={{ textAlign: 'left', fontWeight: 'bold', color: 'white', marginBottom: '10px', borderColor: 'white' }}>
          Accepted short papers [6–8 pages]
        </li>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          Selected registered papers will be published in Scopus indexed proceedings / Journals.
        </li>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          All the submitted manuscripts will be sent for peer review and the corresponding author will be notified the outcome of the review process.
        </li>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          Submitted research work must be original in content amd free from plagiarism. Authors are requested to submit a plagiarism report using <br />iThenticate / Turnitin. Plagiarism should be less than 20% to qualify for the paper to be reviewed.
        </li>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          Submit the manuscripts through the below link.
        </li>
      </ul>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#001f54',
            color: 'white',
            fontWeight: '500',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#023e8a'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#001f54'}
        >
          Submit Your Paper
        </a>
      </div>
    </div>
  );
};

// Important Dates Component
const ImpDates = () => {
  return (
    <div id="important-dates" style={{ 
      marginBottom: '40px', 
      background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '90%',
      margin: '0 auto 60px',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0', fontFamily: 'Georgia, serif' }}>IMPORTANT DATES</h2>

      <table style={{
        width: '80%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        border: '0px solid white',
        borderRadius: '1rem',
        overflow: 'hidden',
        color: '#000',
        margin: '0 auto 30px',
        boxShadow: '0 0 0 3px white'
      }}>
        <tbody>
          {[
            ['Opening Date for Paper Submission', '05.05.2025'],
            ['Last Date for Full Paper Submission', '01.08.2025'],
            ['Notification of Acceptance', '15.10.2025'],
            ['Camera-Ready Paper Submission', '01.11.2025'],
            ['Last Date for Registration', '15.11.2025']
          ].map(([label, date], idx) => (
            <tr key={idx} style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <td style={{ padding: '1.2rem', border: '3px solid white', fontWeight: 'bold', textAlign: 'left' }}>{label}</td>
              <td style={{ padding: '1.2rem', border: '3px solid white', textAlign: 'center', fontWeight: 'bold' }}>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Registration Details Component
const RegDetails = () => {
  return (
    <div id="registration" style={{ 
      marginBottom: '80px', 
      background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '90%',
      margin: '60px auto',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>REGISTRATION DETAILS</h2>
      
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>All accepted papers must be registered</li>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>At least one author must attend the conference to present the paper</li>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>Registration includes conference kit, lunch, and access to all sessions</li>
      </ul>

      <p style={{ marginBottom: '1.5rem', fontWeight: '500', fontSize: '1.1rem' }}>The registration fee for the conference is as follows:</p>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '90%',
          borderCollapse: 'collapse',
          borderRadius: '30px',
          overflow: 'hidden',
          marginBottom: '2rem',
          border: '3px solid white',
          backgroundColor: '#023e8a',
          color: 'white',
          margin: '0 auto 30px',
        }}>
          <thead>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>CATEGORY</th>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>INDIAN DELEGATES</th>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>FOREIGN DELEGATES</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Academician, Research Scholar</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 10,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 125</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Industry person</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 12,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 140</td>
            </tr>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Attendees</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 3,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 75</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontStyle: 'italic', marginBottom: '2rem', textAlign: 'center' }}>
        <strong>Note:</strong> Registration fee inclusive of 18% GST.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>Payment Type: Internet Banking</h2>
      
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{
          width: '90%',
          borderCollapse: 'collapse',
          border: '3px solid white',
          borderRadius: '1rem',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          color: '#000',
          margin: '0 auto 30px',
        }}>
          <thead>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)' }}>
              <th colSpan={2} style={{ padding: '1rem', textAlign: 'center', color: 'white', fontSize: '1.5rem', border: '3px solid white' }}>
                Payment Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Account Number</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 500 }}>1481267367</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Name of the Beneficiary</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>PSG Center for Nonformal and Continuing Education (PSG CNCE)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Address</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Peelamedu, Coimbatore - 641004</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Name of the Bank</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Central Bank of India</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Account Type</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Savings</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>IFSC Code</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>CBIN0280913</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Swift Code</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>CBININBBOSB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Component - This is the main component that will be used in App.jsx
const Reg = () => {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      maxWidth: '1200px',
      margin: '40px auto',
      color: 'white'
    }}>
      <PaperSubmission />
      <RegDetails />
    </div>
  );
};

// Export individual components and default export Reg
// export { PaperSubmission };
export default Reg;