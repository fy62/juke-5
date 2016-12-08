import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  RECEIVE_SONGS,
  UPDATE_SONG,
  CHANGE_ERROR

} from '../constants';

import {convertSong} from '../utils';

const initialPlaylistsState = {
  selected: {},
  list: [],
  songId: 1,
  error: false
};

export default function (state = initialPlaylistsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PLAYLISTS:
      newState.list = action.playlists;
      break;

    case RECEIVE_PLAYLIST:
      newState.selected = action.playlist;
      newState.selected.songs = newState.selected.songs.map(convertSong);
      break;

    case UPDATE_SONG:
      newState.songId = action.songId;
      break;

    case CHANGE_ERROR:
      newState.error = action.error;
      break;    

    default:
      return state;

  }

  return newState;

}