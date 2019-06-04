import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  HeaderWraper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  SearchWraper,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  render() {
    const { focused } = this.state;

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
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}
                />
              </CSSTransition>
              <CSSTransition>
                <span className='iconfont'>&#xe653;</span>
              </CSSTransition>
            </SearchWraper>
          </Nav>
        </WidthLimit>
      </HeaderWraper>
    );
  }

  handleInputFocus = () => {
    this.setState({
      focused: true
    });
  };
  
  handleInputBlur = () => {
    this.setState({
      focused: false
    });
  };

}

export default Header;