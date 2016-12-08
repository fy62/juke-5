import {
  SET_LYRICS,
  UPDATE_ARTIST_QUERY,
  UPDATE_SONG_QUERY
} from '../constants';

const initialLyricsState = {
  text: null,
  artistQuery: '',
  songQuery: ''
};

export default function (state = initialLyricsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_LYRICS:
      newState.text = action.text;
      break;

    case UPDATE_ARTIST_QUERY:
      newState.artistQuery = action.artistQuery;
      break;

    case UPDATE_SONG_QUERY:
      newState.songQuery = action.songQuery;
      break;

    default:
      return state;

  }

  return newState;

}