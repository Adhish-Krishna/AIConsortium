import React, { useEffect, useState, useCallback } from 'react';
import ProfileCard from './profilecard'; 
import NormalCardGrid from './normalcard';

import TrusteeImage from './assets/trustee.jpg';
import PrakasanImage from './assets/Prakasan.png';
import GRKImage from './assets/GRK.jpg';
import VinothImage from './assets/Vinoth Kumar.png';
import IndhumathiImage from './assets/Indumathi.png';
import RekhaImage from './assets/Rekha.png';
import SathiyapriyaImage from './assets/Sathiyapriya.png';
import SenthilPrabhaImage from './assets/Senthilprabha.png';
import VijayanImage from './assets/vijayan K.jpg';
import FerranteImage from './assets/ferrante.jpg';
import BhamaImage from './assets/Bhama.png';
import PabloImage from './assets/pablo.jpg';
import GopikaRaniImage from './assets/Gopikarani.png';
import ThirumahalImage from './assets/Thirumahal.png';
import ShanmugamImage from './assets/Shanmugam.png';
import SivaranjiniImage from './assets/Sivaranjani.png';
import MuruganImage from './assets/Murugan.png';
import NirmalaImage from './assets/Nirmala.png';
import ACRImage from './assets/ACR.jpg';
import SangeethaImage from './assets/Sangeetha.png';
import PrakashImage from './assets/Prakash.jpg';
import MPrakashImage from './assets/M.Prakash.png';
import SureshImage from './assets/Suresh.png';
import VijayalakshmiImage from './assets/Vijiyalakashmi.png';
import SivarajImage from './assets/Sivaraj.png';
import MaruthamaniImage from './assets/Maruthamani.png';
import ArulJothiImage from './assets/Aruljothi.png';
import NatarajanImage from './assets/Natarajan.png';
import JayaprasathImage from './assets/Jayaprasanth.png';
import PrabhavathiImage from './assets/Prabavathi.png';
import SureshkumarImage from './assets/Sureshkumar.png';
import BrindhaImage from './assets/Brindha.png';
import KarthikVijaykumarImage from './assets/KarthikVijayakumar.png';
import DharaniImage from './assets/Dharani-DNVAoUd9.jpg';
import saisundara from './assets/SaiSundar.png';
import praveeen from './assets/Praveen.png';
import dhanalakshmi from './assets/Dhanalakshmi.png';
import surjith from './assets/Surjit.png';
import abirami from './assets/Abirami.png';
import kanchana from './assets/kanchana.jpg';
import sridevi from './assets/Sridevi.png';
import kalpana from './assets/Kalpana.png';
import niresh from './assets/NIresh.png';
import veerakumar from './assets/Veerakumar.jpg';
import thillairajan from './assets/Thillairajan.png';
import rajesh from './assets/Rajesh.png';
import kathirvel from './assets/Kathirvel.png';
import anisha from './assets/ANisha.png';
import barath from './assets/Barath.jpg';
import murugappan from './assets/Murugappan.jpg';
import sugunathan from './assets/sugananthan.jpg';
import pablo from './assets/pablo.jpg';
import shelly from './assets/shelly.png';
import sonali from './assets/sonali.jpg';
import badri from './assets/badri.jpg';
import vijaykumar from './assets/vijayakumar.jpg';
import thiyagarajan from './assets/thiyagarajan.jpg';
import siddarth from './assets/siddarth.jpg';
import jorg from './assets/jorg.png';
import amar from './assets/amar.jpg';
import srinivas from './assets/srinivas.png';
import Dr_GRK from '../src/assets/Dr_GRK.jpg';
import arun from './assets/arun.jpg';
import mukundh from './assets/mukund.jpg';
import srikanth from './assets/srikanth.jpg';
import sudha_R from './assets/sudha_R.png';
import Dr_Rekha from './assets/Dr_Rekha.jpg';

