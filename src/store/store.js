import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var emptyVideoData = {
    id: {videoID: null},
    snippet: {title: null,
              description: null,
              thumbnails: {default: {url: null}}
            }
}

var initialState = {
  videoList: [emptyVideoData],
  currentVideo: emptyVideoData
};

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;