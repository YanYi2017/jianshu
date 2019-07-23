import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { StyledAddMore } from './style';

class AddMore extends PureComponent {
  constructor(props) {
    super(props);
    this.checkScrollTop = this.checkScrollTop.bind(this);
    this.checkScrollTopThrottled = throttle(this.checkScrollTop, 100);
    this.firstRequested = false;
    this.secondRequested = false;
  }
  render() {
    const { getMoreList } = this.props;
    return (
      <StyledAddMore onClick={getMoreList}>阅读更多</StyledAddMore>
    );
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollTopThrottled);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollTopThrottled);
  }
  checkScrollTop() {
    const { getMoreList } = this.props;
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 300 && !this.firstRequested) {
      getMoreList();
      this.firstRequested = true;
    }
    if (scrollTop > 600 && !this.secondRequested) {
      getMoreList();
      this.secondRequested = true;
    }
    if (this.secondRequested) {
      window.removeEventListener('scroll', this.checkScrollTopThrottled);
    }
  }
}

AddMore.propTypes = {
  getMoreList: PropTypes.func.isRequired
};

export default AddMore;