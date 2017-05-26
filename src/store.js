import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

function configureStore(initialState){
    const store = createStore(
        reducers, 
        initialState, 
        applyMiddleware(thunk, logger)
    );
    return store;
}

export default configureStore({});

//custom logger
function ping(store){
    return function(next){
        return function(action){
            console.log(`Event type: ${action.type}, additional event data: `,action.payload);
            return next(action);
        }
    }
}