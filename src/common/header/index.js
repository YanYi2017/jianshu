import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login-and-register/login-box/store';

import { CSSTransition } from 'react-transition-group';

import { Left } from './components';

import {
  HeaderWrapper,
  WidthLimit,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchTrending,
  SearchTrendingHeader,
  SearchTrendingTag,
  Addition,
  Button
} from './style';

class Header extends PureComponent {
  render() {
    const { focused, list, loginStatus, handleLogout, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Left />
          <Addition>
            <Button className='writing'>
              <span className="iconfont">&#xe616;</span>
              <span>写文章</span>
            </Button>
            <Button className='register'>注册</Button>
          </Addition>
          <Nav>
            <Link to="/">
              <NavItem className='left homepage'>
                <span className="iconfont">&#xe64e;</span>
                <span>首页</span>
              </NavItem>
            </Link>
            <NavItem className='left'>
              <span className="iconfont">&#xe62d;</span>
              <span>下载App</span>
            </NavItem>
            {
              loginStatus ? (
                <NavItem className='right' onClick={handleLogout}>退出</NavItem>
              ) : (
                  <Link to="/login">
                    <NavItem className='right'>登录</NavItem>
                  </Link>
                )
            }
            <NavItem className='right'>
              <span className="iconfont">&#xe607;</span>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={500}
                classNames='focused'
              >
                <NavSearch
                  placeholder='搜索'
                  onFocus={() => handleInputFocus(list)}
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
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
        </WidthLimit>
      </HeaderWrapper>
    );
  }

  getListArea() {
    const { focused, list, mouseIn, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;

    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (newList[i]) {
        pageList.push(
          <li key={newList[i]}>
            <Link to={encodeURI(`/search?q=${newList[i]}`)}>
              {newList[i]}
            </Link>
          </li>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchTrending
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchTrendingHeader>
            <span>热门搜索</span>
            <a
              onClick={() => handleChangePage(page, totalPage, this.spin)}
            >
              <span
                ref={(spin) => { this.spin = spin }}
                className='iconfont ic-search-change'
                style={{ transform: 'rotate(90deg)' }}
              >
                &#xe61b;
              </span>
              <span>换一批</span>
            </a>
          </SearchTrendingHeader>
          <SearchTrendingTag>
            {pageList}
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
  mouseIn: state.getIn(['headerReducer', 'mouseIn']),
  list: state.getIn(['headerReducer', 'list']),
  page: state.getIn(['headerReducer', 'page']),
  totalPage: state.getIn(['headerReducer', 'totalPage']),
  loginStatus: state.getIn(['loginReducer', 'loginStatus'])
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    list.size === 0 && dispatch(actionCreators.getSearchTrendingList());
    dispatch(actionCreators.searchFocus());
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur());
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave());
  },
  handleChangePage(page, totalPage, spin) {
    const rotate = Number(spin.style.transform.match(/[0-9]+/)[0]);
    spin.style.transform = `rotate(${rotate + 360}deg)`;

    if (page < totalPage) {
      dispatch(actionCreators.changePage(page + 1));
    } else {
      dispatch(actionCreators.changePage(1));
    }
  },
  handleLogout() {
    dispatch(loginActionCreators.logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);