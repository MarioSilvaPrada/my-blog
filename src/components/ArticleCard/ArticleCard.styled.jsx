import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticleContainer = styled(Link)`
margin-bottom: .8rem;
padding-bottom: .5rem;
cursor: pointer;
display: block;
`;

export const ArtTitle = styled.h1`
font-size: 1.2rem;
margin-bottom: .6rem;
`;

export const Date = styled.p`
font-size: .7rem;
font-weight: bold;
margin-bottom: .3rem;
`;

export const Description = styled.p`
font-size: 1rem;
font-weight: 500;
margin-bottom: .5rem;
`;
