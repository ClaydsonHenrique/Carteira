// Coloque aqui suas actions.
export const ADD_EMAIL = 'ADD_EMAIL';
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const addcurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies.map((moeda) => moeda[1].code),
});

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addexpense = (...expenses) => ({
  type: ADD_EXPENSE,
  payload: expenses,
});

export const TOTAL_DIVIDA = 'TOTAL_DIVIDA';
export const totaldivida = (divida) => ({
  type: TOTAL_DIVIDA,
  payload: Number(divida),
});
export const REMOVE_DIVIDA = 'REMOVE_DIVIDA';
export const removedivida = (id, value) => ({
  type: REMOVE_DIVIDA,
  payload: id,
  valor: value,
});

export function fetchApiTest() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const filtered = Object.entries(data).filter((moeda) => moeda[0] !== 'USDT');
    dispatch(addcurrencies(filtered));
    return data;
  };
}
