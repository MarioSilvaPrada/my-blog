import React from 'react';
import ArticlePage from 'components/ArticlePage';
import ReactMarkdown from 'react-markdown';
import Hoisting from 'pages/hoisting/index.md';
import CodeBlock from 'components/CodeBlock';

const Hoist = () => {
  const content = (
    <ReactMarkdown
      source={Hoisting}
      escapeHtml={false}
      renderers={{ code: CodeBlock }}
    />
  );

  return <ArticlePage title="Hoisting" content={content} />;
};

export default Hoist;
