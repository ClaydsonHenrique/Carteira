import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, dividaTotal } = this.props;

    return (
      <div className="dados">
        <p data-testid="email-field">
          {' '}
          { email }
        </p>
        <p data-testid="total-field">{dividaTotal}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  dividaTotal: state.wallet.dividaTotal.toString(),
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  dividaTotal: PropTypes.string.isRequired,
};

Header.defaultProps = {
  email: '',
};
