import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 19, 0.97);
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
    background: radial-gradient(circle at 90% 90%, rgba(25, 113, 156, 0.15) 0%, transparent 30%);
    pointer-events: none;
  }
`;

const FooterTop = styled.div`
  background: linear-gradient(to right, rgba(25, 113, 156, 0.1), rgba(131, 179, 202, 0.1));
  padding: 1rem 0;
  text-align: center;
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: 1px solid rgba(131, 179, 202, 0.3);
  background: rgba(25, 113, 156, 0.1);
  border-radius: 4px 0 0 4px;
  color: var(--color-light);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;

const NewsletterButton = styled.button`
  background: linear-gradient(to right, var(--color-secondary), var(--color-primary));
  color: var(--color-light);
  padding: 0.8rem 1.5rem;
  border-radius: 0 4px 4px 0;
  font-weight: 500;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 2rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--color-secondary);
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.8rem;
  }
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
`;

const FooterText = styled.p`
  color: var(--color-light);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-light);
  background: rgba(25, 113, 156, 0.2);
  border: 1px solid rgba(131, 179, 202, 0.2);
  transition: transform 0.3s, background 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    background: var(--color-primary);
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const QuickLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: var(--color-light);
    opacity: 0.8;
    transition: opacity 0.3s, color 0.3s;
    display: flex;
    align-items: center;
    
    &:before {
      content: '→';
      margin-right: 0.5rem;
      color: var(--color-secondary);
    }
    
    &:hover {
      opacity: 1;
      color: var(--color-secondary);
    }
  }
`;
  
const ContactInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  span {
    width: 20px;
    height: 20px;
    margin-right: 0.8rem;
    color: var(--color-secondary);
  }
  
  p {
    color: var(--color-light);
    opacity: 0.8;
    line-height: 1.5;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(131, 179, 202, 0.1);
  padding: 1.5rem 2rem;
  text-align: center;
  
  p {
    color: var(--color-light);
    opacity: 0.6;
  font-size: 0.9rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <NewsletterForm>
          <NewsletterInput type="email" placeholder="Suscríbete a nuestro boletín climático" />
          <NewsletterButton type="submit">Suscribir</NewsletterButton>
        </NewsletterForm>
      </FooterTop>
      
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <img src="/images/clima-logo.png" alt="Clima Logo" />
            <span>ClimaData</span>
          </FooterLogo>
          <FooterText>
            Proporcionamos información climática precisa y análisis científicos para ayudar a las personas y organizaciones a entender y adaptarse a los cambios climáticos.
          </FooterText>
          <SocialLinks>
            <SocialLink 
              href="https://facebook.com" 
              target="_blank" 
              aria-label="Facebook"
              whileHover={{ scale: 1.1 }}
            >
              f
            </SocialLink>
            <SocialLink 
              href="https://twitter.com" 
              target="_blank" 
              aria-label="Twitter"
              whileHover={{ scale: 1.1 }}
            >
              t
            </SocialLink>
            <SocialLink 
              href="https://instagram.com" 
              target="_blank" 
              aria-label="Instagram"
              whileHover={{ scale: 1.1 }}
            >
              ig
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com" 
              target="_blank" 
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
            >
              in
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Enlaces Rápidos</FooterTitle>
          <QuickLinks>
            <QuickLink><a href="/datos-climaticos">Datos Climáticos</a></QuickLink>
            <QuickLink><a href="/mapas-interactivos">Mapas Interactivos</a></QuickLink>
            <QuickLink><a href="/previsiones">Previsiones a Largo Plazo</a></QuickLink>
            <QuickLink><a href="/investigacion">Investigación Científica</a></QuickLink>
            <QuickLink><a href="/eventos-meteorologicos">Eventos Meteorológicos</a></QuickLink>
            <QuickLink><a href="/calentamiento-global">Calentamiento Global</a></QuickLink>
          </QuickLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contacto</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <span>📍</span>
              <p>Av. Científica 1234, Instituto Climático</p>
            </ContactItem>
            <ContactItem>
              <span>✉️</span>
              <p>info@climadata.com</p>
            </ContactItem>
            <ContactItem>
              <span>📞</span>
              <p>+34 123 456 789</p>
            </ContactItem>
          </ContactInfo>
          <FooterText>
            También puedes encontrarnos en organizaciones climáticas internacionales y eventos científicos globales.
          </FooterText>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} ClimaData. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;