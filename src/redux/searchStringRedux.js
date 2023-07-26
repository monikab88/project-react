// selectors
export const searchValue = (state => state.searchString);

// actions
const createActionName = actionName => `app/column/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload});

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    };
  };

export default searchStringReducer;