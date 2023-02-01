import { useRef } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import '../styles/App.css';

function App() {
  const componentRef = useRef();

  return (
    <div className="app">
      <Header trigger={() => <button className="print-button">Print PDF</button>} content={() => componentRef.current} />
      <Content printRef={componentRef} />
      <Footer />
    </div>
  );
}

export default App;
