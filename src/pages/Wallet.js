import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <section className="container">
        <section className="container-header">
          <Header />
          <WalletForm />
        </section>
        <section>
          <p>grafico</p>
        </section>
      </section>
    );
  }
}

export default Wallet;
