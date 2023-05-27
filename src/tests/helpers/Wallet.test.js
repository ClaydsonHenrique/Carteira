import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

const initialEntries = ['/carteira'];
const initialState = { user: { email: 'aaa@gmail.com' } };
test('verificando se alerar o estado global renderiza o email na pagina carteira', async () => {
  renderWithRouterAndRedux(<App />, { initialEntries, initialState });

  await waitFor(() => {
    expect(screen.queryByText('aaa@gmail.com')).toBeInTheDocument();
  });
});

test('verifica inputs na pagina carteira', async () => {
  renderWithRouterAndRedux(<App />, { initialEntries, initialState });

  const despesa = screen.getByRole('textbox', { name: /despesas:/i });
  const descriptin = screen.getByRole('textbox', { name: /description:/i });
  const currency = screen.getByTestId('currency-input');
  const metodo = screen.getByTestId('method-input');
  const tag = screen.getByTestId('tag-input');
  const valorDespesa = screen.getByTestId('total-field');
  const btn = screen.getByRole('button', { name: /adicionar despesa/i });

  expect(despesa).toBeInTheDocument();
  expect(descriptin).toBeInTheDocument();
  expect(currency).toBeInTheDocument();
  expect(metodo).toBeInTheDocument();
  expect(tag).toBeInTheDocument();
  expect(btn).toBeInTheDocument();

  fireEvent.input(despesa, { target: { value: '10' } });

  fireEvent.input(descriptin, { target: { value: 'fdfdfd' } });

  fireEvent.input(currency, { target: { value: 'USD' } });
  await waitFor(() => {
    expect(currency).toHaveValue('USD');
  });
  fireEvent.input(metodo, { target: { value: 'Cartão de crédito' } });
  expect(metodo).toHaveValue('Cartão de crédito');

  fireEvent.input(tag, { target: { value: 'Trabalho' } });
  expect(tag).toHaveValue('Trabalho');

  fireEvent.click(btn);
  await waitFor(() => {
    expect(valorDespesa).toHaveTextContent('49.95');
  });
});
