// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state.wallet,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [action.payload],
    };
  default:
    return state;
  }
};

export default reducerWallet;
