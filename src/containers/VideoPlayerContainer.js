import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import store from '../store/store.js';


var mapStateToProps = (state) => ({
  video: state.currentVideo
})

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;
