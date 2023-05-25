// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  despesas: [],

};

const reducerWallet = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state.wallet,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default reducerWallet;
