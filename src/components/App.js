import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import '../styles/App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
