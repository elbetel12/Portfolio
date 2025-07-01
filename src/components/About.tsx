import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 0;
  background: #0a192f;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: #64ffda;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Text = styled.div`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.6;

  p {
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(17, 34, 64, 0.2);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 20px;
  filter: brightness(1.1);

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const TechnologiesSection = styled.div`
  grid-column: 1 / -1;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`;

const SkillsTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const Skill = styled.div`
  color: #ccd6f6;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '▹';
    color: #64ffda;
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>About</Title>
          <Content>
            <Text>
              <p>
                Hello! I'm a passionate full-stack developer with a strong foundation in web development
                and a keen eye for creating intuitive user experiences. I enjoy building things that live
                on the internet, whether that be websites, applications, or anything in between.
              </p>
              <p>
                My journey in web development started back in 2024 when I decided to try editing custom
                Tumblr themes — turns out hacking together a custom reblog button taught me a lot about
                HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at various companies and
                on different projects. My main focus these days is building accessible, human-centered
                products for clients and customers.
              </p>
            </Text>
            <ImageContainer>
              <Image 
                src="/About_img.jpg" 
                alt="Coding setup"
              />
            </ImageContainer>
            <TechnologiesSection>
              <SkillsTitle>Here are a few technologies I've been working with recently:</SkillsTitle>
              <Skills>
                <Skill>JavaScript (ES6+)</Skill>
                <Skill>TypeScript</Skill>
                <Skill>React</Skill>
                <Skill>Node.js</Skill>
                <Skill>Python</Skill>
                <Skill>Django</Skill>
                <Skill>HTML & CSS</Skill>
                <Skill>Tailwind CSS</Skill>
                <Skill>Styled Components</Skill>
                <Skill>Git & GitHub</Skill>
              </Skills>
            </TechnologiesSection>
          </Content>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About; 