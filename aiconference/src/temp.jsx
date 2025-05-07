import React, { useEffect } from 'react';
import ProfileCard from './profilecard'; 
import NormalCardGrid from './normalcard';
import Dr_GRK from './assets/Dr_GRK.jpg';
import VinothImage from './assets/Vinoth Kumar.png';

const TempComponent = () => {
  // Set background color when component mounts
  useEffect(() => {
    document.body.style.backgroundColor = '#1E3A8A';
    document.body.style.margin = '0';
    
    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  
  return (
    <div style={{
      padding: '70px 20px 40px 20px', // Reduced side padding for mobile
      color: 'white',
      fontFamily: 'Georgia, serif',
      maxWidth: '1280px',
      margin: '0 auto',
      overflowX: 'hidden', // Prevent horizontal scrolling on mobile
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        fontSize: 'calc(1.5rem + 1vw)' // Responsive font size
      }}>ORGANIZING COMMITTEE</h1>

      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '25px',
        fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
      }}>PATRON</h2>
      <div style={{ 
        marginBottom: '40px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '20px 15px', // Reduced padding for mobile
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px', 
            fontWeight: '800' 
          }}>Shri L Gopalakrishnan</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '400',  
            fontSize: '1.2em'
          }}>Managing Trustee<br />PSG & Sons' Charities</h4>
        </div>
      </div>
      
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '25px',
        fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
      }}>CO - PATRON</h2>
      <div style={{ 
        marginBottom: '40px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '20px 15px', // Reduced padding for mobile
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px', 
            fontWeight: '800' 
          }}>Dr K Prakasan</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '400',  
            fontSize: '1.2em'
          }}>Principal <br />PSG College of Technology</h4>
        </div>
      </div>
      
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '25px',
        fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
      }}>GENERAL CHAIRS</h2>
      <div style={{ 
        marginBottom: '40px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '20px 15px', // Reduced padding for mobile
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr G R Karpagam</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor <br />Department of Computer Science and Engineering<br />Director, PSG - AI Consortium<br />PSG College of Technology</h4>
        </div>
        
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr B Vinoth Kumar</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '1px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor <br />Department of Information Technology<br />IT Infrastructure and Networking -Technical Lead, PSG - AI Consortium<br />PSG College of Technology</h4>
        </div>
      </div>
      
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '25px',
        fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
      }}>ORGANIZING CHAIRS</h2>
      <div style={{ 
        marginBottom: '40px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '20px 15px', // Reduced padding for mobile
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr D Indumathi</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Associate Professor <br />Department of Computer Science and Engineering<br />PSG College of Technology</h4>
        </div>
        
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr R Rekha</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '1px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Associate Professor <br /> Department of Information Technology<br />PSG College of Technology</h4>
        </div>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr K Sathiyapriya</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Associate Professor <br />Department of Computer Science and Engineering<br />PSG College of Technology</h4>
        </div>
        
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr R Senthil Prabha</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '1px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Associate Professor <br />Department of Information Technology<br />PSG College of Technology</h4>
        </div>
      </div>
      
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '25px',
        fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
      }}>ORGANIZING CO - CHAIR</h2>
      <div style={{ 
        marginBottom: '40px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '20px 15px', // Reduced padding for mobile
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr Ferrante Neri</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor of Machine Learning and Artificial Intelligence<br />University of Surrey , United Kingdom</h4>
        </div>
      </div>
      
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '25px',
        fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
      }}>SCIENTIFIC COMMITTEE CHAIRS</h2>
      <div style={{ 
        marginBottom: '40px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '20px 15px', // Reduced padding for mobile
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr Pablo Moscato </h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor of Data Science<br />
          University of Newcastle, Australia</h4>
        </div>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr Sudha Ramalingam </h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor & Head , Community Medicine<br />
          Director - Research and Innovation<br />
          PSG Institute of Medical Science and Research , India</h4>
        </div>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr Millie Pant </h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor & Head <br />
          Department of Applied Mathematics and Scientific Computing<br />
          Indian Institute of Technology Roorke , India</h4>
        </div>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr B Malar</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor <br />
          Department of Applied Mathematics and Computational Sciences<br />
          PSG College of Technology , India</h4>
        </div>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr Arun Rajkumar</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Assistant Professor <br />
          Department of Computer Science and Engineering<br />
          Indian Institute of Technology Madras , India</h4>
        </div>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr B Sangeetha</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '1px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Assistant Professor(Sl.Gr) <br />Department of Information Technology<br />
          PSG College of Technology</h4>
        </div>
      </div>
      
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '25px',
        fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
      }}>ADVISORY COMMITTEE</h2>
      <div style={{ 
        marginBottom: '40px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '20px 15px', // Reduced padding for mobile
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '25px',
          fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
        }}>NATIONAL ADVISORY COMMITTEE</h2>
        
        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '10px',
          overflow: 'auto', // Enable horizontal scrolling for tables on mobile
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}>
          <table style={{
            width: '100%',
            minWidth: '600px', // Ensure table content doesn't get too squished
            borderCollapse: 'collapse',
            color: 'white',
            textAlign: 'left'
          }}>
            <tbody>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Albert Sunny
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Indian Institute of Science Bangalore, Karnataka
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Badri Narayan Subudhi
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Indian Institute of Technology Jammu , Jammu & Kashmir
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Vineeth N Balasubramaniam
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Indian Institute of Technology Hyderabad 
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Siva Kumar K
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Indian Institute of Technology Hyderabad 
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Sonali Agarwal
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Indian Institute of Information Technology Allahabad
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Vijayakumar Krishnasamy
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Indian Institute of Information Technology Design and Manufacturing Kancheepuram
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr R Dhanalakshmi
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Indian Institute of Information Technology, Trichy
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Shelly Sachdeva
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  National Institute of Technology, Delhi
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Fazal A Talukdar
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  National Institute of Technology Silchar, Assam
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Santhi Thilagam
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  National Institute of Technology  Karnataka ,Surathkal
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Surendran B
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  National Institute of Technology Puducherry, Karaikal
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr S Nickolas
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  National Institute of Technology Trichy 
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr V Govindasamy
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Pondicherry Engineering College, Puducherry
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Amit Konar
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Jadavpur University, Kolkata
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr C S Saravana Kumar
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Bosch Global Software Technologies Private Limited, Coimbatore
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Mr Siddarth Narayanan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Office of Principal Scientific Adviser, Government of India
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Ms Sudha Velusamy
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Samsung R&D Institute, Bangalore
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Mr Mukund Bhoovaraghavan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Microsoft, Hyderabad
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Mr Thiyagarajan Subramani
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Continental Technical Center, India
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Mr Srikanth Subramaniam
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Salesforce , Banglore
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 style={{ 
          textAlign: 'center', 
          margin: '40px 0 25px',
          fontSize: 'calc(1.2rem + 0.5vw)' // Responsive font size
        }}>INTERNATIONAL ADVISORY COMMITTEE</h2>
        
        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '10px',
          overflow: 'auto', // Enable horizontal scrolling for tables on mobile
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}>
          <table style={{
            width: '100%',
            minWidth: '600px', // Ensure table content doesn't get too squished
            borderCollapse: 'collapse',
            color: 'white',
            textAlign: 'left'
          }}>
            <tbody>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Chunting Chris Mi
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  San Diego State University, USA
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Dong-Soo Kwon
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  KAIST, South Korea
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Vikram Kapila
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  NYU Tandon School of Engineering, USA
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Xiao-Zhi Gao
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  University of Eastern Finland, Finland
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Yuval Shavitt
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Tel Aviv University, Israel
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Richard Voyles
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Purdue University, USA
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Jai Govind Singh
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Asian Institute of Technology, Bangkok
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Vigna Kumaran Ramachandaramurthy
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Universiti Tenaga Nasional, Malaysia
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Ahmed Zobaa
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Brunel University, London, UK
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Tan Wei Hong
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Universiti Malaysia Perlis, Malaysia
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr Barath Narayanan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  University of Dayton Research Institute, USA
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Dr M Murugappan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Kuwait College of Science and Technology , Kuwait
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Ms Abinaya Nagarajan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  JP Morgan Chase & Co., Singapore
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px' }}>
                  Dr P N Suganthan
                </td>
                <td style={{ padding: '12px 20px' }}>
                  Qatar University , Qatar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <style jsx>{`
        @media screen and (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          h4 {
            font-size: 1rem !important;
          }
          table {
            font-size: 0.9rem;
          }
          td {
            padding: 10px 12px !important;
          }
        }
        
        @media screen and (max-width: 480px) {
          h1 {
            font-size: 1.6rem;
          }
          h2 {
            font-size: 1.3rem;
          }
          h4 {
            font-size: 0.9rem !important;
          }
          table {
            font-size: 0.8rem;
          }
          td {
            padding: 8px 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TempComponent;

