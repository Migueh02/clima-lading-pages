import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ToolsSection = styled.section`
  background-color: var(--color-dark);
  padding: 5rem 4rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, transparent, var(--color-dark));
    transform: translateY(-100%);
  }
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const ToolsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--color-secondary);
`;

const ToolsSubtitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-primary);
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ToolCard = styled(motion.div)<{ clickable?: boolean }>`
  background: rgba(25, 113, 156, 0.1);
  border: 1px solid rgba(131, 179, 202, 0.2);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(25, 113, 156, 0.2);
    border: 1px solid rgba(131, 179, 202, 0.4);
  }
`;

const ToolIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
`;

const ToolTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-secondary);
`;

const ToolText = styled.p`
  font-size: 1rem;
  color: var(--color-light);
  line-height: 1.5;
`;

// Modal para mostrar imágenes históricas
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 19, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  max-width: 90%;
  max-height: 90vh;
  background-color: rgba(25, 113, 156, 0.1);
  border: 1px solid rgba(131, 179, 202, 0.3);
  border-radius: 15px;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(25, 113, 156, 0.05);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(131, 179, 202, 0.3);
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 19, 0.7);
  border: none;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1010;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(25, 113, 156, 0.8);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HistoricImage = styled.div`
  margin-bottom: 2rem;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ForecastImage = styled.div`
  margin: 0 auto 2rem;
  max-width: 700px;
  width: 80%;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ImageTitle = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
  color: var(--color-secondary);
  text-align: center;
`;

const WeatherExplanation = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(25, 113, 156, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(131, 179, 202, 0.2);
`;

const ExplanationTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--color-secondary);
  text-align: center;
`;

const ExplanationText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-light);
  margin-bottom: 1rem;
`;

