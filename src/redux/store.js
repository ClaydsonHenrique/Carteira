import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReduce from './reducers';

const store = createStore(combineReduce, composeWithDevTools(applyMiddleware(thunk)));

if (window.Cypress) {
  window.store = store;
}

export default store;
