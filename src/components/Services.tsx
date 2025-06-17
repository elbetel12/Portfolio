import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaMobile, FaTools, FaShieldAlt } from 'react-icons/fa';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: #112240;
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  color: #64ffda;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
`;

const services = [
  {
    id: 'frontend',
    icon: <FaCode />,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces using modern frameworks like React, with a focus on performance and user experience.'
  },
  {
    id: 'backend',
    icon: <FaServer />,
    title: 'Backend Development',
    description: 'Developing robust server-side applications using Node.js and Python, implementing RESTful APIs and microservices architecture.'
  },
  {
    id: 'database',
    icon: <FaDatabase />,
    title: 'Database Management',
    description: 'Designing and optimizing database schemas, implementing efficient queries, and ensuring data integrity across applications.'
  },
  {
    id: 'responsive',
    icon: <FaMobile />,
    title: 'Responsive Design',
    description: 'Creating mobile-first, responsive designs that work seamlessly across all devices and screen sizes.'
  },
  {
    id: 'devops',
    icon: <FaTools />,
    title: 'DevOps & Tools',
    description: 'Setting up CI/CD pipelines, containerization with Docker, and implementing best practices for deployment and maintenance.'
  },
  {
    id: 'security',
    icon: <FaShieldAlt />,
    title: 'Security & Performance',
    description: 'Implementing security best practices, optimizing application performance, and ensuring code quality through testing.'
  }
];

const Services: React.FC = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Services</Title>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <IconWrapper>{service.icon}</IconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </ServicesSection>
  );
};

export default Services; 