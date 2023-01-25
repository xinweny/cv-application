import { Component } from 'react';

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
					name: '',
					location: '',
					cert: '',
					from: '',
					to: '',
				}
			],
		}
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