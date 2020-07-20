import React from 'react';
import * as S from './Intro.styled';

const Intro = () => (
  <S.PersonalInfo>
    <p>
      Hey, I&apos;m
      {' '}
      <S.ExternalLink href="https://mariosilvaprada.com/" target="blank">
        Mário Prada
      </S.ExternalLink>
      . Welcome to my internet corner where I write about topics related to Javascript. Some of them
      I&apos;m good at, and other ones not so much but that&apos;s why I want to confront them. Feel
      yourself at home.
    </p>
  </S.PersonalInfo>
);

export default Intro;
