import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const allFeedback = (state = [], action) => {
  if (action.type === 'SET_FEEDBACK') {
    return action.payload;
  } else return state;
};

const feedback = (state = {}, action) => {
  if (action.type === 'ADD_FEEDBACK') {
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    allFeedback,
    feedback,
  }),
  applyMiddleware(logger)
);

export default store;
