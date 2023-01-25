import { Component } from 'react';

class EducationForm extends Component {
	render() {
		return (
			<form className="education-form">
				<input type="text" placeholder="Institution name"/>
				<input type="text" placeholder="Location"/>
				<input type="text" placeholder="Name of degree/certification"/>
				<label htmlFor="from">From</label>
				<input name="from" type="date"/>
				<label htmlFor="to">To</label>
				<input name="to" type="date"/>
			</form>
		);
	}
}

export default EducationForm;