import { Component } from 'react';

import DeleteSectionButton from './DeleteSectionButton';

class EducationForm extends Component {
	render() {
		return (
			<div>
				<form className="education-form">
					<input type="text" placeholder="Institution name"/>
					<input type="text" placeholder="Location"/>
					<input type="text" placeholder="Name of degree/certification"/>
					<input type="text" placeholder="From"/>
					<input type="text" placeholder="To"/>
					<textarea cols="30" rows="3" placeholder="Description"></textarea>
				</form>
				<DeleteSectionButton section='education' id={this.props.id} handleClick={this.props.handleBtnClick} />
			</div>
		);
	}
}

export default EducationForm;