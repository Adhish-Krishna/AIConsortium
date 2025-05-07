import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #023e8a 0%, #0077b6 100%);
  color: #FFFFFF;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 2rem 0;
  
  > * {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
    padding: 1.5rem 0;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  padding: 2rem;
  background:#023e8a;
  backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  z-index: 3;
`;

export const InfoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CollegeTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin:auto;
  padding:auto;
  letter-spacing: 1px;
  color: #ffffff;
`;

export const Address = styled.p`
  font-size: 1.3rem;
  margin:auto;
  padding:auto;
  color: #ffffff;
  opacity: 0.9;
`;

export const ConsortiumTitle = styled.h3`
  font-size: 1.4rem;
  margin:auto;
  padding:auto;
  color: #ffffff;
  font-weight: 500;
`;

export const SliderContainer = styled.div`
  flex: 1;
  position: relative;
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  z-index: 2;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.5),
    0 0 10px rgba(255, 255, 255, 0.3);
  line-height: 1.4;
  max-width: 70%;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 1.5rem;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.3)
  );
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem;
  }
`;

export const Line = styled.div`
  width: 80px;
  height: 2px;
  background: linear-gradient(to right, transparent, white, transparent);
  margin: 0.8rem auto;
`; 