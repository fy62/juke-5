import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';

export default (props) => {
  return (
    <div>
      <h3>{props.genreName} Station</h3>
      <Songs
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}
        />
    </div>
  );
}