import { combineReducers } from 'redux';
import reducer from './user';
import reducerWallet from './wallet';

const combineReduce = combineReducers({
  wallet: reducerWallet,
  user: reducer,
});

export default combineReduce;
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
