import { Component } from 'react';

import ReactToPrint from 'react-to-print';

import '../styles/Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
					<h1>CV Generator</h1>
					<ReactToPrint trigger={this.props.trigger} content={this.props.content} />
			</div>
		);
	}
}

export default Header;