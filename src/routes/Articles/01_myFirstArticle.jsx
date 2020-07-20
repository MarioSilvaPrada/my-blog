import React from 'react';
import ArticlePage from 'components/ArticlePage';

const Hoist = () => {
  const content = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quae quibusdam, quam
      consequatur mollitia voluptatibus voluptatem recusandae assumenda dolor fuga, dolorum
      veritatis rem id? Voluptates eaque nisi veniam numquam porro.
    </p>
  );
  return <ArticlePage title="Hoisting" content={content} />;
};

export default Hoist;
