import { Component } from 'react';
import uniqid from 'uniqid';

import CVForm from './CVForm';
import CVPreview from './CVPreview';

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			personal: {
				name: '',
				title: '',
				address: '',
				email: '',
				tel: '',
				description: '',
			},
			work: [
				{
					id: uniqid(),
					position: '',
					company: '',
					location: '',
					from: '',
					to: '',
					description: '',
				}
			],
			education: [
				{
					id: uniqid(),
					name: '',
					location: '',
					cert: '',
					from: '',
					to: '',
					description: '',
				}
			],
		}

		this.addWorkExperience = this.addWorkExperience.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.deleteSection = this.deleteSection.bind(this);
		this.updateSection = this.updateSection.bind(this);
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

	updateSection(section, id, field, value) {
		const newState = {...this.state};
		const infos = newState[section];

		const index = infos.findIndex(info => info.id === id);

		infos[index][field] = value;

		this.setState(newState);
	}

	render() {
		return (
			<div>
				<CVForm cvInfo={this.state} addWork={this.addWorkExperience} addEd={this.addEducation} deleteSection={this.deleteSection} updateSection={this.updateSection} />
				<CVPreview cvInfo={this.state} />
			</div>
		);
	}
}

export default Content;