import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  console.log(props);
  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(props.stations).map(genre => {
          return (
            <div className="list-group-item" key={genre}>
              <Link to={`stations/${genre}`}>{genre}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}


