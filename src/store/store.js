import { createStore, combineReducers } from 'redux';
import {userReducer} from './userReducer';

const reducers  = combineReducers({
    user: userReducer
})
export default createStore(reducers, ['Use Redux']);
