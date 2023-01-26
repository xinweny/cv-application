import { Component } from 'react';

import PersonalDetailsForm from './PersonalDetailsForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import AddSectionButton from './AddSectionButton';

import '../styles/CVForm.css';

class CVForm extends Component {
	render() {
		return (
			<div className="cv-form">
				<div className="cv-section">
					<div className="form-header">
						<h3>Personal Details</h3>
					</div>
					<PersonalDetailsForm handleChange={this.props.updatePersonal} />
				</div>
				<div className="cv-section">
					<div className="form-header">
						<h3>Work Experience</h3>
						<AddSectionButton handleClick={this.props.addWork} />
					</div>
					<div>
						{this.props.cvInfo.work.map(work => 
							<WorkExperienceForm key={work.id} id={work.id} handleBtnClick={this.props.deleteSection} handleChange={this.props.updateSection} />
						)}
					</div>
				</div>
				<div className="cv-section">
					<div className="form-header">
						<h3>Education</h3>
						<AddSectionButton handleClick={this.props.addEd} />
					</div>
					<div>
						{this.props.cvInfo.education.map(ed => 
							<EducationForm key={ed.id} id={ed.id} handleBtnClick={this.props.deleteSection} handleChange={this.props.updateSection} />
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default CVForm;