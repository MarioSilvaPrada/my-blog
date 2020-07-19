import React, { useState } from 'react';
import data from 'data';
import Header from 'components/Header';
import * as S from './App.styled';

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <S.Container isLightMode={isLightMode}>
      <S.Wrapper>
        <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        <S.PersonalInfo>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex corporis
            doloribus necessitatibus quam illum, nam tenetur, iste, dicta molestiae possimus atque
            distinctio similique dolore impedit? Non impedit magni corrupti.
          </p>
        </S.PersonalInfo>
        {data.map(({ title, date, description }) => (
          <S.ArticleContainer isLightMode={isLightMode}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{date}</p>
          </S.ArticleContainer>
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default App;
