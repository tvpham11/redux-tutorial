const initial = {
  names: []
}

//when I change the names array to contain objects instead of strings, app does not re-render
//after adding one user
export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        names: [
          // removing action.name causes names not to populate as list items and names aren't
          // added to array
          ...state.names, action.name
          // {...state.names, 
          //   user: action.name,
          //   contacted: false
          // }
        ]
      }
      // case 'TOGGLE_USER':
      //   if (state.id !== action.id) {
      //     return state;
      //   }
      //   return {
      //     ...state,
      //     contacted: state.contacted
      //   };
    default: 
      return state
  }
}