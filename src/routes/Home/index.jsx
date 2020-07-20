import React from 'react';
import data from 'data';
import ArticleCard from 'components/ArticleCard';
import Intro from 'components/Intro';

const Home = () => (
  <div>
    <Intro />
    {data.map(({
      title, date, description, route,
    }) => (
      <ArticleCard key={title} title={title} date={date} description={description} route={route} />
    ))}
  </div>
);

export default Home;
