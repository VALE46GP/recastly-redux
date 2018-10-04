import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case 'CHANGE_CURRENT_VIDEO':
      return action.payload;
    default:
      return state;
  }
};

export default currentVideoReducer;
