import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav<{ scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(0, 0, 19, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 5px 20px rgba(0, 0, 19, 0.3)' : 'none'};
  
  @media (max-width: 992px) {
    padding: 1rem 3rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 0.8rem;
    transition: transform 0.3s;
    
    &:hover {
      transform: rotate(10deg);
    }
  }
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MenuItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: var(--color-dark);
    backdrop-filter: blur(10px);
    box-shadow: -10px 0 30px rgba(0, 0, 19, 0.5);
    transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 1000;
    padding: 2rem;
  }
`;

const MenuItem = styled(motion.a)<{ $scrolled: boolean }>`
  margin: 0 1.2rem;
  color: var(--color-light);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, var(--color-secondary), var(--color-primary));
    transition: width 0.3s;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 0;
    font-size: 1.1rem;
  }
`;

const ActionButton = styled(motion.button)`
  background: linear-gradient(to right, var(--color-secondary), var(--color-primary));
  color: var(--color-light);
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  margin-left: 1.5rem;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(25, 113, 156, 0.4);
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
    padding: 0.8rem 2rem;
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-light);
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--color-light);
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 19, 0.7);
  z-index: 999;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
  backdrop-filter: blur(3px);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <Nav scrolled={scrolled}>
        <Logo $scrolled={scrolled}>
          <img src="/images/clima logo.png" alt="Clima Logo" />
          <span>ClimaData</span>
      </Logo>
      
        <MobileMenuButton onClick={toggleMenu}>
          ☰
        </MobileMenuButton>
      
        <MenuItems isOpen={isOpen}>
          <CloseButton onClick={closeMenu}>×</CloseButton>
          <MenuItem 
            href="/" 
            $scrolled={scrolled}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Inicio
          </MenuItem>
          <MenuItem 
            href="/datos" 
            $scrolled={scrolled}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Datos Climáticos
          </MenuItem>
          <MenuItem 
            href="/mapas" 
            $scrolled={scrolled}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Mapas
          </MenuItem>
          <MenuItem 
            href="/investigacion" 
            $scrolled={scrolled}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Investigación
          </MenuItem>
          <MenuItem 
            href="/noticias" 
            $scrolled={scrolled}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Noticias
          </MenuItem>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Acceso
          </ActionButton>
        </MenuItems>
      </Nav>
      
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Navbar;