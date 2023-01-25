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
				}
			],
		}

		this.addWorkExperience = this.addWorkExperience.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.deleteSection = this.deleteSection.bind(this);
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

	render() {
		return (
			<div>
				<CVForm cvInfo={this.state} addWork={this.addWorkExperience} addEd={this.addEducation} deleteSection={this.deleteSection} />
				<CVPreview cvInfo={this.state} />
			</div>
		);
	}
}

export default Content;