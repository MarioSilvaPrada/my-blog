import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  transition: .5s;
  background: ${({ theme, isLightMode }) => (isLightMode ? theme.light.background : theme.dark.background)};
  color: ${({ theme, isLightMode }) => (isLightMode ? theme.light.color : theme.dark.color)};
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  padding: 3rem 0;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme, isLightMode }) => (isLightMode ? theme.light.header : theme.dark.header)};
  transition: .5s;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

`;
