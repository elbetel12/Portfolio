import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Services from './components/Services';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

const NavLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: #64ffda;
    background: rgba(100, 255, 218, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const Main = styled.main`
  padding-top: 80px;
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/background_img.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: 0;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #8892b0;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
`;

const SocialIcon = styled.a`
  color: #ccd6f6;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Section = styled.section`
  min-height: auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 80px;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </Header>

        <Main>
          <Hero id="home">
            <Title>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ color: '#64ffda' }}
              >
                Elbetel Molla
              </motion.span>
            </Title>
            <Subtitle>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Full Stack Developer
              </motion.span>
            </Subtitle>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ color: '#8892b0', maxWidth: '600px', marginTop: '1rem' }}
            >
              I build exceptional digital experiences that make an impact. Specializing in creating
              responsive, user-friendly applications with clean, maintainable code.
            </motion.p>
            <SocialLinks>
              <SocialIcon href="https://github.com/elbetel12" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
            </SocialLinks>
          </Hero>

          <Section id="about">
            <About />
          </Section>

          <Section id="services">
            <Services />
          </Section>

          <Section id="projects">
            <Projects />
          </Section>

          <Section id="resume">
            <Resume />
          </Section>

          <Section id="contact">
            <Contact />
          </Section>
        </Main>

        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;