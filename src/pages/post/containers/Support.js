import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {SupportButton, SupporterList, SupportModal} from '../components';

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
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <NoticeWrapper>{support.get('notice')}</NoticeWrapper>
      <SupportButton showModal={() => setShow(true)}/>
      <SupporterList support={support} />
      {
        show && <SupportModal author={author} hideModal={() => setShow(false)} />
      }
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  support: state.getIn(['postReducer', 'support']),
  author: state.getIn(['postReducer', 'author'])
});

Support.propTypes = {
  support: PropTypes.instanceOf(Immutable.Map).isRequired,
  author: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default connect(mapStateToProps)(Support);