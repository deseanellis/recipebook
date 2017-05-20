export const GET_LIST = "GET_LIST";
export const GET_SCREEN = "GET_SCREEN";
export const ADD_RECIPE = "ADD_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const _item = '_deseanellis_recipes';

export function GetList(){
  return(
    {
      type: GET_LIST
    }
  );
}

export function GetScreen(screen) {
  return(
    {
      type: GET_SCREEN,
      screen
    }
  );
}

export function AddRecipe(recipe) {
  return(
    {
      type: ADD_RECIPE,
      recipe
    }
  );
}

export function UpdateRecipe(recipe, previous) {
  return(
    {
      type: UPDATE_RECIPE,
      recipe,
      previous
    }
  );
}

export function DeleteRecipe(recipe) {
  return(
    {
      type: DELETE_RECIPE,
      recipe
    }
  );
}
