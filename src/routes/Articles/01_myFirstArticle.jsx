import React from 'react';
import ArticlePage from 'components/ArticlePage';
import ReactMarkdown from 'react-markdown';
import Hoisting from 'pages/hoisting/index.md';

const Hoist = () => {
  const content = <ReactMarkdown source={Hoisting} escapeHtml={false} />;

  return <ArticlePage title="Hoisting" content={content} />;
};

export default Hoist;
