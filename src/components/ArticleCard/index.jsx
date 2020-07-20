import React from 'react';
import * as S from './ArticleCard.styled';

const ArticleCard = ({
  route, date, title, description,
}) => (
  <S.ArticleContainer to={route}>
    <S.HeaderWrapper>
      <S.ArtTitle>{title}</S.ArtTitle>
      <S.Date>{date}</S.Date>
    </S.HeaderWrapper>

    <S.Description>{description}</S.Description>
    <div className="line" />
  </S.ArticleContainer>
);

export default ArticleCard;
