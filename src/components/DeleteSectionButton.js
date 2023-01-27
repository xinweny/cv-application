import { Component } from 'react';

class DeleteSectionButton extends Component {
	render() {
		return (
			<button className="delete-button" onClick={event => {
				event.preventDefault();
				return this.props.handleClick(this.props.section, this.props.id);
			}}>x</button>
		);
	}
}

export default DeleteSectionButton;