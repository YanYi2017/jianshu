import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PopularTopicsWrapper } from '../style.js';

class PopularTopics extends PureComponent {
    render() {
      const { popularTopics, morePopularTopics } = this.props;
      return (
        <PopularTopicsWrapper>
          {
            popularTopics.map((item) => {
              return (
                <Link to={item.get('href')} key={item.get('id')}>
                  <img src={item.get('imgURL')} alt={item.get('title')}/>
                  <span>{item.get('title')}</span>
                </Link>
              );
            })
          }
          <Link to={morePopularTopics.get('href')} className="more-hot-topics">
            <span>{morePopularTopics.get('title')} ></span>
          </Link>
        </PopularTopicsWrapper>
      );
    }
}

const mapStateToProps = (state) => ({
  popularTopics: state.getIn(['homeReducer', 'popularTopics']),
  morePopularTopics: state.getIn(['homeReducer', 'morePopularTopics']),
});

export default connect(mapStateToProps, null)(PopularTopics);