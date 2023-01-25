import { Component } from 'react';

class PersonalDetailsPreview extends Component {
	render() {
		const { info } = this.props;

		return (
			<div>
				<div>
					<div>
						<h2>{info.name}</h2>
						<p>{info.title}</p>
					</div>
					<div>
						<p>{info.email}</p>
						<p>{info.tel}</p>
						<p>{info.address}</p>
					</div>
				</div>
				<div>
					<p>{info.description}</p>
				</div>
			</div>
		);
	}
}

export default PersonalDetailsPreview;