import { Component } from 'react';

import CVField from './CVField';

class PersonalSection extends Component {
	bindArgs(field) {
		return (e => this.props.handleChange(field, e.target.value));
	}

	render() {
		const { info } = this.props;

		return (
			<div>
				<div>
					<div>
						<CVField clsName="personal-name" value={info.name} handleChange={this.bindArgs('name')} />
						<CVField clsName="personal-title" value={info.title} handleChange={this.bindArgs('title')} />
					</div>
					<div className="contact-details">
						<CVField clsName="personal-email" value={info.email} handleChange={this.bindArgs('email')} />
						<CVField clsName="personal-tel" value={info.tel} handleChange={this.bindArgs('tel')} />
						<CVField clsName="personal-address" value={info.address} handleChange={this.bindArgs('address')} />
					</div>
				</div>
				<div>
					<CVField clsName="personal-description" value={info.description} handleChange={this.bindArgs('description')} />
				</div>
			</div>
		);
	}
}

export default PersonalSection;