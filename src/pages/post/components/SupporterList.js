import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.ul`
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

function SupporterList({ support }) {
  return (
    <Wrapper className='dib_vm'>
      {
        support.get('supporters') && support.get('supporters').map((supporter, index) => (
          <Supporter className='vm' key={index}>
            <Link to={supporter.get('href')}>
              <img src={supporter.get('avatarURL')} alt="" />
            </Link>
          </Supporter>
        ))
      }
    </Wrapper>
  );
}

export default SupporterList;