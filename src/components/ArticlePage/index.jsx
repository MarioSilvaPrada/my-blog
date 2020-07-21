import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import * as S from './ArticlePage.styled';

const ArticlePage = ({ title, content }) => {
  const history = useHistory();
  return (
    <div>
      <S.ArticleHeader>
        <S.TitlePage>{title}</S.TitlePage>
        <S.Button onClick={() => history.push('/')}>
          <AiFillHome style={{marginRight: '.3rem'}}/>  Homepage
        </S.Button>
      </S.ArticleHeader>
      {content}
    </div>
  );
};

export default ArticlePage;
