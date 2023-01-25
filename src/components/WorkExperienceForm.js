import { Component } from 'react';

class WorkExperienceForm extends Component {
	render() {
		return (
			<form className="work-experience-form">
				<input type="text" placeholder="Position"/>
				<input type="text" placeholder="Company"/>
				<input type="text" placeholder="Location"/>
				<label htmlFor="from">From</label>
				<input name="from" type="date"/>
				<label htmlFor="to">To</label>
				<input name="to" type="date"/>
				<textarea cols="30" rows="10" placeholder="Job roles"></textarea>
			</form>
		);
	}
}

export default WorkExperienceForm;