const ExplanationPoint = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  
  span {
    color: var(--color-secondary);
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

// Nuevo contenedor de lado a lado para la imagen y el texto
const SideBySideContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CurrentWeatherImageContainer = styled.div`
  flex: 0 0 40%;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const ExplanationContainer = styled.div`
  flex: 0 0 55%;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const ClimaticTools: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>('historical');

  const openHistoricalModal = () => {
    setModalContent('historical');
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const openCurrentWeatherModal = () => {
    setModalContent('current');
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const openForecastModal = () => {
    setModalContent('forecast');
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const openSeasonalModal = () => {
    setModalContent('seasonal');
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const openYieldModal = () => {
    setModalContent('yield');
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const openOtherToolsModal = () => {
    setModalContent('other');
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const openStationsModal = () => {
    setModalContent('stations');
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const historicalImages = [
    {
      src: "/images/Clima histórico de la región en febrero.png",
      title: "Clima histórico de la región en Febrero"
    },
    {
      src: "/images/Clima histórico de la región en marzo.png",
      title: "Clima histórico de la región en Marzo"
    },
    {
      src: "/images/Clima histórico de la región en abril.png",
      title: "Clima histórico de la región en Abril"
    },
    {
      src: "/images/Clima histórico de la región hasta el 4 de mayo.png",
      title: "Clima histórico de la región hasta el 4 de Mayo"
    }
  ];

  const stationImages = [
    {
      src: "/images/Humedad.png",
      title: "Humedad relativa (%)"
    },
    {
      src: "/images/precipitacion.png",
      title: "Precipitación (mm)"
    },
    {
      src: "/images/radiacion solar.png",
      title: "Radiación solar (W/m2)"
    },
    {
      src: "/images/temperatura.png",
      title: "Temperatura (°C)"
    }
  ];

  const tools = [
    {
      icon: "📚",
      title: "Climas históricos",
      clickable: true,
      onClick: openHistoricalModal
    },
    {
      icon: "🌦️",
      title: "Tiempo atmosférico actual",
      clickable: true,
      onClick: openCurrentWeatherModal
    },
    {
      icon: "☀️",
      title: "Pronóstico para próximos días",
      clickable: true,
      onClick: openForecastModal
    },
    {
      icon: "🌱",
      title: "Predicción climática estacional",
      clickable: true,
      onClick: openSeasonalModal
    },
    {
      icon: "📊",
      title: "Pronóstico de rendimiento",
      clickable: true,
      onClick: openYieldModal
    },
    {
      icon: "🔧",
      title: "Otras herramientas",
      clickable: true,
      onClick: openOtherToolsModal
    },
    {
      icon: "📡",
      title: "Estaciones climáticas",
      clickable: true,
      onClick: openStationsModal
    }
  ];
  
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };
  
  return (
    <ToolsSection>
      <ToolsTitle id="Herramientas">Nuestras Herramientas Climáticas</ToolsTitle>
      <ToolsSubtitle>Basadas en Fedearroz y Meteoblue</ToolsSubtitle>
      <ToolsGrid>
        {tools.map((tool, index) => (
          <ToolCard 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            clickable={tool.clickable}
            onClick={tool.onClick}
          >
            <ToolIcon>{tool.icon}</ToolIcon>
            <ToolTitle>{tool.title}</ToolTitle>
          </ToolCard>
        ))}
      </ToolsGrid>
      
      <AnimatePresence>
        {modalOpen && (
          <ModalOverlay
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <CloseButton onClick={closeModal}>✕</CloseButton>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              {modalContent === 'historical' && (
                <ImageContainer>
                  {historicalImages.map((image, index) => (
                    <HistoricImage key={index}>
                      <ImageTitle>{image.title}</ImageTitle>
                      <img src={image.src} alt={image.title} />
                    </HistoricImage>
                  ))}
                </ImageContainer>
              )}
              
              {modalContent === 'current' && (
                <ImageContainer>
                  <ImageTitle>Interpretación del Tiempo Atmosférico Mediante Canal Infrarrojo</ImageTitle>
                  
                  <SideBySideContainer>
                    <CurrentWeatherImageContainer>
                      <img src="/images/tiempo atmosferico actual.png" alt="Tiempo atmosférico actual" />
                    </CurrentWeatherImageContainer>
                    
                    <ExplanationContainer>
                      <WeatherExplanation>
                        <ExplanationTitle>¿Cómo interpretar esta herramienta?</ExplanationTitle>
                        <ExplanationText>
                          El canal infrarrojo es un instrumento fundamental para la observación meteorológica que permite evaluar las condiciones del cielo y la probabilidad de precipitación. Está basado en la interpretación de imágenes satelitales en tiempo real.
                        </ExplanationText>
                        
                        <ExplanationPoint>
                          <span>1.</span> Nubes altas (color rojo-amarillo): Indican mayor probabilidad de lluvia intensa debido a su composición y altura.
                        </ExplanationPoint>
                        
                        <ExplanationPoint>
                          <span>2.</span> Nubes bajas (verde): Presentan menor altura y mayor contenido de agua, asociadas con probabilidad de llovizna.
                        </ExplanationPoint>
                        
                        <ExplanationPoint>
                          <span>3.</span> Cielo libre de nubes (azul): Indica condiciones de cielo despejado y baja probabilidad de precipitación.
                        </ExplanationPoint>
                        
                        <ExplanationText>
                          Para utilizar correctamente esta herramienta, compare la vista del cielo en su ubicación con las imágenes de referencia y la escala de colores. Esto le permitirá evaluar las condiciones atmosféricas actuales y tomar decisiones informadas para sus actividades agrícolas.
                        </ExplanationText>
                      </WeatherExplanation>
                    </ExplanationContainer>
                  </SideBySideContainer>
                </ImageContainer>
              )}
              
              {modalContent === 'forecast' && (
                <ImageContainer>
                  <ImageTitle>Pronóstico del Tiempo para los Próximos Días</ImageTitle>
                  <ForecastImage>
                    <img src="/images/Pronostico del tiempo para los próximos días.(1).png" alt="Pronóstico para los próximos días" />
                  </ForecastImage>
                  
                  <WeatherExplanation>
                    <ExplanationTitle>Guía para utilizar esta herramienta</ExplanationTitle>
                    <ExplanationText>
                      Esta herramienta de pronóstico muestra la previsión meteorológica para los próximos días, permitiéndole planificar sus actividades agrícolas con anticipación.
                    </ExplanationText>
                    
                    <ExplanationPoint>
                      <span>1.</span> Seleccione el municipio o zona de su interés haciendo clic sobre el mapa interactivo.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>2.</span> Consulte el pronóstico diario que incluye temperatura, precipitación y condiciones generales del tiempo.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>3.</span> Utilice esta información para planificar siembras, cosechas, aplicación de insumos y otras actividades sensibles a las condiciones climáticas.
                    </ExplanationPoint>
                  </WeatherExplanation>
                </ImageContainer>
              )}
              
              {modalContent === 'seasonal' && (
                <ImageContainer>
                  <ImageTitle>Predicción Climática Estacional</ImageTitle>
                  
                  <WeatherExplanation>
                    <ExplanationTitle>Importancia de la predicción estacional</ExplanationTitle>
                    <ExplanationText>
                      El objeto de la predicción climática estacional es prever la alteración del clima con respecto al comportamiento histórico para los siguientes meses.
                    </ExplanationText>
                    
                    <ExplanationPoint>
                      <span>•</span> Permite anticipar periodos de sequía o exceso de lluvias
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>•</span> Facilita la planificación de cultivos a mediano plazo
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>•</span> Ayuda a optimizar el uso de recursos como agua y energía
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>•</span> Contribuye a la toma de decisiones estratégicas en la agricultura
                    </ExplanationPoint>
                  </WeatherExplanation>
                </ImageContainer>
              )}
              
              {modalContent === 'yield' && (
                <ImageContainer>
                  <ImageTitle>Pronóstico de Rendimiento por Cultivo</ImageTitle>
                  
                  <WeatherExplanation>
                    <ExplanationTitle>Relación entre condiciones climáticas y rendimiento de cultivos</ExplanationTitle>
                    
                    <ExplanationPoint>
                      <span>Pepino:</span> El pepino ha tenido buena adaptación debido a su resistencia al clima, el pepino se suele sembrar a una temperatura de entre los 20ºC a 28ºC.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>Frijol:</span> El frijol se suele sembrar entre 10ºC a 28ºC según la variedad, en este caso se usó el frijol lima que tiene mejor adaptación a climas con altas temperaturas.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>Maíz:</span> Se siembra entre una temperatura de 21ºC a 27ºC siendo la planta que mas se adapta a los entornos climáticos.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>Lechuga:</span> La lechuga se siembra entre 15ºC a 20ºC, para mantenerla en un entorno como Villavicencio se recomienda con poli sombra o realizar policultivos de maíz como se realizó en este caso, si la lechuga se moja y después hay sol, se puede quemar.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>Orégano:</span> El orégano se suele sembrar a 20 a 25º, estos cuatro meses debido a las temperaturas variadas y precipitaciones, tuvo buen rendimiento.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>Menta:</span> La menta igual que el orégano.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>Romero:</span> El romero igual al ser una aromática.
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>Orellanas (seta):</span> Los cultivos de hongos necesitan entre 20 a 25º, se debe controlar la temperatura si no un hongo patógeno puede hacer competencia de esporas y así el sistema productivo de hongos se pierde, por eso se debe estar pendiente de este sistema productivo todos los días.
                    </ExplanationPoint>
                  </WeatherExplanation>
                </ImageContainer>
              )}
              
              {modalContent === 'other' && (
                <ImageContainer>
                  <ImageTitle>Otras Herramientas Climáticas</ImageTitle>
                  
                  <WeatherExplanation>
                    <ExplanationText>
                      Esta sección ofrece herramientas interactivas para analizar el clima en regiones donde haya sistemas productivos y su relación con los rendimientos de estos. Incluye tableros sobre zonas climáticas, variables meteorológicas, indicadores climáticos y la relación entre clima y productividad, para mayor información investigar en el IDEAM.
                    </ExplanationText>
                    
                    <ExplanationPoint>
                      <span>•</span> Tableros de análisis zonificados por región climática
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>•</span> Herramientas de correlación entre variables meteorológicas y rendimiento
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>•</span> Indicadores de estrés climático para diferentes cultivos
                    </ExplanationPoint>
                    
                    <ExplanationPoint>
                      <span>•</span> Aplicaciones para cálculo de requerimientos hídricos
                    </ExplanationPoint>
                  </WeatherExplanation>
                </ImageContainer>
              )}
              
              {modalContent === 'stations' && (
                <ImageContainer>
                  <ImageTitle>Estaciones Climáticas - Variables Meteorológicas</ImageTitle>
                  
                  {stationImages.map((image, index) => (
                    <HistoricImage key={index}>
                      <ImageTitle>{image.title}</ImageTitle>
                      <img src={image.src} alt={image.title} />
                    </HistoricImage>
                  ))}
                </ImageContainer>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ToolsSection>
  );
};

export default ClimaticTools; 