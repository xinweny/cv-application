import { Component } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import '../styles/App.css';

class App extends Component {
  render () {
    return (
      <div className="app">
        <Header trigger={() => <button className="print-button">Print PDF</button>} content={() => this.componentRef} />
        <Content printRef={el => this.componentRef = el} />
        <Footer />
      </div>
    );
  }
}

export default App;
