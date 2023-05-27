import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from './renderWith';
import Login from '../../pages/Login';

const initialEntries = ['/'];
const initialState = { user: { email: '' } };
test('verificando componentes na pagina', async () => {
  const { history } = renderWithRouterAndRedux(
    <Login />,
    { initialEntries, initialState },
  );
  const title = screen.getByRole('heading', {
    name: /trybewallet/i,
  });
  expect(title).toBeInTheDocument();
  const inputEmail = screen.getByTestId('email-input');
  expect(inputEmail).toBeInTheDocument();
  const inputsenha = screen.getByTestId('password-input');
  expect(inputsenha).toBeInTheDocument();
  const btn = screen.getByRole('button');

  expect(btn.disabled).toBe(true);

  fireEvent.change(inputEmail, { target: { value: 'aaamail.com' } });
  fireEvent.change(inputsenha, { target: { value: 'aaabbb' } });

  expect(btn.disabled).toBe(true);

  fireEvent.change(inputEmail, { target: { value: 'aaa@gmail.com' } });
  fireEvent.change(inputsenha, { target: { value: 'aaabb' } });

  expect(btn.disabled).toBe(true);

  fireEvent.change(inputEmail, { target: { value: 'aaa@gmail.com' } });
  fireEvent.change(inputsenha, { target: { value: 'aaabbb' } });

  expect(btn.disabled).toBe(false);

  fireEvent.click(btn);

  await waitFor(() => {
    expect(history.location.pathname).toBe('/carteira');
  });
});

test('verificando se estado global é alterado ao clicar no btn', () => {
  const { store } = renderWithRouterAndRedux(
    <Login />,
    { initialEntries, initialState },
  );
  const inputEmail = screen.getByTestId('email-input');
  const inputsenha = screen.getByTestId('password-input');
  fireEvent.change(inputEmail, { target: { value: 'aaaa@gmail.com' } });
  fireEvent.change(inputsenha, { target: { value: 'aaabbb' } });
  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  expect(store.getState().user.email).toBe('aaaa@gmail.com');
});