function Comitte() {
  useEffect(() => {
    document.body.style.backgroundColor = '#1E3A8A'; 
    document.body.style.margin = '0';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  const sampleNormalCards = [
    { 
      name: 'Dr D Indumathi', 
      designation: "Associate Professor", 
      organization: 'Dept. of Computer Science and Engineering', 
      iconUrl: IndhumathiImage 
    },
    { 
      name: 'Dr R Rekha', 
      designation: 'Associate Professor', 
      organization: 'Dept. of Information Technology', 
      iconUrl: Dr_Rekha 
    },
    { 
      name: 'Dr K Sathiyapriya', 
      designation: 'Associate Professor ', 
      organization: 'Dept. of Computer Science and Engineering', 
      iconUrl: SathiyapriyaImage 
    },
    { 
      name: 'Dr R Senthil Prabha', 
      designation: 'Associate Professor', 
      organization: 'Dept. of Information Technology', 
      iconUrl: SenthilPrabhaImage 
    },
  ];

  const Track1 = [
    {
        name: 'Dr D Indumathi',
        designation: 'Associate Professor ',   
        organization: 'Dept. of Computer Science and Engineering', 
        iconUrl: IndhumathiImage 
    },
    {
        name: 'Dr R Rekha', 
      designation: 'Associate Professor', 
      organization: 'Dept. of Information Technology', 
      iconUrl: Dr_Rekha
    }
  ];
  const Track2 = [
    {
        name: 'Dr K Sathiyapriya',
        designation: 'Associate Professor',   
        organization: 'Dept. of Computer Science and Engineering', 
        iconUrl: SathiyapriyaImage 
    },
    {
      name: 'Dr S Bhama', 
      designation: 'Assistant Professor (Sl.Gr)', 
      organization: 'Dept. of Computer Applications', 
      iconUrl: BhamaImage 
    }
  ];
  const Track3 = [
    {
        name: 'Dr R Senthil Prabha',
        designation: 'Associate Professor',  
        organization: 'Dept. of Information Technology', 
        iconUrl: SenthilPrabhaImage
    },
    {
      name: 'Dr N Gopika Rani', 
      designation: 'Assistant Professor (Sl.Gr)', 
      organization: 'Dept. of Computer Science and Engineering', 
      iconUrl: GopikaRaniImage 
    }
  ];
  const Finance = [
    {
      name: 'Ms R Thirumahal',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: ThirumahalImage,
    },
    {
      name: 'Dr C Shanmugam',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Mechanical Engineering',
      iconUrl: ShanmugamImage,
    },
    {
      name: 'Dr S Sivaranjini',
      designation: 'Assistant Professor(Sr.Gr)',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: SivaranjiniImage,
    },
  ];
  const Tutorial = [
    {
      name: 'Dr R Murugan',
      designation: 'Professor (CAS)',
      organization: 'Dept. of Textile Technology',
      iconUrl: MuruganImage,
    },
    {
      name: 'Dr Nirmala Varghese',
      designation: 'Associate Professor',
      organization: 'Dept. of Apparel and Fashion Design',
      iconUrl: NirmalaImage,
    },
    {
      name: 'Mr A C Ramesh',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: ACRImage,
    },
  ];
  const Publication = [
    {
      name: 'Dr B Sangeetha',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Information Technology',
      iconUrl: SangeethaImage,
    },
    {
      name: 'Mr J Prakash',
      designation: 'Assistant Professor(Sr.Gr)',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: PrakashImage,
    },
    {
      name: 'Mr M Prakash',
      designation: 'Librarian',
      organization: 'Dr GRD Memorial Library , PSG TECH',
      iconUrl: MPrakashImage,
    },
  ];
  const poster = [
    {
      name: 'Dr M Suresh',
      designation: 'Associate Professor ',
      organization: 'Dept. of Robotics and Automation Engineering',
      iconUrl: SureshImage,
    },
    {
      name: 'Dr S Vijayalakshmi',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: VijayalakshmiImage,
    },
    {
      name: 'Dr D Sivaraj',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Electrical and Communication Engineering',
      iconUrl: SivarajImage,
    },
    {
      name: 'Dr D Maruthamani',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Chemistry',
      iconUrl: MaruthamaniImage,
    },
    {
      name: 'Dr S Arul Jothi',
      designation: 'Assistant Professor(Sr.Gr)',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: ArulJothiImage,
    },
  ];
  const govn = [
    {
      name: 'Dr A Natarajan',
      designation: 'Professor(CAS)',
      organization: 'Dept. of Electrical and Electronics Engineering',
      iconUrl: NatarajanImage,
    },
    {
      name: 'Dr D Jayaprasath',
      designation: 'Associate Professor',
      organization: 'Dept. of Instrumentation and Control Engineering',
      iconUrl: JayaprasathImage,
    },
    {
      name: 'Dr J Prabhavathi',
      designation: 'Assistant Professor',
      organization: 'Dept. of English',
      iconUrl: PrabhavathiImage,
    },
  ];
  const industry = [
    {
      name: 'Dr K Suresh Kumar',
      designation: (
        <>
          Director - PSG STEP <br /> Associate Professor & HOD (i/c)
        </>
      ),
      organization: 'Dept. of Humanities',
      iconUrl: SureshkumarImage,
    },
    {
      name: 'Dr D Brindha',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Biomedical Engineering',
      iconUrl: BrindhaImage,
    },
    {
      name: 'Mr G Karthik Vijaykumar',
      designation: 'Assistant Professor(Sr.Gr)',
      organization: 'Dept. of Biotechnology',
      iconUrl: KarthikVijaykumarImage,
    },
    {
      name: 'Ms A Dharani',
      designation: 'Assistant Professor',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: DharaniImage,
    },
  ];
  const publicity = [
    {
      name: 'Dr G Sai Sundara Krishnan',
      designation: 'Professor',
      organization: 'Dept. of Applied Mathematics and Computational Sciences',
      iconUrl: saisundara,
    },
    {
      name: 'Dr S Praveen Kumar',
      designation: 'Associate Professor',
      organization: 'Dept. of Civil Engineering',
      iconUrl: praveeen,
    },
  ];
  const sponsor = [
    {
      name: 'Dr D Dhanalakshmi',
      designation: 'Assistant Professor(Sl.Gr) ',
      organization: 'Dept. of Applied Science',
      iconUrl: dhanalakshmi,
    },
    {
      name: 'Dr R Surjith',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Fashion Technology',
      iconUrl: surjith,
    },
    {
      name: 'Ms S K Abirami',
      designation: 'Assistant Professor',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: abirami,
    },
  ];
const international=[
    {
        name: 'Dr J Kanchana',
        designation: (
            <>
              Director - Global Engagement <br />Professor - Mechanical Engineering 
            </>
          ),
        organization: 'PSG Institute of Advanced Studies',
        iconUrl: kanchana,
      },
      {
        name: 'Dr B Sridevi',
        designation: 'Professor ',
        organization: 'Dept. of Mathematics',
        iconUrl: sridevi,
      },
      {
        name: 'Dr M Kalpana',
        designation: 'Associate Professor',
        organization: 'Dept. of Humanities',
        iconUrl: kalpana,
      },
      {
        name: 'Dr J Niresh',
        designation: 'Assistant Professor(Sr.Gr)',
        organization: 'Dept. of Automobile Engineering',
        iconUrl: niresh,
      },
      {
        name: 'Mr S Veera Kumar',
        designation: 'Assistant Professor',
        organization: 'Dept. of Computer Science and Engineering',
        iconUrl: veerakumar,
      },
];
const panelist = [
    {
      name: 'Dr K Thillairajan',
      designation: 'Associate Professor(CAS)',
      organization: 'Dept. of Mettallurgical Engineering',
      iconUrl: thillairajan,
    },
    {
      name: 'Dr R Rajesh',
      designation: 'Assistant Professor(Sl.Gr)',
      organization: 'Dept. of Production Engineering',
      iconUrl: rajesh,
    },
    {
      name: 'Dr P Kathirvel',
      designation: 'Assistant Professor',
      organization: 'Dept. of Physics',
      iconUrl: kathirvel,
    },
    {
      name: 'Ms C D Anisha',
      designation: 'Assistant Professor',
      organization: 'Dept. of Computer Science and Engineering',
      iconUrl: anisha,
    },
  ];

  const advisoryProfiles = [
    {
      name: "Dr Barath Narayanan",
      designation: (
        <>
          Senior Research Scientist & <br />Adjunct Professor <br />Sensor Software Systems<br />Dept. of ECE
        </>
      ),
      organization: "University of Dayton Research Institute, USA",
      photoUrl: barath
    },
    {
      name: "Dr M Murugappan",
      designation: (
        <>
          Professor<br />Dept. of Electronics and Communication Engineering
        </>
      ),
      organization: "Kuwait college of science and technology, Kuwait",
      photoUrl: murugappan
    },
    {
      name: "Dr P N Suganthan",
      designation: (
        <>
          KINDI Computing Research
        </>
      ),
      organization: (
        <>
          Qatar University<br />Qatar
        </>
      ),
      photoUrl: sugunathan
    },
    
    {
      name: "Dr Shelly Sachadev",
      designation: (
        <>
          Associate Professor <br /> Dept. of Computer Science and Engineering
        </>
      ),
      organization:(
        <>
         National Institute of Technology, Delhi
        </>
      ),
      photoUrl: shelly,
    },
    
    {
      name: "Dr Sonali Agarwal",
      designation:(
        <>
         Associate Professor<br />Dept. of Information Technology
        </>
      ), 
      organization:(
        <>
        Indian Institute of Information Technology Allahabad
        </>
      ) ,
      photoUrl: sonali,
    },
    {
      name: "Dr Badri Narayan Subudhi",
      designation: (
        <>
        Associate Professor<br />Dept. of Electrical Engineering
        </>
      ) ,
      organization: (
        <>
        Indian Institute of Technology Jammu <br /> Jammu and Kashmir
        </>
      ),
      photoUrl: badri,
    },
    {
      name: "Dr Vijayakumar Krishnasamy",
      designation: (
        <>
          Associate Professor<br /> Department of ECE 
        </>
      ),
      organization: (
        <>
          Indian Institute of Information Technology Design and Manufacturing<br />Kancheepuram
        </>
      ),
      photoUrl: vijaykumar
    },
    {
      name: " Mr.Thiyagarajan Subramani",
      designation: (
        <>
          Chief Manager <br />Head of Radar Perception
        </>
      ),
      organization:  (
        <>
          Continental Technical Center<br />India.
        </>
      ),
      photoUrl: thiyagarajan,
    },
    {
      name: "Dr. Sudha Ramalingam",
      designation: (
        <>
          Director-Research & Innovation<br />Professor - Community Medicine<br />PSG Institute of Medical Sciences and Research
        </>
      ),
      organization:"",
      photoUrl: sudha_R,
    },
    {
      name: "Mr. Siddarth Narayanan",
      designation: (
        <>
          Strategic Alliances at <br />Office of Principal Scientific Adviser <br />Government of India <br />National Mission Team member<br />Founding Director of <br />Bharat Tech Foundation
        </>
      ),
      organization: "",
      photoUrl: siddarth
    },
    {
      name:"Dr Vijayan K Asari",
      designation:(
                <>
                  Professor & Director <br />Vision Lab <br /> Department of Electrical and Computer Engineering
                </>
      ),
      organization:"University of Dayton, USA",
      photoUrl: VijayanImage
    },
    {
      name: "Dr Pablo Moscato",
      designation: (
        <>
          Professor of Data Science <br /> School of Information and Physical Sciences (Data Science and Statistics)
        </>
      ),
      organization: "University of Newcastle, Australia",
      photoUrl: PabloImage
    },
    {
      name:"Dr Ferrante Neri",
      designation:(
                <>
                  Professor <br /> Machine Learning and Artificial Intelligence
                </>
      ),
     organization:"University of Surrey , UK",
    photoUrl:FerranteImage
    }
    

  ];

  // State for carousel
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(advisoryProfiles.length / cardsPerSlide);
  const [currentAdvisorySlide, setCurrentAdvisorySlide] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdvisorySlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [totalSlides]);

  // Function to navigate to a specific slide
  const goToSlide = useCallback((slideIndex) => {
    setCurrentAdvisorySlide(slideIndex);
  }, []);

  // Get visible cards for the current slide
  const visibleAdvisoryCards = () => {
    const startIndex = currentAdvisorySlide * cardsPerSlide;
    return advisoryProfiles.slice(startIndex, startIndex + cardsPerSlide);
  };

  const [activeSection, setActiveSection] = useState('Finance');
  const [activeTrack, setActiveTrack] = useState('Track1'); 

  const renderTrackSection = () => {
    switch (activeTrack) {
      case 'Track1':
        return (
          <>
            <ProfileCard
              name="Dr Vijayan K Asari"
              designation={
                <>
                  Professor & Director <br />Vision Lab <br /> Department of Electrical and Computer Engineering
                </>
              }
              organization="University of Dayton, USA"
              photoUrl={VijayanImage}
            />
            <NormalCardGrid cards={Track1} />
          </>
        );
      case 'Track2':
        return (
          <>
            <ProfileCard
              name="Dr Ferrante Neri"
              designation={
                <>
                  Professor <br /> Machine Learning and Artificial Intelligence
                </>
              }
              organization="University of Surrey , UK"
              photoUrl={FerranteImage}
            />
            <NormalCardGrid cards={Track2} />
          </>
        );
      case 'Track3':
        return (
          <>
            <ProfileCard
              name="Dr Pablo Moscato"
              designation={
                <>
                  Professor of Data Science <br /> School of Information and Physical Sciences (Data Science and Statistics)
                </>
              }
              organization="University of Newcastle, Australia"
              photoUrl={PabloImage}
            />
            <NormalCardGrid cards={Track3} />
          </>
        );
      default:
        return null;
    }
  };

  const renderMainSection = () => {
    switch (activeSection) {
      case 'Finance':
        return <NormalCardGrid cards={Finance} />;
      case 'Tutorial':
        return <NormalCardGrid cards={Tutorial} />;
      case 'Publication':
        return <NormalCardGrid cards={Publication} />;
      case 'Poster':
        return <NormalCardGrid cards={poster} />;
      case 'govn':
        return <NormalCardGrid cards={govn} />;
      case 'industry':
        return <NormalCardGrid cards={industry} />;
      case 'publicity':
        return <NormalCardGrid cards={publicity} />;
      case 'sponsor':
        return <NormalCardGrid cards={sponsor} />;
      case 'international':
        return <NormalCardGrid cards={international} />;
      case 'panelist':
        return <NormalCardGrid cards={panelist} />;
      default:
        return null;
    }
  };

 

  return (
    <div className="committee-container" style={{ padding: '40px', fontFamily: 'Georgia, serif', color: '#FFFFFF', position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)', boxSizing: 'border-box' }}>
      <div className="committee-background"></div>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5em',
        marginBottom: '40px',
        color: '#FFFFFF',
        position: 'relative',
      }}>ORGANIZING COMMITTEE</h2>

      {/* Chief Patron and Patron */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap', marginBottom: '60px' }}>
        <div>
          <h2 style={{ textAlign: 'center' }}>CHIEF PATRON</h2>
          <ProfileCard
            name="Shri L Gopalakrishnan"
            designation={
              <>
                Managing Trustee <br /> PSG & Sons' Charities Trust
              </>
            }
            organization=""
            photoUrl={TrusteeImage}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap', marginBottom: '60px' }}>
        <div>
          <h2 style={{ textAlign: 'center'}}>PATRON</h2>
          <ProfileCard
            name="Dr K Prakasan"
            designation={
              <>
                Principal <br />PSG College of Technology 
              </>
            }
            organization=""
            photoUrl={PrakasanImage}
          />
        </div>
      </div>

      {/* Institutional Steering Committee */}
      <div style={{ 
        marginBottom: '60px', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <div style={{ 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
        }}>
          <h2 style={{ marginBottom: '20px' }}>INSTITUTION STEERING COMMITTEE</h2>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ProfileCard
              name={
                <>
                  Director - PSG CARE ,<br />Deans and <br />Head of the Departments
                </>
              }
              designation=""
              organization="PSG College of Technology"
            />
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '25px', fontFamily: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif', letterSpacing: '1px' }}>GENERAL CHAIRS</h2>
      {/* General Chairs */}
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap' }}>
          <div>
            <ProfileCard
              name="Dr G R Karpagam"
              designation={
                <>
                  Professor<br />Dept. of Computer Science and Engineering<br /> Director , PSG - AI Consortium
                </>
              }
              organization=""
              photoUrl={Dr_GRK}
            />
          </div>
          <div>
            <ProfileCard
              name="Dr B Vinoth Kumar"
              designation={
                <>
                  Professor<br /> Dept. of Information Technology<br />Infrastructure Technical Lead ,<br /> PSG - AI Consortium
                </>
              }
              organization=""
              photoUrl={VinothImage}
            />
          </div>
        </div>
      </div>

      {/* Sample Normal Cards Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px', fontFamily: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif', letterSpacing: '1px' }}>ORGANIZING CHAIRS</h2>
        <div style={{ 
           background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
        }}>
          <NormalCardGrid cards={sampleNormalCards} />
        </div>
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', fontFamily: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif', letterSpacing: '1px' }}>ADVISORY BOARD</h2>
      {/* Advisory Board Carousel */}
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Carousel container */}
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          {/* Cards container with transition effect */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '100px', 
            transition: 'opacity 0.5s ease',
          }}>
            {visibleAdvisoryCards().map((profile, index) => (
              <div key={index}>
                <ProfileCard
                  name={profile.name}
                  designation={profile.designation}
                  organization={profile.organization}
                  photoUrl={profile.photoUrl}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '20px', 
            gap: '10px' 
          }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: currentAdvisorySlide === index ? '#00B4D8' : '#004AAD',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Track Chairs Section */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px', fontFamily: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif', letterSpacing: '1px' }}>TRACK CHAIRS</h2>
        {/* Track Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          gap: '20px',
        }}>
          <button
            onClick={() => setActiveTrack('Track1')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              backgroundColor: activeTrack === 'Track1' ? '#00B4D8' : '#004AAD',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '1em',
              fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
              fontWeight: '500',
              letterSpacing: '0.5px',
              transition: 'background-color 0.3s',
            }}
          >
            TRACK 1 <br /><br />AI GENESIS
          </button>
          <button
            onClick={() => setActiveTrack('Track2')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              backgroundColor: activeTrack === 'Track2' ? '#00B4D8' : '#004AAD',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '1em',
              fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
              fontWeight: '500',
              letterSpacing: '0.5px',
              transition: 'background-color 0.3s',
            }}
          >
            TRACK 2 <br /><br />AI IMPACT
          </button>
          <button
            onClick={() => setActiveTrack('Track3')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              backgroundColor: activeTrack === 'Track3' ? '#00B4D8' : '#004AAD',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '1em',
              fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
              fontWeight: '500',
              letterSpacing: '0.5px',
              transition: 'background-color 0.3s',
            }}
          >
            TRACK 3 <br /><br />AI HORIZON
          </button>
        </div>
        {/* Render Active Track */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '60px'
        }}>
          {renderTrackSection()}
        </div>

    <br />
    <br />

      {/* Main Section Tabs */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '20px',
        gap: '20px',
      }}>
        <button
          onClick={() => setActiveSection('Finance')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'Finance' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          FINANCE CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('Tutorial')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'Tutorial' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)',
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          TUTORIAL CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('Publication')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'Publication' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          PUBLICATION CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('Poster')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'Poster' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          POSTER AND EXPO CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('govn')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'govn' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          GOVERNMENT LIASION CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('industry')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'industry' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          INDUSTRY LIASION CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('publicity')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'publicity' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          PUBLICITY AND PUBLIC RELATIONS CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('sponsor')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'sponsor' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          SPONSORSHIP CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('international')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'international' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          INTERNATIONAL LIAISON CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('panelist')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'panelist' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            fontFamily: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          PANELIST LIAISON CHAIRS
        </button>
      </div>

      {/* Render Main Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        color: '#FFFFFF',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {renderMainSection()}
      </div>
      <br />
      <br />
      {/* Keynote Speakers Section */}
      <h2 style={{ 
        textAlign: 'center', 
        marginTop: '60px', 
        marginBottom: '25px',
        fontFamily: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif', 
        letterSpacing: '1px',
        fontSize: '1.8em'
      }}>KEYNOTE SPEAKERS</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        marginBottom: '60px'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px'
        }}>
          {/* First Row */}
          <div style={{
            margin: '10px',
            flex: '0 0 calc(50% - 60px)', // Two cards per row with gap consideration
            maxWidth: 'calc(50% - 60px)',
            display: 'flex',
            justifyContent: 'center'
          }}><ProfileCard
          name="Dr Arun Rajkumar"
          designation={<>
            Assistant Professor <br />Dept. of Data Science and AI <br />Centre for Responsible AI <br />IIT Madras
          </>}
          organization=""
          photoUrl={arun}
        />
          </div>
          <div style={{
            margin: '10px',
            flex: '0 0 calc(50% - 60px)',
            maxWidth: 'calc(50% - 60px)',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <ProfileCard
              name="Dr Amar Aggoun"
              designation={
                <>
                  Professor of Visual Computing &<br />Head of Computer Science <br />Leeds Bekket University
                </>
              }
              organization="London, England, UK"
              photoUrl={amar} // Use the imported amar image
            />
          </div>
          
          {/* Second Row */}
          <div style={{
            margin: '10px',
            flex: '0 0 calc(50% - 60px)',
            maxWidth: 'calc(50% - 60px)',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <ProfileCard
              name="Dr Jorg Frochte"
              designation={
                <>
                  Professor for Applied Computer Science <br />Interdisciplinary Institute of <br />Applied AI and Data Science <br />Bochum University of Applied Sciences
                </>
              }
              organization=""
              photoUrl={jorg} // Use the imported jorg image
            />
          </div>
          <div style={{
            margin: '10px',
            flex: '0 0 calc(50% - 60px)',
            maxWidth: 'calc(50% - 60px)',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <ProfileCard
              name="Dr Srinivas Padmanabhuni"
              designation={
                <>
                  Marax AI, INC <br />AI Advisor at IIIT Lucknow <br />CTO and Co-Founder<br />CityMandi , Bengaluru
                </>
              }
              organization=""
              photoUrl={srinivas} // Use the imported srinivas image
            />
          </div>
          
          {/* Third Row */}
          <div style={{
            margin: '10px',
            flex: '0 0 calc(50% - 60px)',
            maxWidth: 'calc(50% - 60px)',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <ProfileCard
              name="Mr. Mukund Bhoovaraghavan"
              designation={<>
                 Principal Group Engineering Manager <br /> Microsoft Hydrabad
                </>}
              organization=""
              photoUrl={mukundh}
            />
          </div>
          <div style={{
            margin: '10px',
            flex: '0 0 calc(50% - 60px)',
            maxWidth: 'calc(50% - 60px)',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <ProfileCard
              name="Mr Srikanth Subramanian"
              designation={<>
                 Vice President of Engineering at<br />Salesforce , Bengaluru
              </>}
              organization=""
              photoUrl={srikanth}
            />
          </div>
          
          {/* Last Row - Single Card */}
          <div style={{
            margin: '10px',
            flex: '0 0 calc(50% - 60px)',
            maxWidth: 'calc(50% - 60px)',
            display: 'flex',
            justifyContent: 'center'
          }}>
            
          </div>
        </div>
      </div>

      </div> 
      </div></div>
  );
}

export default Comitte;
