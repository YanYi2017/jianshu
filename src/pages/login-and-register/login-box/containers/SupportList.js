import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { actionCreators } from '../store';

import { StyledSupportList } from './style';

class SupportList extends PureComponent {
  constructor(props) {
    super(props);
    this.myRefs = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', (e) => this.props.hideSupportList(e, this.myRefs.current));
  }
  
  componentWillUnmount() {
    document.removeEventListener('mousedown', (e) => this.props.hideSupportList(e, this.myRefs.current));
  }

  render () {
    const { supportListIsShow } = this.props;
    return (
      <StyledSupportList
        supportListIsShow={supportListIsShow}
        ref={this.myRefs}
      >
        <li>
          <Link to="#">用手机号重置密码</Link>
        </li>
        <li>
          <Link to="#">用邮箱重置密码</Link>
        </li>
        <li>
          <Link to="#">无法用海外手机号登录</Link>
        </li>
        <li>
          <Link to="#">无法用Google账号登录</Link>
        </li>
      </StyledSupportList>
    );
  }
}

const mapStateToProps = (state) => ({
  supportListIsShow: state.getIn(['loginReducer', 'supportListIsShow'])
});

const mapDispatchToProps = (dispatch) => ({
  hideSupportList(e, node) {
    if (node && !node.contains(e.target)) {
      dispatch(actionCreators.toggleSupportList(false));
    }
  }
});

SupportList.propTypes = {
  supportListIsShow: PropTypes.bool.isRequired,
  hideSupportList: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SupportList);