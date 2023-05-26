import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiTest, addexpense, totaldivida } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiTest());
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSelectChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { dispatch } = this.props;
    const resultado = await dispatch(fetchApiTest());
    console.log(resultado);
    dispatch(
      addexpense({
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates: resultado,
      }),
    );
    const filter = Object.entries(resultado).filter((moeda) => moeda[0] !== 'USDT');
    const filtered = filter.find((moeda) => moeda[0] === currency);
    const getAsk = Number(filtered[1].ask) * Number(value);
    this.setState({ id: id + 1,
      value: '',
      description: '',
    });
    dispatch(totaldivida(getAsk));
  };

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag } = this.state;

    const { currencies } = this.props;
    return (
      <div className="container-inputs">
        <label>
          despesas:
          <input
            value={ value }
            type="text"
            data-testid="value-input"
            className="nameInput"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label>
          description:
          <input
            value={ description }
            type="text"
            data-testid="description-input"
            className="nameInput"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <select
          value={ currency }
          data-testid="currency-input"
          onChange={ this.handleSelectChange }
          name="currency"
        >
          {currencies.map((moeda, index) => (
            <option key={ index } value={ moeda }>{moeda}</option>
          ))}
        </select>
        <select
          data-testid="method-input"
          onChange={ this.handleSelectChange }
          name="method"
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          onChange={ this.handleSelectChange }
          value={ tag }
          name="tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúdes">Saúde</option>
        </select>
        <button onClick={ this.handleClick }> Adicionar despesa</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
  dispatch: PropTypes.func.isRequired,
};
