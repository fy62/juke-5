import { connect } from 'react-redux';
import AddSong from '../components/AddSong';
import {loadAllSongs, addSongToPlaylist, handleChange, handleSubmit} from '../action-creators/playlists';

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs,
    error: state.playlists.error
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

export default connect(mapStateToProps, mapDispatchToProps)(AddSong);








