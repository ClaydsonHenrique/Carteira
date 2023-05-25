import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addcurrencies } from '../redux/actions/index';

class WalletForm extends Component {
  componentDidMount() {
    this.fetchApiTEst();
  }

  fetchApiTEst = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const valores = Object.entries(data);
    const keys = Object.keys(data).filter((key) => key !== 'USDT');
    const { dispatch } = this.props;
    dispatch(addcurrencies(keys));
    const filterconcurrice = valores.map((valor) => valor[1]);
    console.log(filterconcurrice);
  };

  render() {
    const { currencies } = this.props;
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
          {currencies.map((moeda, index) => (
            <option key={ index }>{moeda}</option>
          ))}
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
        <button> Adicionar despesa</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
