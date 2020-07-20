import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

// Pages
import Home from 'routes/Home';
import Hoist from 'routes/Articles/01_myFirstArticle';
import PageNotFound from 'routes/PageNotFound/PageNotFound';
import * as S from './App.styled';

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <Router>
      <S.Container isLightMode={isLightMode}>
        <S.Wrapper>
          <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hoisting" component={Hoist} />
            <Route path="*" component={PageNotFound} />
          </Switch>
          <Footer />
        </S.Wrapper>
      </S.Container>
    </Router>
  );
};

export default App;
