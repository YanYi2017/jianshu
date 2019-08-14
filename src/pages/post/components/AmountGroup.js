import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Amount from './Amount';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

function AmountGroup({option, amount, onOptionChange, onAmountChange}) {
  return (
    <Wrapper>
      <Amount
        value="option1"
        parentValue={option}
        amount="2"
        onOptionChange={onOptionChange}/>
      <Amount
        value="option2"
        parentValue={option}
        amount="5"
        onOptionChange={onOptionChange}/>
      <Amount
        value="option3"
        parentValue={option}
        amount="10"
        onOptionChange={onOptionChange}/>
      <Amount
        value="option4"
        parentValue={option}
        amount="20"
        onOptionChange={onOptionChange}/>
      <Amount
        value="option5"
        parentValue={option}
        amount="50"
        onOptionChange={onOptionChange}/>
      <Amount
        value="option6"
        parentValue={option}
        amount={amount}
        onOptionChange={onOptionChange}
        onAmountChange={onAmountChange}
        custom/>
    </Wrapper>
  );
}

AmountGroup.propTypes = {
  option: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired
};

export default AmountGroup;