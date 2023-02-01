import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import '../styles/App.css';

function App() {
  let componentRef;

  return (
    <div className="app">
      <Header trigger={() => <button className="print-button">Print PDF</button>} content={() => componentRef} />
      <Content printRef={el => componentRef = el} />
      <Footer />
    </div>
  );
}

export default App;
