import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q, firstSearch = false) => {
  console.log('searched');
 
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, videoList => {
      dispatch(changeVideoList(videoList));
      if (firstSearch) { dispatch(changeVideo(videoList[0])); }
    });
  }
};

export default handleVideoSearch;
