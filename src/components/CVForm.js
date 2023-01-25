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
						{this.props.cvInfo.work.map(work => 
							<WorkExperienceForm key={work.id} id={work.id} handleBtnClick={this.props.deleteSection} handleChange={this.props.updateSection} />
						)}
					</div>
					<AddSectionButton handleClick={this.props.addWork} />
				</div>
				<div>
					<h3>Education</h3>
					<div>
						{this.props.cvInfo.education.map(ed => 
							<EducationForm key={ed.id} id={ed.id} handleBtnClick={this.props.deleteSection} handleChange={this.props.updateSection} />
						)}
					</div>
					<AddSectionButton handleClick={this.props.addEd} />
				</div>
			</div>
		);
	}
}

export default CVForm;