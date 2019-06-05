import React from 'react';

import { connect } from 'react-redux';
import { actionCreators } from './store';

import { CSSTransition } from 'react-transition-group';

import {
  HeaderWraper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  SearchWraper,
  NavSearch,
  SearchTrending,
  SearchTrendingHeader,
  SearchTrendingTag,
  Addition,
  Button
} from './style';

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  return (
      <HeaderWraper>
        <WidthLimit>
          <Logo href='/' />
          <Addition>
            <Button className='writing'>
              <span className="iconfont">&#xe616;</span>  
              <span>写文章</span>
            </Button>
            <Button className='register'>注册</Button>
          </Addition>
          <Nav>
            <NavItem className='left homepage'>
              <span className="iconfont">&#xe64e;</span>  
              <span>首页</span>
            </NavItem>
            <NavItem className='left'>
              <span className="iconfont">&#xe62d;</span>  
              <span>下载App</span>
            </NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
              <span className="iconfont">&#xe607;</span>  
            </NavItem>
            <SearchWraper>
              <CSSTransition
                in={focused}
                timeout={500}
                classNames='focused'
              >
                <NavSearch 
                  placeholder='搜索'
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              <CSSTransition
                in={focused}
                timeout={50}
                classNames='focused'
              >
                <span className='iconfont ic-search'>&#xe653;</span>
              </CSSTransition>
              {getListArea(focused)}
            </SearchWraper>
          </Nav>
        </WidthLimit>
      </HeaderWraper>
  );
};

const getListArea = (show) => {
  if (show) {
    return (
      <SearchTrending>
        <SearchTrendingHeader>
          <span>热门搜索</span>
          <a>
            <span className='iconfont ic-search-change'>&#xe61b;</span>                    
            <span>换一批</span>
          </a>
        </SearchTrendingHeader>
        <SearchTrendingTag>
          <li>
            <a target='_blank'>区块链</a>
          </li>
          <li>
            <a target='_blank'>小程序</a>
          </li>
          <li>
            <a target='_blank'>vue</a>
          </li>
          <li>
            <a target='_blank'>毕业</a>
          </li>
          <li>
            <a target='_blank'>PHP</a>
          </li>
          <li>
            <a target='_blank'>故事</a>
          </li>
          <li>
            <a target='_blank'>flutter</a>
          </li>
          <li>
            <a target='_blank'>理财</a>
          </li>
          <li>
            <a target='_blank'>美食</a>
          </li>
          <li>
            <a target='_blank'>投稿</a>
          </li>
        </SearchTrendingTag>
      </SearchTrending>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  focused: state.getIn(['headerReducer', 'focused'])
  // 等价于 state.get('headerReducer').get('focused')
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus() {
    dispatch(actionCreators.searchFocus());
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);