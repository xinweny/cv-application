import { Component } from 'react';

class PersonalDetailsForm extends Component {
	render() {
		return (
			<form className="personal-details-form">
				<input type="text" placeholder="Full name"/>
				<input type="text" placeholder="Job title"/>
				<input type="text" placeholder="Address"/>
				<input type="text" placeholder="Email address"/>
				<input type="tel" placeholder="Phone number"/>
				<textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
			</form>
		);
	}
}

export default PersonalDetailsForm;