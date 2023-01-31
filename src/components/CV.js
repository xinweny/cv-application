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
				name: 'JOHN DOE',
				title: 'FULLSTACK WEB DEVELOPER',
				address: '123 Example Rd, Toronto',
				email: 'example123@gmail.com',
				tel: '(012) 345-6789',
				website: 'https://example.linkedin.com',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			},
			work: [
				{
					id: uniqid(),
					position: 'Junior Web Developer',
					company: 'Pear Inc.',
					location: 'Toronto, Canada',
					from: 'Nov 2021',
					to: 'Present',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				{
					id: uniqid(),
					position: 'Software Engineer Intern',
					company: 'AirCnD',
					location: 'Vancouver, Canada',
					from: 'Aug 2020',
					to: 'Aug 2021',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				}
			],
			education: [
				{
					id: uniqid(),
					name: 'King\'s University',
					location: 'Kingston, Canada',
					cert: 'MSc Hons. Computer Science',
					from: '2018',
					to: '2020',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				},
				{
					id: uniqid(),
					name: 'University of Toronto',
					location: 'Toronto, Canada',
					cert: 'BSc Hons. Engineering',
					from: '2015',
					to: '2018',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				},
			],
			skills: [
				{
					id: uniqid(),
					skill: 'JavaScript',
				},
				{
					id: uniqid(),
					skill: 'ReactJS & NodeJS',
				},
				{
					id: uniqid(),
					skill: 'SQL',
				},
				{
					id: uniqid(),
					skill: 'HTML & CSS',
				},
				{
					id: uniqid(),
					skill: 'Unix shell',
				},
				{
					id: uniqid(),
					skill: 'Python',
				},
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
						<h3>SKILLS</h3>
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
						<h3>WORK EXPERIENCE</h3>
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
						<h3>EDUCATION</h3>
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