import { Component } from 'react';

import PersonalDetailsForm from './PersonalDetailsForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';

class CVForm extends Component {
	render() {
		return (
			<div>
				<PersonalDetailsForm />
				<WorkExperienceForm />
				<EducationForm />
			</div>
		);
	}
}

export default CVForm;