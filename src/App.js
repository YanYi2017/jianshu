import React from 'react';

import Header from './common/header';

import { GlobalStyle } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont';

function App() {
  return (
      <div>
        <GlobalStyle />
        <GlobalIconFont />
        <Header />
      </div>
  );
}

export default App;
