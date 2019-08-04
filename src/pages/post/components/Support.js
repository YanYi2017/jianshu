import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const ButtonWrapper = styled.button`
  padding: 8px 25px;
  margin-bottom: 20px;
  border-radius: 20px;
  color: #fff;
  background: #ea6f5a;
  line-height: 1.42857;
  font-size: 16px;
`;

const SupporterListWrapper = styled.ul`
  height: 50px;
`;

const Supporter = styled.li`
  display: inline-block;
  margin: 0 -5px;
  cursor: pointer;
  a {
    display: block;
    width: 40px;
    height: 40px;
  }
  img {
    width: 100%;
    height: 100%;
    border: 3px solid #fff;
    border-radius: 50%;
  }
`;

function Support({ support }) {
  return (
    <Wrapper>
      <NoticeWrapper>{support.get('notice')}</NoticeWrapper>
      <ButtonWrapper>赞赏支持</ButtonWrapper>
      <SupporterListWrapper className='dib_vm'>
        {
          support.size > 0 && support.get('supporters').map((supporter, index) => (
            <Supporter className='vm' key={index}>
              <Link to={supporter.get('href')}>
                <img src={supporter.get('avatarURL')} alt="" />
              </Link>
            </Supporter>
          ))
        }
      </SupporterListWrapper>
    </Wrapper>
  );
}

Support.propTypes = {
  support: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default Support;