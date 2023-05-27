// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES, ADD_EXPENSE, TOTAL_DIVIDA, REMOVE_DIVIDA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  dividaTotal: 0,
  moeda: '',
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
      dividaTotal: (Number(state.dividaTotal) + Number(action.payload)).toFixed(2),
    };
  case REMOVE_DIVIDA:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      dividaTotal: (Number(state.dividaTotal) - Number(action.valor)).toFixed(2),
    };
  default:
    return state;
  }
};

export default reducerWallet;
