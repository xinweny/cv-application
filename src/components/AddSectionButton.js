import { Component } from 'react';

class AddSectionButton extends Component {
	render() {
		return (
			<button onClick={this.props.handleClick}>+</button>
		);
	}
}

export default AddSectionButton;