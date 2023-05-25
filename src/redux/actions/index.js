// Coloque aqui suas actions.
export const ADD_EMAIL = 'ADD_EMAIL';
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const addcurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});
