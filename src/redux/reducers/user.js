import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: { email: '' },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      user: {
        ...state.user,
        email: action.payload,
      },
    };
  default:
    return state;
  }
};

export default reducer;
