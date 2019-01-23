const initial = {
  users: []
}

//when I change the names array to contain objects instead of strings, app does not re-render
//after adding one user
export const userReducer = (state = initial, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_USER':
      return {
        users: [
          // removing action.name causes names not to populate as list items and names aren't
          // added to array
          ...state.names,
          // action.name
          {
            user: action.name,
            id: action,id,
            contacted: false
          }
        ]
      }
      case 'TOGGLE_USER':
        if (state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          contacted: state.contacted
        };
    default: 
      return state
  }
}