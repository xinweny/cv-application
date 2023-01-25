import { Component } from 'react';

class WorkExperienceForm extends Component {
	render() {
		return (
			<form className="work-experience-form">
				<input type="text" placeholder="Position"/>
				<input type="text" placeholder="Company"/>
				<input type="text" placeholder="Location"/>
				<input type="text" placeholder="From"/>
				<input type="text" placeholder="To"/>
				<textarea cols="30" rows="3" placeholder="Job roles"></textarea>
			</form>
		);
	}
}

export default WorkExperienceForm;