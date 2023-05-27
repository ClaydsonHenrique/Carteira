import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removedivida } from '../redux/actions';

class Table extends Component {
  deleteDivida = (id, valor) => {
    const { dispatch } = this.props;
    dispatch(removedivida(id, valor));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses ? (
                expenses.map((expense) => {
                  const { description,
                    tag,
                    method,
                    value,
                    currency,
                    exchangeRates,
                    id } = expense;

                  const filterExchange = Object.values(
                    exchangeRates,
                  ).find((item) => item.code === currency);
                  const valor = (Number(value) * Number(filterExchange.ask)).toFixed(2);
                  return (
                    <tr key={ id }>
                      <td>{description}</td>
                      <td>{filterExchange.name}</td>
                      <td>{tag}</td>
                      <td>{method}</td>
                      <td>{value % 1 === 0 ? `${value}.00` : value}</td>
                      <td>{Number(filterExchange.ask).toFixed(2)}</td>
                      <td>{valor}</td>
                      <td>Real</td>
                      <td>
                        <button
                          data-testid="delete-btn"
                          onClick={ () => this.deleteDivida(id, valor) }
                        >
                          deletar
                        </button>

                      </td>
                    </tr>
                  );
                })
              ) : ''
            }
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
  dispatch: PropTypes.func.isRequired,

};
