import { Component } from 'react';

import PersonalDetailsPreview from './PersonalDetailsPreview';
import WorkExperiencePreview from './WorkExperiencePreview';
import EducationPreview from './EducationPreview';

class CVPreview extends Component {
	render() {
		return (
			<div>
				<PersonalDetailsPreview />
				<div>
					<h3>Work Experience</h3>
					<WorkExperiencePreview />
				</div>
				<div>
					<h3>Education</h3>
					<EducationPreview />
				</div>
			</div>
		);
	}
}

export default CVPreview;