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

		this.addWorkSection = this.addWorkSection.bind(this);
		this.addEducationSection = this.addEducationSection.bind(this);
	}

	addWorkSection() {
		const newSection = {
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
			work: [...this.work, newSection],
		})
	}

	addEducationSection() {
		const newSection = {
			id: uniqid(),
			name: '',
			location: '',
			cert: '',
			from: '',
			to: '',
		}

		this.setState({
			...this.state,
			education: [...this.education, newSection],
		})
	}

	render() {
		return (
			<div>
				<CVForm />
				<CVPreview />
			</div>
		);
	}
}

export default Content;