import React, { Component } from 'react';

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

class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
              {this.getListArea(focused)}
            </SearchWraper>
          </Nav>
        </WidthLimit>
      </HeaderWraper>
    );
  }

  getListArea(show) {
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
            { 
              this.props.list.map((item) => {
                return (
                  <li key={item}><a target='_blank'>{item}</a></li>
                );
              }) 
            }
          </SearchTrendingTag>
        </SearchTrending>
      );
    } else {
      return null;
    }
  };
}


const mapStateToProps = (state) => ({
  // 等价于 state.get('headerReducer').get('focused')
  focused: state.getIn(['headerReducer', 'focused']),
  list: state.getIn(['headerReducer', 'list'])
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus() {
    dispatch(actionCreators.getSearchTrendingList());
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