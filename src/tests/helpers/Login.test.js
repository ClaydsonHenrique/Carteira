import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from './renderWith';
import Login from '../../pages/Login';

test('verificando componentes na pagina', async () => {
  const { history } = renderWithRouterAndRedux(<Login />, '/');
  const inputEmail = screen.getByTestId('email-input');
  expect(inputEmail).toBeInTheDocument();
  const inputsenha = screen.getByTestId('password-input');
  expect(inputsenha).toBeInTheDocument();
  const btn = screen.getByRole('button');
  expect(btn.disabled).toBe(true);
  fireEvent.change(inputEmail, { target: { value: 'aaa@gmail.com' } });
  fireEvent.change(inputsenha, { target: { value: 'aaabbb' } });
  expect(btn.disabled).toBe(false);

  fireEvent.click(btn);

  await waitFor(() => {
    expect(history.location.pathname).toBe('/carteira');
  });
});
