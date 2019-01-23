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
      // return state.list.map(user => {
      //   console.log('list: ' + state.list + ' user id: ' + user.id + ' action.id: ' + action.id);
      //   if (user.id !== action.id) {
      //     return user;
      //   }
      //   return {
      //     ...state,
      //     contacted: action.contacted
      //   }
      // }


        return state.list.map(
          user =>
            user.id === action.id ? { ...user, contacted: !user.contacted } : user
      )

    default:
      return state
  }
}