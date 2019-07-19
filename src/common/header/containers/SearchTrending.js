import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { SearchTrendingHeader, SearchTrendingTags } from '../components';
import { actionCreators } from '../store';
import { StyledSearchTrending } from './style';

class SearchTrending extends PureComponent {
  componentDidMount() {
    this.props.getSearchTrendingList();
  }
  render() {
    const { list, page, mouseIn, isFocused, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    if (isFocused || mouseIn) {
      return (
        <StyledSearchTrending
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchTrendingHeader onClick={handleChangePage} />
          <SearchTrendingTags list={list} page={page} />
        </StyledSearchTrending>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['headerReducer', 'list']),
  page: state.getIn(['headerReducer', 'page']),
  isFocused: state.getIn(['headerReducer', 'isFocused']),
  mouseIn: state.getIn(['headerReducer', 'mouseIn'])
});

const mapDispatchToProps = (dispatch) => ({
  handleMouseEnter() {
    dispatch(actionCreators.toggleMouseIn(true));
  },
  handleMouseLeave() {
    dispatch(actionCreators.toggleMouseIn(false));
  },
  handleChangePage(spin) {
    const rotate = Number(spin.current.style.transform.match(/[0-9]+/)[0]);
    spin.current.style.transform = `rotate(${rotate + 360}deg)`;
    dispatch(actionCreators.changePage());
  },
  getSearchTrendingList() {
    dispatch(actionCreators.getSearchTrendingList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchTrending);