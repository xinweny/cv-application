import { Component } from 'react';

class EducationForm extends Component {
	render() {
		return (
			<form className="education-form">
				<input type="text" placeholder="Institution name"/>
				<input type="text" placeholder="Location"/>
				<input type="text" placeholder="Name of degree/certification"/>
				<input type="text" placeholder="From"/>
				<input type="text" placeholder="To"/>
			</form>
		);
	}
}

export default EducationForm;