import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';
//import store from '../store/store.js';


var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (query, isFirstSearch) => handleVideoSearch(query, isFirstSearch)(dispatch)
})

var SearchContainer = connect(null, mapDispatchToProps)(Search);


export default SearchContainer;
