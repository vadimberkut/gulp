import { combineReducers } from 'redux';

// Reducers
import itemReducer from './itemReducer.js';

// Combine Reducers
var reducers = combineReducers({
    itemState: itemReducer
});

export default reducers;
