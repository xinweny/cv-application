import { Component } from 'react';
import uniqid from 'uniqid';

import PersonalSection from './PersonalSection';
import WorkExperienceSection from './WorkExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import AddSectionButton from './AddSectionButton';

import '../styles/CV.css';

class CV extends Component {
	constructor(props) {
		super(props);

		this.state = {
			personal: {
				name: 'Full Name',
				title: 'Professional Title',
				address: '123 Example Rd, Toronto, Canada',
				email: 'example123@gmail.com',
				tel: '(012) 345-6789',
				website: 'https://example.linkedin.com',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			work: [
				{
					id: uniqid(),
					position: 'Junior Web Developer',
					company: 'Pear Inc.',
					location: 'Toronto, Canada',
					from: 'Nov 2020',
					to: 'Present',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				}
			],
			education: [
				{
					id: uniqid(),
					name: 'King\'s University',
					location: 'Kingston, Canada',
					cert: 'Computer Science (Bachelors)',
					from: '2017',
					to: '2020',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				}
			],
			skills: [
				{
					id: uniqid(),
					skill: 'JavaScript',
				}
			],
		}

		this.addWorkExperience = this.addWorkExperience.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.deleteSection = this.deleteSection.bind(this);
		this.updateSection = this.updateSection.bind(this);
		this.updatePersonalDetails = this.updatePersonalDetails.bind(this);
	}

	addWorkExperience() {
		const workExp = {
			id: uniqid(),
			position: '',
			company: '',
			location: '',
			from: '',
			to: '',
			description: '',
		}

		this.setState({
			...this.state,
			work: [...this.state.work, workExp],
		})
	}

	addEducation() {
		const education = {
			id: uniqid(),
			name: '',
			location: '',
			cert: '',
			from: '',
			to: '',
			description: '',
		}

		this.setState({
			...this.state,
			education: [...this.state.education, education],
		})
	}

	addSkill() {
		const skill = {
			id: uniqid(),
			skill: '',
		}

		this.setState({
			...this.state,
			skills: [...this.state.skills, skill],
		})
	}

	deleteSection(section, id) {
		const newState = {...this.state};
		newState[section] = newState[section].filter(info => info.id !== id);

		this.setState(newState);
	}

	updatePersonalDetails(field, value) {
		const newState = {...this.state};
		newState.personal[field] = value;

		this.setState(newState);
	}

	updateSection(section, id, field, value) {
		const newState = {...this.state};
		const infos = newState[section];

		const index = infos.findIndex(info => info.id === id);

		infos[index][field] = value;

		this.setState(newState);
	}

	render() {
		return (
			<div className="cv">
				<PersonalSection info={this.state.personal} handleChange={this.updatePersonalDetails} />
				<div className="cv-skills">
					<div className="section-header">
						<h3>Skills</h3>
						<AddSectionButton handleClick={this.addSkill} />
					</div>
					<div className="sections skills-sections">
						{this.state.skills.map(skill =>
							<SkillsSection key={skill.id} skill={skill} handleChange={this.updateSection} handleBtnClick={this.deleteSection} />
						)}
					</div>
				</div>
				<div className="cv-work">
					<div className="section-header">
						<h3>Work Experience</h3>
						<AddSectionButton handleClick={this.addWorkExperience} />
					</div>
					<div className="sections work-sections">
						{this.state.work.map(work =>
							<WorkExperienceSection key={work.id} work={work} handleChange={this.updateSection} handleBtnClick={this.deleteSection} />
						)}
					</div>
				</div>
				<div className="cv-education">
					<div className="section-header">
						<h3>Education</h3>
						<AddSectionButton handleClick={this.addEducation} />
					</div>
					<div className="sections education-sections">
						{this.state.education.map(ed =>
							<EducationSection key={ed.id} ed={ed} handleChange={this.updateSection} handleBtnClick={this.deleteSection} />
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default CV;