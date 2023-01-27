import { Component } from 'react';

import CV from './CV';

import '../styles/Content.css';

class Content extends Component {
	render() {
		return (
			<div className="content">
				<CV addWork={this.addWorkExperience} addEd={this.addEducation} deleteSection={this.deleteSection} updateSection={this.updateSection} updatePersonal={this.updatePersonalDetails} />
			</div>
		);
	}
}

export default Content;