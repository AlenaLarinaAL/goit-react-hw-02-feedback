import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const Item = styled.li``;
export const Button = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  border-radius: 5px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.dark};
  transition: ${theme.animation.duration}, ${theme.animation.cubicBezier};

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
