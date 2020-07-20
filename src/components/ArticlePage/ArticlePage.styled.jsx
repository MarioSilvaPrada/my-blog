import styled from 'styled-components';

export const TitlePage = styled.h1`margin-bottom: .8rem;`;

export const Button = styled.button`
  margin-bottom: .5rem;
  font-weight: bold;

  &:hover {
      transform: translateX(-.2rem)
  }
`;

export const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
