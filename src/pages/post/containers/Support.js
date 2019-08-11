import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SupportButton from '../components/SupportButton';
import SupporterList from '../components/SupporterList';
import SupportModal from '../components/SupportModal';

const Wrapper = styled.div`
  min-height: 144px;
  padding: 20px 0;
  text-align: center;
`;

const NoticeWrapper = styled.p`
  padding: 0 30px;
  margin-bottom: 20px;
  min-height: 24px;
  font-size: 17px;
  font-weight: 700;
  color: #969696;
`;

function Support({ support, author }) {
  return (
    <Wrapper>
      <NoticeWrapper>{support.get('notice')}</NoticeWrapper>
      <SupportButton />
      <SupporterList support={support} />
      <SupportModal author={author} />
    </Wrapper>
  );
}

Support.propTypes = {
  support: PropTypes.instanceOf(Immutable.Map).isRequired
};

const mapStateToProps = state => ({
  support: state.getIn(['postReducer', 'support']),
  author: state.getIn(['postReducer', 'author'])
});

export default connect(mapStateToProps)(Support);