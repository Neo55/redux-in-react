import { combineReducers } from 'redux';
import userInfo from './userInfo/reducer';
import year from './Year/reducer';

const rootReducer = combineReducers({
    userInfo,
    year
});

export default rootReducer;