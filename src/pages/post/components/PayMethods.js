import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 100%;
`;

const Method = styled.label`
  display: inline-block;
  width: 156px;
  height: 54px;
  line-height: 54px;
  margin: 20px 5px 10px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  border-color: ${props => props.checked && '#EA6F5A'};
  cursor: pointer;
  input {
    display: none;
  }
  img {
    height: 30px;
    vertical-align: middle;
  }
`;

function PayMethods({ checked, changePayMethod }) {
  return (
    <Wrapper>
      <Method checked={checked === 'wechat'}>
        <input type="radio" name="pay-method" value="wechat" onChange={changePayMethod} />
        <img src="//cdn2.jianshu.io/assets/web/wechat-b876a8446e11c13deb9f7c04093d5369.png" alt="微信支付" />
      </Method>
      <Method checked={checked === 'alipay'}>
        <input type="radio" name="pay-method" value="alipay" onChange={changePayMethod} />
        <img src="//cdn2.jianshu.io/assets/web/alipay-819dd0110c4f574b52bf4d193de5b0f5.png" alt="支付宝" />
      </Method>
    </Wrapper>
  );
}

PayMethods.propTypes = {
  checked: PropTypes.string.isRequired,
  changePayMethod: PropTypes.func.isRequired
};

export default PayMethods;