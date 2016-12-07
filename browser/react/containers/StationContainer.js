import { connect } from 'react-redux';
import Station from '../components/Station';
import {toggleSong} from '../action-creators/player';
import {convertSong} from '../utils';

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs.filter(song => (song.genre === ownProps.params.genreName)).map(convertSong),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
  };
}


const mapDispatchToProps = dispatch => {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);