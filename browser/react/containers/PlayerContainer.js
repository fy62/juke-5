import { connect } from 'react-redux';
import AUDIO from '../audio';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress, 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggle: function (song, list) {
      dispatch(toggleSong(song, list));
    },
    next: function () {
      dispatch(next());
    },
    previous: function () {
      dispatch(previous());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);





