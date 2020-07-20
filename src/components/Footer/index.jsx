import React from 'react';
import * as S from './Footer.styled';
import social from './social';

const Footer = () => (
  <S.FooterContainer>
    <S.IconsWrapper>
      {social.map(({ Icon, link }) => (
        <S.Icon href={link} target="blank">
          {Icon}
        </S.Icon>
      ))}
    </S.IconsWrapper>
    <S.Copy>
      ©
      {new Date().getFullYear()}
      {' '}
      Mário Prada
    </S.Copy>
  </S.FooterContainer>
);

export default Footer;
