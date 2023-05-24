import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <p data-testid="email-field">emails</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

export default Header;
