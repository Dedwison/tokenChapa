import { useState } from 'react';
import Header from './Header';
import Faucet from './Faucet';
import Balance from './Balance';
import Tranfer from './Transfer';
import Footer from './Footer';
import "../styles.css"
import { tokenChapa_backend } from 'declarations/tokenChapa_backend';

function App(props) {

  return (
    <div id='screen'>
      <Header />
      <div className="component-container">
        <Faucet userPrincipal={props.loggedInPrincipal} />
      </div>
      <div className="component-container">
        <Balance />
      </div>
      <div className="component-container">
        <Tranfer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
