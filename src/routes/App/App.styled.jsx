import styled from 'styled-components';

const getTheme = (isLight, theme) => `
    background: ${isLight ? theme.light.background : theme.dark.background};
    color: ${isLight ? theme.light.color : theme.dark.color};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${isLight ? theme.light.header : theme.dark.header};
    }
  `;

export const Container = styled.div`
  height: 100%;
  ${({ theme, isLightMode }) => getTheme(isLightMode, theme)};
  transition: .5s;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  padding: 3rem 0;
`;

export const PersonalInfo = styled.div`
  margin-bottom: 3rem;
`;

export const ArticleContainer = styled.div`
  border-bottom: 2px solid
    ${({ isLightMode, theme }) => (isLightMode ? theme.light.header : theme.dark.header)};
  margin-bottom: 1.2rem;
  padding-bottom: .5rem;
  cursor: pointer;
`;
