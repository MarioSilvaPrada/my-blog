import React, { useState } from 'react';
import Switch from 'components/Switch';
import * as S from './App.styled';

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <S.Container isLightMode={isLightMode}>
      <S.Wrapper>
        <S.Header>
          <S.Title isLightMode={isLightMode}>Prada Codes</S.Title>
          <Switch checked={isLightMode} onChange={() => setIsLightMode(!isLightMode)} />
        </S.Header>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex corporis
            doloribus necessitatibus quam illum, nam tenetur, iste, dicta molestiae possimus atque
            distinctio similique dolore impedit? Non impedit magni corrupti.
          </p>
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default App;
