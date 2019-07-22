import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import { BackToTop } from './components';
import { Left, Right } from './containers';

import { HomeWrapper } from './style';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <Left />
        <Right />
        {
          this.props.showBackTop && <BackToTop onClik={this.handleSrollTop} />
        }
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    window.addEventListener('scroll', this.props.changeShowBackTop)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeShowBackTop)
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
}

const mapStateToProps = (state) => ({
  showBackTop: state.getIn(['homeReducer', 'showBackTop'])
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeShowBackTop() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);