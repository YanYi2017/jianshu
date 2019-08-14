import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { StyledErrorTip } from '../style';

function FlashErrorTip({ errTip, hideErrTip }) {
  const { isShow, errMsg } = errTip.toJS();
  return (
    <CSSTransition
      in={isShow}
      timeout={3000}
      classNames="alert"
      appear={true}
      unmountOnExit
      onEnter={() => window.scrollTo(0, 0)}
      onEntered={() => hideErrTip()}
    >
      <StyledErrorTip>
        <div>{errMsg}</div>
      </StyledErrorTip>
    </CSSTransition>
  );
}

FlashErrorTip.propTypes = {
  errTip: PropTypes.object.isRequired,
  hideErrTip: PropTypes.func.isRequired
};

export default FlashErrorTip;