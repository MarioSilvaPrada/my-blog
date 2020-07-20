import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import * as S from './ArticlePage.styled';

const ArticlePage = ({ content }) => {
  const history = useHistory();
  return (
    <div>
      <S.ArticleHeader>
        <S.TitlePage>Hoist</S.TitlePage>
        <S.Button onClick={() => history.goBack()}>
          <IoIosArrowBack />
          {' '}
          Go Back
        </S.Button>
      </S.ArticleHeader>
      {content}
    </div>
  );
};

export default ArticlePage;
