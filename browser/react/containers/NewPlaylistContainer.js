import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import { connect } from 'react-redux';
import {handleChange, handleSubmit} from '../action-creators/playlists';

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.playlists.name,
    warning: state.playlists.warning
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: function (event) {
      dispatch(handleChange(event));
    },
    handleSubmit: function (event) {
      dispatch(handleSubmit(event));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylist);
