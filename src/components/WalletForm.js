import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiTest } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiTest());
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div className="container-inputs">
        <label>
          despesas:
          <input type="text" data-testid="value-input" className="nameInput" />
        </label>
        <label>
          description:
          <input type="text" data-testid="description-input" className="nameInput" />
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
  currencies: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
  dispatch: PropTypes.func.isRequired,
};
