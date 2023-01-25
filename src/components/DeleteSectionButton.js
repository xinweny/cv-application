import { Component } from 'react';

class DeleteSectionButton extends Component {

	render() {
		return (
			<button onClick={() => this.props.handleClick(this.props.section, this.props.id)}>x</button>
		);
	}
}

export default DeleteSectionButton;