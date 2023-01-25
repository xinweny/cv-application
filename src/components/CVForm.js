import { Component } from 'react';

import PersonalDetailsForm from './PersonalDetailsForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import AddSectionButton from './AddSectionButton';

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
					<div>
						<WorkExperienceForm />
					</div>
					<AddSectionButton />
				</div>
				<div>
					<h3>Education</h3>
					<div>
						<EducationForm />
					</div>
					<AddSectionButton />
				</div>
			</div>
		);
	}
}

export default CVForm;