import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import store from '../store/store.js';


var mapStateToProps = (state) => ({
  video: state.currentVideo
})

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
