import { connect } from 'react-redux';

import { FlashErrorTip } from '../../common';
import { actionCreators } from '../store';

const mapStateToProps = (state) => ({
  errTip: state.getIn(['loginReducer', 'errTip'])
});

const mapDispatchToProps = (dispatch) => ({
  hideErrTip() {
    dispatch(actionCreators.toggleErrTip(false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashErrorTip);