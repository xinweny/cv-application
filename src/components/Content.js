import { Component } from 'react';
import uniqid from 'uniqid';

import CVForm from './CVForm';
import CVPreview from './CVPreview';

import '../styles/Content.css';

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			personal: {
				name: 'James Pond',
				title: 'Fullstack Web Developer',
				address: '123 Sun Rd, Toronto, ON A1B 2C3 Canada',
				email: 'jamespond123@gmail.com',
				tel: '(012) 345-6789',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			work: [
				{
					id: uniqid(),
					position: 'Junior Web Developer',
					company: 'Pear Inc.',
					location: 'Toronto, Canada',
					from: '2020',
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
		}

		this.addWorkExperience = this.addWorkExperience.bind(this);
		this.addEducation = this.addEducation.bind(this);
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
			<div className="content">
				<CVForm cvInfo={this.state} addWork={this.addWorkExperience} addEd={this.addEducation} deleteSection={this.deleteSection} updateSection={this.updateSection} updatePersonal={this.updatePersonalDetails} />
				<CVPreview cvInfo={this.state} />
			</div>
		);
	}
}

export default Content;