import { Component } from 'react';

class WorkExperiencePreview extends Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<p>Position</p>
						<p>Company</p>
						<p>Location</p>
					</div>
					<p>From - To</p>
				</div>
				<div>
					<p>Description</p>
				</div>
			</div>
		);
	}
}

export default WorkExperiencePreview;