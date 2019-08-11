import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.label`
  width: 155px;
  height: 55px;
  line-height: 55px;
  margin-bottom: 15px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.checked && '#EA6F5A'};
  border-color: ${props => props.checked && '#EA6F5A'};
  user-select: none;
`;

const OptionRadio = styled.input`
  display: none;
`;

const Icon = styled.span`
  font-size: 20px;
`;

const AmountText = styled.span`
  font-size: 28px;
  margin: 0 5px 0 5px;
`;

const CustomInput = styled.input`
  width: 80px;
  height: 100%;
  padding: 0;
  margin: 0 10px;
  text-align: center;
  font-size: 28px;
  outline: none;
  border: none;
  color: #EA6F5A;;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const Unit = styled.span`
  font-size: 13px;
`;

function Amount({ value, parentValue, amount, custom, onOptionChange, onAmountChange }) {
  const checked = value === parentValue;
  let innerDisplayed = null;

  if (custom) {  // 判断是否是自定义数据
    if (checked) {
      innerDisplayed = (
        <label>
          <Icon className="iconfont">&#xe628;</Icon>
          <CustomInput
            type="number"
            value={amount}
            autoFocus={true}
            onChange={onAmountChange} />
          <Unit>颗</Unit>
        </label>
      );
    } else {
      innerDisplayed = <span>自定义</span>;
    }
  } else {
    innerDisplayed = (
      <Fragment>
        <Icon className="iconfont">&#xe628;</Icon>
        <AmountText>{amount}</AmountText>
        <Unit>颗</Unit>
      </Fragment>
    );
  }

  return (
    <Wrapper checked={checked}>
      <OptionRadio
        type="radio"
        value={value}
        data-amount={amount}
        checked={checked}
        onChange={onOptionChange} />
      {innerDisplayed}
    </Wrapper>
  );
}

Amount.propTypes = {
  value: PropTypes.string.isRequired,
  parentValue: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func
};

export default Amount;