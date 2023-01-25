import { Component } from 'react';

class PersonalDetailsForm extends Component {
	render() {
		return (
			<div>
				<h3>Personal Details</h3>
				<form className="PersonalDetails">
					<input type="text" placeholder="Full name"/>
					<input type="text" placeholder="Job Title"/>
					<input type="tel" placeholder="Phone number"/>
					<input type="text" placeholder="Address"/>
					<input type="text" placeholder="Email address"/>
					<textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
				</form>
			</div>
		);
	}
}

export default PersonalDetailsForm;