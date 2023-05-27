import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <section className="container">
        <section className="container-header">
          <Header />
          <WalletForm />
        </section>
        <section>
          <Table />
        </section>
      </section>
    );
  }
}

export default Wallet;
