// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES, ADD_EXPENSE, TOTAL_DIVIDA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  dividaTotal: 0,
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.concat(action.payload),
    };
  case TOTAL_DIVIDA:
    return {
      ...state,
      dividaTotal: (parseFloat(state.dividaTotal) + action.payload).toFixed(2),
    };
  default:
    return state;
  }
};

export default reducerWallet;
