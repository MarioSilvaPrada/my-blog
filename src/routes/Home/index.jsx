import React from 'react';
import data from 'data';
import ArticleCard from 'components/ArticleCard';
import * as S from './Home.styled';

const Home = () => (
  <div>
    <S.PersonalInfo>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex corporis doloribus
        necessitatibus quam illum, nam tenetur, iste, dicta molestiae possimus atque distinctio
        similique dolore impedit? Non impedit magni corrupti.
      </p>
    </S.PersonalInfo>
    {data.map(({
      title, date, description, route,
    }) => (
      <ArticleCard
        key={title}
        title={title}
        date={date}
        description={description}
        route={route}
      />
    ))}
  </div>
);

export default Home;
