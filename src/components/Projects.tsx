import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: #112240;
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tech = styled.span`
  color: #64ffda;
  font-size: 0.9rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #ccd6f6;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const projects = [
  {
    title: 'AI-SaaS Landing Page',
    description: 'A modern landing page for an AI company showcasing their services and products. Features smooth animations, responsive design, and interactive elements.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Styled Components'],
    github: 'https://github.com/elbetel12/AI-SaaS-landing-page',
    live: 'https://ai-saa-s-landing-page.vercel.app/#demo'
  },
  {
    title: 'Employee Management System',
    description: 'A comprehensive employee management system with features like attendance tracking using QR code scanning, leave management, and performance evaluation.',
    tech: ['HTML', 'CSS','Javascript', 'Django', 'Python'],
    github: 'https://github.com/elbetel12/Ems-Capstone-Project',
    live: 'https://elbetel.pythonanywhere.com/'
  },
  {
    title: 'Movie Website',
    description: 'A movie discovery platform with features like movie search, ratings, reviews, and personalized recommendations.',
    tech: ['HTML', 'CSS', 'Javascript', 'TMDB API'],
    github: 'https://github.com/elbetel12/moviewebsite',
    live: 'https://moviewebsite-three.vercel.app/'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Projects</Title>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <Tech key={techIndex}>{tech}</Tech>
                  ))}
                </TechStack>
                <Links>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </Link>
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </Link>
                </Links>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 