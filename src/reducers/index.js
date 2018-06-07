import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    sessionState: sessionReducer,
    userState: userReducer
});

export default rootReducer;