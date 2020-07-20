import React from 'react';
import * as S from './ArticleCard.styled';

const ArticleCard = ({
  route, date, title, description,
}) => (
  <S.ArticleContainer to={route}>
    <S.ArtTitle>{title}</S.ArtTitle>
    <S.Description>{description}</S.Description>
    <S.Date>{date}</S.Date>
    <div className="line" />
  </S.ArticleContainer>
);

export default ArticleCard;
