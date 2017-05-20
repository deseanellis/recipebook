import _ from 'lodash';
import { GET_LIST, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE, _item } from '../actions/index';

const INITIAL_STATE = {list: []};

export default function RecipesReducer(state=INITIAL_STATE, action) {
  const recipeStore = (localStorage.getItem(_item)) === null ? [] : JSON.parse(localStorage.getItem(_item));
  var updatedRecipeStore = [...recipeStore];
  var index = null;

  function checkDuplicates(updatedRecipeStore, actionTitle) {
    //Recipe with names already exists, append number to recipe title
    var count = updatedRecipeStore.reduce((acc, recipe) => {
      return acc + ((recipe.title === actionTitle) ? 1 : 0);
    }, 0);

    //Reduce by one to append
    count--;
    var appendedTitle = `${actionTitle} (${count})`;

    //Recursive Functionality
    var index = _.findIndex(updatedRecipeStore, function(recipe) { return recipe.title === appendedTitle });
    if (index >= 0) {
      checkDuplicates(updatedRecipeStore, appendedTitle);
    }

    return appendedTitle;

  }

  switch(action.type){
    case GET_LIST:
      return  {...state, list: updatedRecipeStore};
    case ADD_RECIPE:
      //If title empty set title to "Untitled"
      action.recipe.title = (action.recipe.title.trim().length === 0) ? "Untitlted" : action.recipe.title;

      //Check if recipe title already exists within array
      index = _.findIndex(updatedRecipeStore, function(recipe) { return recipe.title === action.recipe.title });

      //Push new recipe to array
      updatedRecipeStore.push(action.recipe);

      //If does not exists push to array, else append name then push, update local storage and return to state
      if (index < 0) {
        localStorage.setItem(_item, JSON.stringify(updatedRecipeStore));
      } else {
        var appendedTitle = checkDuplicates(updatedRecipeStore, action.recipe.title);

        //Add new appended title to store
        updatedRecipeStore[index].title = appendedTitle;
        localStorage.setItem(_item, JSON.stringify(updatedRecipeStore));
      }
      //Return to state
      return {...state, list: updatedRecipeStore};
    case UPDATE_RECIPE:
      //If title empty set title to "Untitled"
      action.recipe.title = (action.recipe.title.trim().length === 0) ? "Untitlted" : action.recipe.title;

      //Find index of object to update
      index = _.findIndex(updatedRecipeStore, function(recipe) { return recipe.title === action.previous.title });

      //Remove item and update with new version
      updatedRecipeStore.splice(index, 1, action.recipe);

      //Update local storage and return to state
      localStorage.setItem(_item, JSON.stringify(updatedRecipeStore));
      return {...state, list: updatedRecipeStore};
    case DELETE_RECIPE:
      //Find index of recipe to delete
      index = _.findIndex(updatedRecipeStore, function(recipe) { return recipe.title === action.recipe.title });

      //Remove item from array
      updatedRecipeStore.splice(index, 1);

      //Update local storage and return to state
      localStorage.setItem(_item, JSON.stringify(updatedRecipeStore));
      return {...state, list: updatedRecipeStore};
    default:
      return state;
  }
}
