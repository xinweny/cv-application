import { Component } from 'react';

import '../styles/DeleteSectionButton.css';

class DeleteSectionButton extends Component {

	render() {
		return (
			<button className="delete-button" onClick={() => this.props.handleClick(this.props.section, this.props.id)}>x</button>
		);
	}
}

export default DeleteSectionButton;