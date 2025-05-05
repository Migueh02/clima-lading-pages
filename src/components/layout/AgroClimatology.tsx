import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SectionContainer = styled.section`
  background-color: rgba(0, 0, 19, 0.9);
  padding: 6rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 15% 25%, rgba(25, 113, 156, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 85% 75%, rgba(131, 179, 202, 0.05) 0%, transparent 35%);
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
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-secondary);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const IntroText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0 auto 3rem;
  max-width: 800px;
  color: var(--color-light);
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const PlantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 4rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PlantCard = styled(motion.div)`
  background: rgba(25, 113, 156, 0.1);
  border: 1px solid rgba(131, 179, 202, 0.15);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 19, 0.3);
    border-color: rgba(131, 179, 202, 0.3);
  }
`;

const PlantImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
    
    ${PlantCard}:hover & {
      transform: scale(1.1);
    }
  }
`;

const PlantInfo = styled.div`
  padding: 1.5rem;
`;

const PlantName = styled.h3`
  font-size: 1.3rem;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
  
  span {
    font-style: italic;
    opacity: 0.8;
    font-size: 1rem;
  }
`;

const PlantDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-light);
  opacity: 0.8;
`;

// Carrusel
const CarouselContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 15px 50px rgba(0, 0, 19, 0.5);
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  width: 100%;
`;

const CarouselSlide = styled(motion.div)`
  min-width: 100%;
  height: 450px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`;

const CarouselNav = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const CarouselDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 19, 0.7);
  border: none;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(5px);
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(25, 113, 156, 0.8);
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

// Modal para mostrar las etapas fenológicas
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
  max-height: 90%;
  background-color: rgba(25, 113, 156, 0.1);
  border: 1px solid rgba(131, 179, 202, 0.3);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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

const AgroClimatology: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlantDetail, setSelectedPlantDetail] = useState('');
  
  const plants = [
    {
      name: "Lechuga",
      scientific: "Lactuca sativa",
      image: "/images/plants/Lechuga (Lactuca sativa).jpeg",
      detailImage: "/images/detalles/lechuga.png",
      description: "Cultivo de ciclo corto, sensible a las altas temperaturas y requiere riego constante."
    },
    {
      name: "Orégano",
      scientific: "Origanum vulgare",
      image: "/images/plants/Orégano.jpeg",
      detailImage: "/images/detalles/oregano.png",
      description: "Planta aromática mediterránea adaptada a climas secos y suelos bien drenados."
    },
    {
      name: "Maíz",
      scientific: "Zea mays",
      image: "/images/plants/Maíz (Zea mays).jpeg",
      detailImage: "/images/detalles/maiz.png",
      description: "Cultivo básico cuyo crecimiento depende de la acumulación de grados-día y disponibilidad de agua."
    },
    {
      name: "Menta",
      scientific: "Mentha",
      image: "/images/plants/Menta (Mentha).jpeg",
      detailImage: "/images/detalles/menta.png",
      description: "Aromática que prospera en climas templados con suelos húmedos pero bien drenados."
    },
    {
      name: "Pepino",
      scientific: "Cucumis sativus",
      image: "/images/plants/Pepino en estado de germinacion.jpeg",
      detailImage: "/images/detalles/pepino.png",
      description: "Requiere temperaturas moderadas a cálidas y sensible a las heladas y sequías."
    },
    {
      name: "Romero",
      scientific: "Salvia rosmarinus",
      image: "/images/plants/Romero (Salvia rosmarinus.jpeg",
      detailImage: "/images/detalles/romero.png",
      description: "Arbusto mediterráneo resistente a la sequía y adaptado a climas cálidos y secos."
    },
    {
      name: "Orellana",
      scientific: "Pleurotus ostreatus",
      image: "/images/plants/Orellana (Pleurotus ostreaus.jpeg",
      detailImage: "/images/detalles/orella.png",
      description: "Hongo que crece en condiciones húmedas y temperaturas moderadas, muy sensible al clima."
    },
    {
      name: "Frijol Lima",
      scientific: "Phaseolus vulgaris",
      image: "/images/plants/Frijol.jpeg",
      detailImage: "/images/detalles/frijol lima.png",
      description: "Leguminosa tropical que requiere temperaturas cálidas y sensible a las heladas."
    }
  ];
  
  const carouselImages = plants.map(plant => plant.image);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide(prev => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(prev => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };
  
  const openModal = (detailImage: string) => {
    setSelectedPlantDetail(detailImage);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };
  
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Plantas involucradas en el sistema productivo y fenología
        </SectionTitle>
        
        <IntroText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Haz clic en cualquier planta para ver sus etapas fenológicas detalladas
        </IntroText>
        
        <CarouselContainer>
          <CarouselTrack
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CarouselSlide>
              <img src={carouselImages[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            </CarouselSlide>
          </CarouselTrack>
          
          <CarouselButton className="prev" onClick={prevSlide}>
            &#10094;
          </CarouselButton>
          <CarouselButton className="next" onClick={nextSlide}>
            &#10095;
          </CarouselButton>
          
          <CarouselNav>
            {carouselImages.map((_, index) => (
              <CarouselDot 
                key={index} 
                active={currentSlide === index} 
                onClick={() => goToSlide(index)}
              />
            ))}
          </CarouselNav>
        </CarouselContainer>
        
        <PlantGrid>
          {plants.map((plant, index) => (
            <PlantCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(plant.detailImage)}
            >
              <PlantImage>
                <img src={plant.image} alt={plant.name} />
              </PlantImage>
              <PlantInfo>
                <PlantName>
                  {plant.name} <span>({plant.scientific})</span>
                </PlantName>
                <PlantDescription>{plant.description}</PlantDescription>
              </PlantInfo>
            </PlantCard>
          ))}
        </PlantGrid>
        
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
                <ModalImage src={selectedPlantDetail} alt="Etapas fenológicas" />
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default AgroClimatology; 