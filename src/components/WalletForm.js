import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>
        <label>
          despesas:
          <input type="text" data-testid="value-input" />
        </label>
        <label>
          description:
          <input type="text" data-testid="description-input" />
        </label>
        <select data-testid="currency-input">
          <option>name</option>
        </select>
        <select data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúdes">Saúde</option>
        </select>
      </div>
    );
  }
}

export default WalletForm;
