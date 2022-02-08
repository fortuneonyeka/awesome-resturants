import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reservationReducer from './Reservations'


const reducer = combineReducers({reservationReducer,});

const store = createStore(reducer, applyMiddleware(ThunkMiddleware,logger));

export default store;