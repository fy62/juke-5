import {
  SET_LYRICS,
  UPDATE_ARTIST_QUERY,
  UPDATE_SONG_QUERY} from '../constants';
import axios from 'axios';

export const setLyrics = text => ({
  type: SET_LYRICS,
  text
});

export const searchLyrics = (artist, song) => {
  return dispatch => {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      })
  };
};

export const updateSongQuery = (songQuery) => ({
  type: UPDATE_SONG_QUERY,
  songQuery
});

export const updateArtistQuery = (artistQuery) => ({
  type: UPDATE_ARTIST_QUERY,
  artistQuery
});

export const handleSongInput = (song) => {
  return (dispatch, getState) => {
    dispatch(updateSongQuery(song));
  }
}

export const handleArtistInput = (artist) => {
  return (dispatch, getState) => {
    dispatch(updateArtistQuery(artist));
  }
}

export const handleSubmit = (e) => {
  return (dispatch, getState) => {
    e.preventDefault();
    const artist = getState().lyrics.artistQuery;
    const song = getState().lyrics.songQuery;

    if (artist && song) {
      dispatch(searchLyrics(artist, song));
    }
  }
}