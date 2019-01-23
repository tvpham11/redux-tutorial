const initial = {
  list: []
}

//when I change the names array to contain objects instead of strings, app does not re-render
//after adding one user
export const userReducer = (state = initial, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_USER':
      return {
        list: [
          ...state.list, action.user
        ]
      }

    case 'TOGGLE_USER':
      return state.list.map(user => {
        if (user.id !== action.id) {
          return user;
        }
        return {
          ...state.list,
          contacted: action.contacted
        }
      }


        // return state.list.map(
        //   user =>
        //     user.id === action.id ? { ...user, completed: !user.completed } : user
      )

    default:
      return state
  }
}