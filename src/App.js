import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Card from './Components/Card';
function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    < div class="mainfile">
    <div>
    <Header />
    </div>
    <div>
    <Banner />
    </div>

    <div>
    <Card />
    </div>

<div></div>

    <div>
    <Footer />
    </div>



    </div>
  );
}

export default App;
