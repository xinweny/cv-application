import { Component } from 'react';

import DeleteSectionButton from './DeleteSectionButton';

class WorkExperienceForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<form className="work-experience-form">
					<input type="text" placeholder="Position"/>
					<input type="text" placeholder="Company"/>
					<input type="text" placeholder="Location"/>
					<input type="text" placeholder="From"/>
					<input type="text" placeholder="To"/>
					<textarea cols="30" rows="3" placeholder="Job roles"></textarea>
				</form>
				<DeleteSectionButton section='work' id={this.props.id} handleClick={this.props.handleBtnClick} />
			</div>
		);
	}
}

export default WorkExperienceForm;