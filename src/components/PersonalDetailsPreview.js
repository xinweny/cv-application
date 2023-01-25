import { Component } from 'react';

class PersonalDetailsPreview extends Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<h2>Full name</h2>
						<p>Job title</p>
					</div>
					<div>
						<p>Email address</p>
						<p>Phone number</p>
						<p>Address</p>
					</div>
				</div>
				<div>
					<p>Description</p>
				</div>
			</div>
		);
	}
}

export default PersonalDetailsPreview;