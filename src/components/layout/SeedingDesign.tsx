import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SeedingContainer = styled.section`
  padding: 6rem 0;
  background-color: rgba(25, 113, 156, 0.05);
  color: var(--color-light);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(131, 179, 202, 0.03) 0%, transparent 25%),
                radial-gradient(circle at 80% 60%, rgba(25, 113, 156, 0.05) 0%, transparent 40%);
    z-index: 0;
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
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const DesignSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 3rem 0 6rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeatureTitle = styled(motion.h3)`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: var(--color-secondary);
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FeatureText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: var(--color-light);
  opacity: 0.9;
`;

const FeaturePointWrapper = styled.div`
  margin-top: 1rem;
`;

const FeaturePoint = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const PointIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const PointText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-light);
`;

const MapContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 15px 50px rgba(0, 0, 19, 0.3);
  margin-bottom: 2rem;
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    transition: transform 0.5s;
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 19, 0.1);
    z-index: 1;
    pointer-events: none;
  }
`;

const DataOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 19, 0.8);
  backdrop-filter: blur(10px);
  padding: 15px;
  border-radius: 10px;
  z-index: 2;
  border: 1px solid rgba(131, 179, 202, 0.5);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  p {
    margin: 5px 0;
    font-size: 1rem;
    color: var(--color-light);
    font-weight: 500;
  }
  
  span {
    color: var(--color-secondary);
    font-weight: 600;
  }
`;

const LocationSection = styled.div`
  padding: 3rem 0;
`;

const SeedingDesign: React.FC = () => {
  return (
    <SeedingContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Diseño de Siembra
        </SectionTitle>
        
        <DesignSection>
          <LeftContent>
            <FeatureTitle
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Distribución del cultivo en la parcela
            </FeatureTitle>
            
            <FeatureText
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nuestro diseño de siembra optimiza el espacio y favorece la simbiosis entre cultivos. Implementamos técnicas de asociación de cultivos para un mayor aprovechamiento de los nutrientes del suelo y control natural de plagas.
            </FeatureText>
            
            <FeaturePointWrapper>
              <FeaturePoint
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <PointIcon>🌱</PointIcon>
                <PointText>Surco 1 (S1): 30 cm entre planta para cultivo de frijol.</PointText>
              </FeaturePoint>
              
              <FeaturePoint
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <PointIcon>🌱</PointIcon>
                <PointText>Surco 2 (S2): 60cm entre planta para frijol y pepino.</PointText>
              </FeaturePoint>
              
              <FeaturePoint
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <PointIcon>🌱</PointIcon>
                <PointText>Surco 3 (S3): 60cm entre planta para cultivo de pepino.</PointText>
              </FeaturePoint>
              
              <FeaturePoint
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <PointIcon>🌱</PointIcon>
                <PointText>Cama 1 (C1): 60cm entre planta para lechuga, sembrada en tres bolillos.</PointText>
              </FeaturePoint>
              
              <FeaturePoint
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <PointIcon>🌱</PointIcon>
                <PointText>Cama 2 (C2): 60cm entre plantas de lechuga y aromáticas, en tres bolillos.</PointText>
              </FeaturePoint>
              
              <FeaturePoint
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <PointIcon>🚿</PointIcon>
                <PointText>Zanja: 20cm de profundidad para asegurar buen drenaje.</PointText>
              </FeaturePoint>
            </FeaturePointWrapper>
          </LeftContent>
          
          <MapContainer
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ padding: '1rem', backgroundColor: 'rgba(0, 0, 19, 0.8)' }}
          >
            <img src="/images/Proyecto nuevo(10).png" alt="Plano de distribución del huerto" />
            <DataOverlay>
              <p><span>Área:</span> 50m² cultivables</p>
              <p><span>Dimensiones:</span> 5m x 10m</p>
              <p><span>Cultivos:</span> 3 surcos, 2 camas</p>
            </DataOverlay>
          </MapContainer>
        </DesignSection>
        
        <LocationSection>
          <FeatureTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            Ubicación Geográfica de la Granja Agroecológica
          </FeatureTitle>
          
          <FeatureText
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
          >
            La Granja Agroecológica UNIMINUTO está estratégicamente ubicada en una zona con condiciones ideales para la experimentación agrícola y el desarrollo de cultivos sostenibles.
          </FeatureText>
          
          <MapContainer
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem', backgroundColor: 'rgba(0, 0, 19, 0.8)' }}
          >
            <img src="/images/GRANJA2.jpg" alt="Ubicación geográfica de la granja agroecológica" />
            <DataOverlay>
              <p><span>GRANJA AGROECOLÓGICA</span></p>
              <p><span>Perímetro:</span> 783 metros</p>
              <p><span>Área:</span> 38.286 metros cuadrados</p>
              <p><span>Latitud:</span> 4°41'11.58"N</p>
              <p><span>Longitud:</span> 13°36'9.11"O</p>
            </DataOverlay>
          </MapContainer>
        </LocationSection>
      </ContentWrapper>
    </SeedingContainer>
  );
};

export default SeedingDesign; 