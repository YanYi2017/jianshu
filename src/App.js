import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './pages/header';
import Home from './pages/home';
import Post from './pages/post/loadable';
import LoginAndRegister from './pages/login-and-register';

import { GlobalStyle } from './common/style';
import { GlobalIconFont } from './statics/iconfont/iconfont';

function App({ nightMode, fontFamily }) {
  return (
    <ThemeProvider theme={{ mode: nightMode, fontFamily: fontFamily}}>
      <Fragment>
        <GlobalStyle />
        <GlobalIconFont />
        <BrowserRouter>
          <Route exact path={["/", "/p/:id"]} component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/p/:id" component={Post} />
          <Route exact path="/login" component={LoginAndRegister} />
          <Route exact path="/register" component={LoginAndRegister} />
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  fontFamily: state.getIn(['headerReducer', 'fontFamily']),
  nightMode: state.getIn(['headerReducer', 'nightMode'])
});

export default connect(mapStateToProps)(App);
