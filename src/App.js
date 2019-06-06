import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

import { GlobalStyle } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont';

function App() {
  return (
      <div>
        <GlobalStyle />
        <GlobalIconFont />
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
        </BrowserRouter>
      </div>
  );
}

export default App;
