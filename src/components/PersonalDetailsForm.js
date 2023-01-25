import { Component } from 'react';

class PersonalDetailsForm extends Component {
	render() {
		const { handleChange } = this.props;

		return (
			<form className="personal-details-form">
				<input type="text" placeholder="Full name" onChange={e => handleChange('name', e.target.value)}/>
				<input type="text" placeholder="Title" onChange={e => handleChange('title', e.target.value)}/>
				<input type="text" placeholder="Address" onChange={e => handleChange('address', e.target.value)}/>
				<input type="text" placeholder="Email" onChange={e => handleChange('email', e.target.value)}/>
				<input type="tel" placeholder="Phone number" onChange={e => handleChange('tel', e.target.value)}/>
				<textarea name="description" id="" cols="30" rows="3" placeholder="Description" onChange={e => handleChange('description', e.target.value)}></textarea>
			</form>
		);
	}
}

export default PersonalDetailsForm;