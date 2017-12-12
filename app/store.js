import { createStore, applyMiddleware } from 'redux';
import combinedReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));

export default store;
