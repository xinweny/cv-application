import { Component } from 'react';

import '../styles/AddSectionButton.css';

class AddSectionButton extends Component {
	render() {
		return (
			<button className="add-section-btn" onClick={this.props.handleClick}>+</button>
		);
	}
}

export default AddSectionButton;