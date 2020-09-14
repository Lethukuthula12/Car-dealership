/* because when the app first runs, the components/ user doesn't have any state so we set uservstate to null */
const INITIAL_STATE = {
  currentUser: null,
};

/* resudecer function */
const userReducer = (state =INITIAL_STATE, action) => {
    
    /* if we get some action from the component, we want to do something with that action orelse we render back the state*/
    switch (action.type) {
         /*if we get the action as SET_CURRENT_USER we then want to return a new object that spread everything that't fired by that action */
      case "SET_CURRENT_USER":{
          return {
              ...state,
              currentUser: action.payload
          };
      }
     
        default:
        return state;
    }

};

export default userReducer;