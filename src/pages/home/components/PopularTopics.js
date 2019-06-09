import React, { PureComponent } from 'react';
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
                <a target='_blank' rel='noopener noreferrer' href={item.get('href')} key={item.get('id')}>
                  <img src={item.get('imgURL')} alt={item.get('title')}/>
                  <span>{item.get('title')}</span>
                </a>
              );
            })
          }
          <a target='_blank' rel='noopener noreferrer' className='more-hot-topics' href={morePopularTopics.get('href')}>
            <span>{morePopularTopics.get('title')} ></span>
          </a>
        </PopularTopicsWrapper>
      );
    }
}

const mapStateToProps = (state) => ({
  popularTopics: state.getIn(['homeReducer', 'popularTopics']),
  morePopularTopics: state.getIn(['homeReducer', 'morePopularTopics']),
});

export default connect(mapStateToProps, null)(PopularTopics);