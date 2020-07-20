import React from 'react';
import { render } from 'react-dom';
// import 'normalize.css';
import './index.css';

import { ThemeProvider } from 'styled-components';
import App from './routes/App/App';
import theme from './theme/theme';

const rootElement = document.getElementById('root');
const root = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

render(root, rootElement);
