import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const ResumeSection = styled.section`
  padding: 0;
  background: #0a192f;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: #64ffda;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(17, 34, 64, 0.7);
  border-radius: 8px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Button = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const Resume: React.FC = () => {
  return (
    <ResumeSection id="resume">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Resume</Title>
          <ButtonContainer>
            <Button
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </Button>
            <Button
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye /> View Resume
            </Button>
          </ButtonContainer>
        </motion.div>
      </Container>
    </ResumeSection>
  );
};

export default Resume; 