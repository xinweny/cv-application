import { Component } from 'react';

class EducationPreview extends Component {
	render() {
		const { info } = this.props;

		return (
			<div>
				<div>
					<div>
						<p>{info.name}</p>
						<p>{info.location}</p>
					</div>
					<div>
						<p>{info.cert}</p>
						<p>{info.from} - {info.to}</p>
					</div>
				</div>
				<div>
					<p>{info.description}</p>
				</div>
			</div>
		);
	}
}

export default EducationPreview;