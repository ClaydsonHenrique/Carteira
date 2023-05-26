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

export function fetchApiTest() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        dispatch(addcurrencies(
          Object.entries(data).filter((moeda) => moeda[0] !== 'USDT'),
        ));
      });
  };
}
