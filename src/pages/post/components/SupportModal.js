import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';
import theme from 'styled-theming';

import AmountGroup from './AmountGroup';
import PayMethods from './PayMethods';

import * as constants from '../../../common/constants';

const {ON, OFF} = constants;

const maskBackground = theme('mode', {
  [ON]: 'rgba(63, 63, 63, .7)',
  [OFF]: 'rgba(255, 255, 255, .7)'
});

const background = theme('mode', {
  [ON]: '#3f3f3f',
  [OFF]: '#fff'
});

const color = theme('mode', {
  [ON]: '#c8c8c8',
  [OFF]: '#333'
});

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
`;

const ModalMask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${maskBackground};
`;

const Modal = styled.div`
  position: relative;
  display: inline-block;
  width: 620px;
  padding: 20px;
  background: ${background};
  border-radius: 6px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;
  border: none;
  font-size: 26px;
  font-weight: 200;
  color: ${color};
`;

const FormWrapper = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;
  color: #999;

`;

const IntroWrapper = styled.div`
  flex: 1 100%;
  margin: 20px 0;
  color: ${color};
  img {
    width: 36px;
    height: 36px;
    margin-right: 10px;
    border-radius: 50%;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
  .intro {
    font-weight: bold;
    margin-right: 5px;
  }
  .iconfont {
    color: #EA6F5A;
    font-size: 20px;
  }
`;

const Message = styled.textarea`
  flex: 1 auto;
  height: 80px;
  padding: 15px 20px;
  margin-bottom: 25px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  background: rgba(180, 180, 180, 0.1);
  font-size: 14px;
  resize: none;
  outline: none;
  color: ${color};
`;

const RewardInfo = styled.div`
  flex: 1 100%;
  font-size: 14px;
  color: ${color};
  .amount {
    font-size: 28px;
    font-weight: bold;
    color: #EA6F5A;
  }
  button {
    border: none;
    color:#3194D0;
  }
`;

const PayButton = styled.button`
  width: 116px;
  height: 40px;
  margin: auto;
  margin-top: 25px;
  background: #ea6f5a;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
  border: none;
`;

function SupportModal({ author, hideModal }) {
  const [option, setOption] = useState('option1');
  const [amount, setAmount] = useState('2');
  const [message, setMessage] = useState('');
  const [payMethod, setPayMethod] = useState('wechat');
  const [show, setShow] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('option', option, typeof option);
    console.log('amount', amount, typeof amount);
    console.log('message', message, typeof message);
    console.log('payMethod', payMethod, typeof payMethod);
  };

  const handleOptionChange = e => {
    setOption(e.target.value);
    setAmount(e.target.dataset.amount);
  };

  const handleAmountChange = e => {
    let amount = e.target.value;
    amount = amount.replace(/^0/gi, '');  // 去除输入数字前面的0
    amount = parseInt(Math.min(Math.max(amount, 0), 10000), 10);  // 0-10000，并将浮点数转为正数
    setAmount(String(amount));
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleMethodChange = e => {
    setPayMethod(e.target.value);
  };

  return (
    <Wrapper className="dib_vm">
      <ModalMask onClick={hideModal}></ModalMask>
      <Modal className="vm">
        <CloseButton type="button" onClick={hideModal}>×</CloseButton>
        <FormWrapper onSubmit={handleSubmit}>
          <IntroWrapper>
            <img src={author.get('avatarURL')} alt="" />
            <span className="intro">给作者送糖</span>
            <span className="iconfont">&#xe628;</span>
          </IntroWrapper>

          <AmountGroup
            option={option}
            amount={amount}
            onOptionChange={handleOptionChange}
            onAmountChange={handleAmountChange}
          />

          <Message
            placeholder="给Ta留言..."
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
          <RewardInfo>
            <span className="amount">￥{amount}</span>
            {
              !show && (
                <>
                  <span className="pay-method"> ，用微信支付</span>
                  <button onClick={() => setShow(true)}>更换</button>
                </>
              )
            }
          </RewardInfo>

          {
            show && <PayMethods checked={payMethod} changeMethod={handleMethodChange} />
          }

          <PayButton>立即支付</PayButton>
        </FormWrapper>
      </Modal>
    </Wrapper>
  );
}

SupportModal.propTypes = {
  author: PropTypes.instanceOf(Immutable.Map).isRequired,
  hideModal: PropTypes.func.isRequired
};

export default SupportModal;