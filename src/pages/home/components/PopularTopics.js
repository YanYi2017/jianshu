import React from 'react';
import { connect } from 'react-redux';

import { PopularTopicsWraper } from '../style.js';



const PopularTopics = (props) => {
    return (
      <PopularTopicsWraper>
        {
          props.popularTopics.map((item) => {
            return (
              <a target='_blank' rel='noopener noreferrer' href={item.get('href')} key={item.get('id')}>
                <img src={item.get('imgURL')} alt={item.get('title')}/>
                <span>{item.get('title')}</span>
              </a>
            );
          })
        }
        <a target='_blank' rel='noopener noreferrer' className='more-hot-topics' href={props.morePopularTopics.get('href')}>
          <span>{props.morePopularTopics.get('title')} ></span>
        </a>
      </PopularTopicsWraper>
    );
}

const mapStateToProps = (state) => ({
  popularTopics: state.getIn(['homeReducer', 'popularTopics']),
  morePopularTopics: state.getIn(['homeReducer', 'morePopularTopics']),
});

export default connect(mapStateToProps, null)(PopularTopics);