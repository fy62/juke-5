import { connect } from 'react-redux';
import Lyrics from '../components/Lyrics';

import {searchLyrics, handleSubmit, handleArtistInput, handleSongInput} from '../action-creators/lyrics';

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.lyrics.text,
    artistQuery: state.lyrics.artistQuery,
    songQuery: state.lyrics.songQuery
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setArtist: function (artist) {
      dispatch(handleArtistInput(artist));
    },
    setSong: function (song) {
      dispatch(handleSongInput(song));
    },
    handleSubmit: function (event) {
      dispatch(handleSubmit(event));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);
