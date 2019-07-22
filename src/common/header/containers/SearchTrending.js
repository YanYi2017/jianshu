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
    const { list, page, mouseInSearchTrending, searchInputIsFocused, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    if (searchInputIsFocused || mouseInSearchTrending) {
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
  searchInputIsFocused: state.getIn(['headerReducer', 'searchInputIsFocused']),
  mouseInSearchTrending: state.getIn(['headerReducer', 'mouseInSearchTrending'])
});

const mapDispatchToProps = (dispatch) => ({
  handleMouseEnter() {
    dispatch(actionCreators.toggleMouseInSearchTrending(true));
  },
  handleMouseLeave() {
    dispatch(actionCreators.toggleMouseInSearchTrending(false));
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