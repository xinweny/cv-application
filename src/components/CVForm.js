import { Component } from 'react';

import PersonalDetailsForm from './PersonalDetailsForm';
import WorkExperienceForm from './WorkExperienceForm';

class CVForm extends Component {
	render() {
		return (
			<div>
				<PersonalDetailsForm />
				<WorkExperienceForm />
			</div>
		);
	}
}

export default CVForm;