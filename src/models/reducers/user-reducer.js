const initial = {
  list: []
}

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
    state.list = state.list.map(
      user =>
        user.id === action.id ? { ...user, contacted: !user.contacted } : user
    )

      return {
        list : [
          ...state.list
        ]
      }

    default:
      return state
  }
}