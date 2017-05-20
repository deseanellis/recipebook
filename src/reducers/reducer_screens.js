import { GET_SCREEN, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from '../actions/index';

const INITIAL_STATE = {selected: null};

export default function ScreensReducer(state=INITIAL_STATE, action) {
  switch(action.type){
    case GET_SCREEN:
      return {...state, selected: action.screen}
    case ADD_RECIPE:
    case UPDATE_RECIPE:
    case DELETE_RECIPE:
      return {...state, selected: null};
    default:
      return state;
  }
}
