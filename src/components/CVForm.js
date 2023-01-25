import { Component } from 'react';

import PersonalDetailsForm from './PersonalDetailsForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';

class CVForm extends Component {
	render() {
		return (
			<div>
				<div>
					<h3>Personal Details</h3>
					<PersonalDetailsForm />
				</div>
				<div>
					<h3>Work Experience</h3>
					<WorkExperienceForm />
				</div>
				<div>
					<h3>Education</h3>
					<EducationForm />
				</div>
			</div>
		);
	}
}

export default CVForm;