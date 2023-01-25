import { Component } from 'react';

import PersonalDetailsPreview from './PersonalDetailsPreview';
import WorkExperiencePreview from './WorkExperiencePreview';

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
				</div>
			</div>
		);
	}
}

export default CVPreview;