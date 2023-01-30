import { Component } from 'react';

import '../styles/DeleteSectionButton.css';
import deleteBtnIcon from '../assets/cross-circle.svg';

class DeleteSectionButton extends Component {
	render() {
		return (
			<button className="delete-button" onClick={event => {
				event.preventDefault();
				return this.props.handleClick(this.props.section, this.props.id);
			}}>
				<img src={deleteBtnIcon} alt="Delete button" />
			</button>
		);
	}
}

export default DeleteSectionButton;