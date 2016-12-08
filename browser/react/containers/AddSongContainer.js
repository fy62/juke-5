import { connect } from 'react-redux';
import AddSong from '../components/AddSong';
import {loadAllSongs, addSongToPlaylist, handleSongChange, handleSongSubmit} from '../action-creators/playlists';

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs,
    error: state.playlists.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: function (event) {
      dispatch(handleSongChange(event));
    },
    handleSubmit: function (event) {
      dispatch(handleSongSubmit(event));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSong);








