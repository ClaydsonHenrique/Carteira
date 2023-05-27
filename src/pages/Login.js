import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { addEmail } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    valueEmail: '',
    emails: false,
    senha: false,
    disabled: true,
  };

  validateEmail = ({ target }) => {
    const { value } = target;
    const validate = validator.isEmail(value);
    if (validate) {
      this.setState({ emails: true,
        valueEmail: value,
      }, this.validateInputs);
    } else {
      this.setState({ emails: false }, this.validateInputs);
    }
  };

  validateSenha = ({ target }) => {
    const { value } = target;
    const min = 6;
    const validate = value.length >= min;
    if (validate) {
      this.setState({ senha: true }, this.validateInputs);
    } else {
      this.setState({ senha: false }, this.validateInputs);
    }
  };

  validateInputs = () => {
    const { senha, emails } = this.state;
    const valida = senha && emails;
    if (valida) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const { valueEmail } = this.state;
    dispatch(addEmail(valueEmail));
  };

  render() {
    const { disabled } = this.state;
    const { history } = this.props;
    console.log(history);
    return (
      <section className="container-login">
        <h1 className="title">TrybeWallet</h1>
        <section className="container-input">
          <label>
            <input
              className="input"
              name="email"
              type="text"
              data-testid="email-input"
              placeholder="email"
              onChange={ this.validateEmail }
            />
          </label>
          <label>
            <input
              className="input senha"
              name="senha"
              type="password"
              data-testid="password-input"
              placeholder="senha"
              onChange={ this.validateSenha }
            />
          </label>
          <Link to="/carteira">
            <button
              className="btn"
              disabled={ disabled }
              onClick={ this.handleClick }
            >
              Entrar

            </button>
          </Link>
        </section>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.email,
});

export default connect(mapStateToProps)(Login);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
