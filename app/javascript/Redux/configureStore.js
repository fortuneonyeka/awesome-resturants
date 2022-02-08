import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';


const reducer = combineReducers({});

const store = createStore(reducer, applyMiddleware(ThunkMiddleware,logger));

export default store;