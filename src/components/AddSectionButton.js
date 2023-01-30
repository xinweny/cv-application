import { Component } from 'react';

import '../styles/AddSectionButton.css';
import addBtnIcon from '../assets/add-circle.svg';

class AddSectionButton extends Component {
	render() {
		return (
			<button className="add-section-btn" onClick={this.props.handleClick}>
				<img src={addBtnIcon} alt="Add button" />
			</button>
		);
	}
}

export default AddSectionButton;