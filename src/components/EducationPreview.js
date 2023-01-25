import { Component } from 'react';

class EducationPreview extends Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<p>Institution name</p>
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

export default EducationPreview;