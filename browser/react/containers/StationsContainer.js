import { connect } from 'react-redux';
import Stations from '../components/Stations';

const makeStations = songs => {
  const stations = {};
  for (let i = 0; i < songs.length; i++) {
    if (!stations[songs[i].genre]) {
      stations[songs[i].genre] = [];
    }
    stations[songs[i].genre].push(songs[i]);
  }
  return stations;
}

const mapStateToProps = state => {
  return {
    stations: makeStations(state.songs)
  };
}


const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);