import { Component } from 'react';

import PersonalDetailsPreview from './PersonalDetailsPreview';
import WorkExperiencePreview from './WorkExperiencePreview';
import EducationPreview from './EducationPreview';

class CVPreview extends Component {
	render() {
		return (
			<div>
				<PersonalDetailsPreview info={this.props.cvInfo.personal} />
				<div>
					<h3>Work Experience</h3>
					{this.props.cvInfo.work.map(work =>
						<WorkExperiencePreview key={work.id} info={work} />
					)}
				</div>
				<div>
					<h3>Education</h3>
					{this.props.cvInfo.education.map(ed =>
						<EducationPreview key={ed.id} info={ed} />
					)}
				</div>
			</div>
		);
	}
}

export default CVPreview;