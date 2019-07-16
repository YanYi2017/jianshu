import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import { actionCreators } from '../store';

import { StyledSearchInput, StyledInput, StyledIcon } from './style';

function SearchInput({ searchInput, isFocused, handleChange, handleFocus, handleBlur }) {
  return (
    <StyledSearchInput className="dib_vm">
      <CSSTransition
        in={isFocused}
        timeout={500}
        classNames="focused"
      >
        <StyledInput
          value={searchInput}
          className="vm"
          placeholder="搜索"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </CSSTransition>
      <CSSTransition
        in={isFocused}
        timeout={50}
        classNames='focused'
      >
        <StyledIcon className='iconfont vm'>&#xe653;</StyledIcon>
      </CSSTransition>
    </StyledSearchInput>
  );
}

const mapStateToProps = (state) => ({
  searchInput: state.getIn(['headerReducer', 'searchInput']),
  isFocused: state.getIn(['headerReducer', 'isFocused'])
});

const mapDispatchToProps = (dispatch) => ({
  handleChange(e) {
    dispatch(actionCreators.changeSearchInput(e.target.value));
  },
  handleFocus() {
    dispatch(actionCreators.toggleFocus(true));
  },
  handleBlur() {
    dispatch(actionCreators.toggleFocus(false));
  }
});

SearchInput.propTypes = {
  searchInput: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);