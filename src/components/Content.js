import { Component } from 'react';

import CV from './CV';
import ReactToPrint from 'react-to-print';

import '../styles/Content.css';

class Content extends Component {
	render() {
		return (
			<div className="content">
				<ReactToPrint trigger={() => <button className="print-button">Print PDF</button>} content={() => this.componentRef} />
				<CV ref={el => this.componentRef = el} />
			</div>
		);
	}
}

export default Content;