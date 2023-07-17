import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px;
`;
export const Item = styled.li`
  font-size: ${theme.fontSizes.medium};
`;
export const Span = styled.span`
  font-size: ${theme.fontSizes.large};
  font-weight: 600;
  color: ${theme.colors.accent};
  margin-left: 7px;
`;
