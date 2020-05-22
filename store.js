import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  errors: {},
};

export function initializeStore(State = initialState) {
  return createStore(
    rootReducer,
    State,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
