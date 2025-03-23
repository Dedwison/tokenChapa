import Header from './Header';
import Faucet from './Faucet';
import Balance from './Balance';
import Tranfer from './Transfer';
import Footer from './Footer';
import "../styles.css"

function App() {

  return (
    <div id='screen'>
      <Header />
      <div className="component-container">
        <Faucet />
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
