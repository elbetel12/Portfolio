import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const ContactInfo = styled.div`
  color: #8892b0;
  text-align: center;
  max-width: 600px;
`;

const ContactText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 700px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(17, 34, 64, 0.7);
  border-radius: 6px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #64ffda;
    background: rgba(17, 34, 64, 0.9);
  }
`;

const ContactIcon = styled.div`
  color: #64ffda;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

const ContactTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ContactLabel = styled.span`
  color: #8892b0;
  font-size: 0.8rem;
`;

const ContactValue = styled.span`
  color: #ccd6f6;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
`;

const SocialIcon = styled(motion.a)`
  color: #8892b0;
  font-size: 1.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Contact</Title>
          <ContactContent>
            <ContactInfo>
              <ContactText>
                I'm currently looking for new opportunities. Whether you have a question
                or just want to say hi, I'll try my best to get back to you!
              </ContactText>
              <ContactDetails>
                <ContactItem
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactTextWrapper>
                    <ContactLabel>Location</ContactLabel>
                    <ContactValue>Addis Ababa, Ethiopia</ContactValue>
                  </ContactTextWrapper>
                </ContactItem>
                <ContactItem
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ContactIcon>
                    <FaEnvelope />
                  </ContactIcon>
                  <ContactTextWrapper>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>elbetelmolla25@gmail.com</ContactValue>
                  </ContactTextWrapper>
                </ContactItem>
                <ContactItem
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ContactIcon>
                    <FaPhone />
                  </ContactIcon>
                  <ContactTextWrapper>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>+251 953 456 213</ContactValue>
                  </ContactTextWrapper>
                </ContactItem>
              </ContactDetails>
              <SocialLinks>
                <SocialIcon
                  href="https://github.com/elbetel12"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </SocialIcon>
                <SocialIcon
                  href="https://www.linkedin.com/in/elbetel-molla-0b1b3b1b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </SocialIcon>
                <SocialIcon
                  href="https://www.upwork.com/freelancers/~01a1b1c1d1e1f1g1h1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SiUpwork />
                </SocialIcon>
              </SocialLinks>
            </ContactInfo>
          </ContactContent>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 