import React from 'react';
import ImageSlider from './ImageSlider.jsx';
import {
  AppContainer,
  InfoSection,
  SliderContainer,
  Title,
  Line
} from './App.styles';

import PSGLogo from '../assets/PSG_College_of_Technology_logo.png';
import AIConsLogo from '../assets/AI_Cons_logo.png';

const MainContent = () => {
  return (
    <AppContainer>
      <InfoSection style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        flexWrap: 'wrap',
        
      }}>
        <img
          src={PSGLogo}
          alt="PSGCT Logo"
          style={{ height: '100px', width: 'auto', marginRight: '1.8rem', filter: 'brightness(0.9)' }}
        />

        <div style={{ textAlign: 'center', minWidth: '300px', margin: '0 1rem' }}>
          <h1 style={{ margin: '0', fontSize: '1.8rem', color: '#fff' }}>PSG COLLEGE OF TECHNOLOGY</h1>
          <p style={{ margin: '0.5rem 0', fontSize: '1.1rem', color: '#ddd' }}>Coimbatore, Tamil Nadu , India - 641004</p>
          <h2 style={{ margin: '0', fontSize: '1.4rem', color: '#fff' }}>PSG - <span style={{ fontWeight: 'bold' }}>AI CONSORTIUM</span></h2>
        </div>

        <img
          src={AIConsLogo}
          alt="AI Consortium Logo"
          style={{ height: '120px', width: 'auto', marginLeft: '1rem' }}
        />
      </InfoSection>

      <SliderContainer>
        <Title style={{ width: '100%', whiteSpace: 'nowrap', textAlign: 'center' }}>
          INTERNATIONAL CONFERENCE
          <Line />
          on
          <Line />
          THE AI SPECTRUM: BRIDGING RESEARCH, INDUSTRY & INNOVATION
          <Line />
          Date : 22 - 24 December 2025
        </Title>
        <ImageSlider style={{ width: '200%', height: '100%' }} />
      </SliderContainer>
    </AppContainer>
  );
};

export default MainContent;
