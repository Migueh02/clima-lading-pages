import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
    flex-direction: column;
`;

const HeroSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url('/images/Clima y Cultivos.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 19, 0.3);
  }
`;

const Content = styled.div`
  z-index: 1;
  max-width: 800px;
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--color-light);
  text-shadow: 0 0 20px rgba(0, 0, 19, 0.8);
  
  span {
    color: var(--color-secondary);
  }
  
  @media (max-width: 768px) {
    font-size: 3.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.5;
  color: var(--color-light);
  text-shadow: 0 0 10px rgba(0, 0, 19, 0.8);
  max-width: 700px;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const HeroButton = styled(motion.button)`
  background: linear-gradient(to right, var(--color-secondary), var(--color-primary));
  color: var(--color-light);
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(25, 113, 156, 0.5);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(25, 113, 156, 0.7);
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-light);
  font-size: 0.9rem;
  z-index: 10;
`;

const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid var(--color-light);
  border-radius: 25px;
  margin-bottom: 10px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--color-light);
    border-radius: 50%;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    animation: scrollAnimation 2s infinite;
  }
  
  @keyframes scrollAnimation {
    0% {
      opacity: 1;
      top: 10px;
    }
    100% {
      opacity: 0;
      top: 30px;
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer id="inicio">
      <HeroSection>
      <Content>
        <Title 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            Agroclimatología: <span>El Clima y los Cultivos</span>
             
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            Este boletín climático se encarga de difundir información del clima, vinculando la agroclimatología en un sistema productivo de Pepino, Frijol Lima, Maíz, Orégano, Limonaria, Menta, Romero, Lechuga y Orellana, para relacionar estos sistemas productivos con el clima y cumplir la función de agroclimatología.
        </Subtitle>

      </Content>
        
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ScrollIcon />
          <span>Desliza hacia abajo</span>
        </ScrollIndicator>
      </HeroSection>
    </HeroContainer>
  );
};

export default Hero; 