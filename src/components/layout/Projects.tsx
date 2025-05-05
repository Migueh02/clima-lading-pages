import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 90% 10%, rgba(25, 113, 156, 0.1) 0%, transparent 30%),
                radial-gradient(circle at 10% 90%, rgba(131, 179, 202, 0.05) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--color-secondary);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 4rem;
  color: var(--color-light);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  margin-bottom: 3rem;
  }
`;

const AgroclimatologySection = styled.div`
  margin-bottom: 6rem;
`;

const RecommendationsSection = styled.div`
  margin-bottom: 6rem;
`;

const ConclusionesSection = styled.div`
  margin-bottom: 6rem;
`;

const SectionSubtitle = styled(motion.h3)`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-secondary);
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 19, 0.3);
`;

const ImageWrapper = styled.div`
  width: 100%;
  
  img {
  width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
  }
`;

const CaptionTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--color-secondary);
`;

const CaptionText = styled.p`
  font-size: 1rem;
  color: var(--color-light);
  line-height: 1.6;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <ContentWrapper>
        <AgroclimatologySection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Influencia de la agroclimatología en relación con el establecimiento de los sistemas productivos en la granja
          </SectionTitle>
          
          <SectionText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Como se mencionó antes las plantas tienen sus condiciones climáticas, el reto es adaptar los sistemas productivos a la granja con las buenas prácticas, también investigar qué sistemas productivos se pueden implementar con más adaptación en una región, las condiciones climáticas influyen mucho en el desarrollo fenológico de una planta.
          </SectionText>
        </AgroclimatologySection>
        
        <RecommendationsSection>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Recomendaciones Agroclimáticas
          </SectionSubtitle>
          
          <SectionText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Al realizar el diseño de siembra asegurarse de que la profundidad sea de 20cm a 30cm debido a que se puede inundar debido a las altas precipitaciones, en la siguiente imagen se observará un sistema productivo inundado de frijol, también de alimentar bien los sistemas productivos, porque les puede dar patologías, también se va a observar la lechuga con patologías.
          </SectionText>
          
          <ImagesContainer>
            <ImageCard
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWrapper>
                <img src="/images/233.png" alt="Sistema productivo inundado de frijol" />
              </ImageWrapper>
            </ImageCard>
            
            <ImageCard
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ImageWrapper>
                <img src="/images/xddd.png" alt="Lechuga con patologías" />
              </ImageWrapper>
            </ImageCard>
          </ImagesContainer>
        </RecommendationsSection>
        <ConclusionesSection>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Conclusiones
          </SectionSubtitle>
          
          <SectionText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <br></br>1. No todas las plantas tienen las mismas condiciones climáticas, por eso el tiempo de la fenología se puede ver afectado si el cultivo no se adapta climáticamente.
            <br></br>2. Las BPA (Buenas Practicas Agrícolas) fueron importantes porque al realizar las zanjas con un poco profundidad algunos sistemas productivos de frijol se vieron afectados por los microorganismos del agua en la precipitación.
            <br></br>3. Se debe investigar el tema de agro climatología para así mirar los climas que hay para realizar un diseño de siembra.
          </SectionText>
          
        </ConclusionesSection>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default Projects; 