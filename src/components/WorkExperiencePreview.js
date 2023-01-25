import { Component } from 'react';

class WorkExperiencePreview extends Component {
	render() {
		const { info } = this.props;

		return (
			<div>
				<div>
					<div>
						<p>{info.position}</p>
						<p>{info.company}</p>
						<p>{info.location}</p>
					</div>
					<p>{info.from} - {info.to}</p>
				</div>
				<div>
					<p>{info.description}</p>
				</div>
			</div>
		);
	}
}

export default WorkExperiencePreview;