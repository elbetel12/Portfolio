import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #0a192f;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`;

const Copyright = styled.p`
  color: #8892b0;
  font-size: 1rem;
  margin: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>© 2025 Elbetel Molla. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer; 