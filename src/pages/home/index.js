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
        <div className="row">
          <Left />
          <Right />
          {
            this.props.showBackTop && <BackToTop onClick={this.handleScrollToTop} />
          }
        </div>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getInitialHomeData();
    window.addEventListener('scroll', this.props.changeShowBackTop)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeShowBackTop)
  }
  handleScrollToTop() {
    window.scrollTo(0, 0);
  }
}

const mapStateToProps = (state) => ({
  showBackTop: state.getIn(['homeReducer', 'showBackTop'])
});

const mapDispatchToProps = (dispatch) => ({
  getInitialHomeData() {
    dispatch(actionCreators.toggleLoading(true));
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