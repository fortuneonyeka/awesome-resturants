import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reservationReducer from './Reservations'
import usersReducer from './users/usersReducer';

const reducer = combineReducers({reservationReducer,usersReducer});

const store = createStore(reducer, applyMiddleware(ThunkMiddleware,logger));

export default store;