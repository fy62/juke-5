import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => {
  return {
    playlists: state.playlists.list
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);