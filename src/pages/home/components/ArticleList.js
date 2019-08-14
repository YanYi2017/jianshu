import React, { PureComponent } from 'react';
import throttle from 'lodash/throttle';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

import Article from './Article';
import AddMore from './AddMore';
import LoadingArticleList from './LoadingArticleList';

class ArticleList extends PureComponent {
  constructor(props) {
    super(props);
    this.checkScrollTop = this.checkScrollTop.bind(this);
    this.checkScrollTopThrottled = throttle(this.checkScrollTop, 100);
    this.firstRequested = false;
    this.secondRequested = false;
  }
  render() {
    const { articleList, loading, getMoreList } = this.props
    return (
      <ul>
        {articleList.map((item) => <Article item={item} key={item.get('id')} />)}
        {loading ? <LoadingArticleList /> : <AddMore getMoreList={getMoreList} />}
      </ul>
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

ArticleList.propTypes = {
  articleList: PropTypes.instanceOf(Immutable.List).isRequired,
  loading: PropTypes.bool.isRequired,
  getMoreList: PropTypes.func.isRequired
};

export default ArticleList;