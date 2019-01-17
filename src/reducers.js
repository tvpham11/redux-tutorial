import { combineReducers } from 'redux';

import { userReducer } from './models/reducers/user-reducer';

export default combineReducers({
  users: userReducer,
});