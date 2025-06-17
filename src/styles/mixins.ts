import { css } from 'styled-components';
import { Theme } from './theme';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const sectionPadding = css`
  padding: 100px 0;
`;

export const maxWidth = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const transition = css`
  transition: all 0.3s ease;
`;

export const hoverEffect = css`
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const buttonStyles = css`
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const inputStyles = css`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }: { theme: Theme }) => theme.colors.backgroundLight};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: ${({ theme }: { theme: Theme }) => theme.fontSizes.md};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }: { theme: Theme }) => theme.colors.textSecondary};
  }
`;

export const cardStyles = css`
  background: ${({ theme }: { theme: Theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const headingStyles = css`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 16px;
`;

export const textStyles = css`
  color: ${({ theme }: { theme: Theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: ${({ theme }: { theme: Theme }) => theme.fontSizes.md};
`;

export const linkStyles = css`
  color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  }
`; 