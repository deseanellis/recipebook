import { combineReducers } from 'redux';
import ScreensReducer from './reducer_screens';
import RecipesReducer from './reducer_recipes';

const rootReducer = combineReducers({
  screen: ScreensReducer,
  recipe: RecipesReducer
});

export default rootReducer;
