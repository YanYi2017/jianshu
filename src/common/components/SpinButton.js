import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpinButton } from './style';

function SpinButton({ onClick }) {
  const spin = React.createRef();
  return (
    <StyledSpinButton onClick={() => handleClick(spin, onClick)} >
      <span
        ref={spin}
        className='iconfont ic-search-change'
        style={{ transform: 'rotate(90deg)' }}
      >
        &#xe61b;
      </span>
      <span>换一批</span>
    </StyledSpinButton>
  );
}

const handleClick = (spin, onClick) => {
  const rotate = Number(spin.current.style.transform.match(/[0-9]+/)[0]);
  spin.current.style.transform = `rotate(${rotate + 360}deg)`;
  onClick && onClick();
};

SpinButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SpinButton;