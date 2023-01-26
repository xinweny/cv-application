import { Component } from 'react';

import PersonalDetailsPreview from './PersonalDetailsPreview';
import WorkExperiencePreview from './WorkExperiencePreview';
import EducationPreview from './EducationPreview';

import '../styles/CVPreview.css';

class CVPreview extends Component {
	render() {
		const { cvInfo } = this.props; 

		return (
			<div>
				<PersonalDetailsPreview info={cvInfo.personal} />
				<div>
					<h3>Work Experience</h3>
					{cvInfo.work.map(work =>
						<WorkExperiencePreview key={work.id} info={work} />
					)}
				</div>
				<div>
					<h3>Education</h3>
					{cvInfo.education.map(ed =>
						<EducationPreview key={ed.id} info={ed} />
					)}
				</div>
			</div>
		);
	}
}

export default CVPreview;