const initial = {
  names: []
}


export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        names: [
          ...state.names, 
          action.name
          // {
          //   user: action.name,
          //   contacted: false
          // }
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