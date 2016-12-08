import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  RECEIVE_SONGS,
  CHANGE_ERROR,
  UPDATE_SONG
} from '../constants';

import axios from 'axios';

import {hashHistory} from 'react-router';
import {convertSong} from '../utils';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const receiveAllSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const getPlaylistById = playlistId => {

  return dispatch => {
    return axios.get(`/api/playlists/${playlistId}`)
      .then(response => {
        dispatch(receivePlaylist(response.data));
      });
  };

};

export const addNewPlaylist = playlistName => {

  return (dispatch, getState) => {

    return axios.post('/api/playlists', {name: playlistName})
      .then(res => res.data)
      .then(playlist => {
        const newListOfPlaylists = getState().playlists.list.concat([playlist]);
        dispatch(receivePlaylists(newListOfPlaylists));
        hashHistory.push(`/playlists/${playlist.id}`)
      });

  };

};

export const loadAllSongs = () => {
  return dispatch => {
    axios.get('/api/songs')
      .then(response => {
        console.dir(response.data);
        dispatch(receiveAllSongs(response.data));
      });
  };
};

export const addSongToPlaylist = (playlistId, songId) => {

  return (dispatch, getState) => {

    return axios.post(`/api/playlists/${playlistId}/songs`, {
      id: songId
    })
      .then(res => res.data)
      .then(song => {

        const selectedPlaylist = getState().playlists.selected;
        const songs = selectedPlaylist.songs;
        const newSongs = songs.concat([convertSong(song)]);
        const newSelectedPlaylist = Object.assign({}, selectedPlaylist, {
          songs: newSongs
        });

        dispatch(receivePlaylist(newSelectedPlaylist));

      });

  };

};

export const updateSongId = (songId) => ({
  type: UPDATE_SONG,
  songId
})

export const changeError = (error) => ({
  type: CHANGE_ERROR,
  error
})

export const handleChange = (evt) => {
  return (dispatch, getState) => {
    dispatch(updateSongId(evt.target.value));
    dispatch(changeError(false));  
  }

  
}

export const handleSubmit = (evt) => {

  return (dispatch, getState) => { 
    evt.preventDefault();

    const playlistId = getState().playlists.selected.id;
    const songId = getState().playlists.songId;
console.log(songId);
    dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => dispatch(changeError(true)));

  }
  
}



