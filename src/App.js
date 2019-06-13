import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import LoginAndRegister from './pages/login-and-register';

import { GlobalStyle } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont';

function App() {
  return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconFont />
        <BrowserRouter>
          <Route exact path={["/", "/detail/:id"]} component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/login" component={LoginAndRegister} />
          <Route exact path="/register" component={LoginAndRegister} />
        </BrowserRouter>
      </Fragment>
  );
}

export default App;
