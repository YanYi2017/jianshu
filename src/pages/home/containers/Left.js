import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { actionCreators } from '../store';
import { ArticleList } from '../components';
import Carousel from '../../../util/Carousel';

const StyledCarousel = styled(Carousel)`
  margin-bottom: 20px;
`;

function Left({ sliders, articleList, loading, getMoreList }) {
  const newSliders = sliders.toJS();
  return (
    <div className="col-16">
      <StyledCarousel effect="scrollX" autoplay>
        {
          newSliders.map(slide => {
            return <Link key={slide.id} to={slide.url}><img src={slide.imgURL} alt={slide.title} /></Link>;
          })
        }
      </StyledCarousel>
      <ArticleList
        articleList={articleList}
        loading={loading}
        getMoreList={getMoreList}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  sliders: state.getIn(['homeReducer', 'sliders']),
  articleList: state.getIn(['homeReducer', 'articleList']),
  loading: state.getIn(['homeReducer', 'loading'])
});

const mapDispatchToprops = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.toggleLoading(true));
    dispatch(actionCreators.getMoreList());
  }
});

export default connect(mapStateToProps, mapDispatchToprops)(Left);