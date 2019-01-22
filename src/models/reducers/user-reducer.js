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
        ]
      }
    default: 
      return state
  }
}