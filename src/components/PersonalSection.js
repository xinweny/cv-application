import { Component } from 'react';

import CVField from './CVField';

import '../styles/PersonalSection.css';

class PersonalSection extends Component {
	bindArgs(field) {
		return (e => this.props.handleChange(field, e.target.value));
	}

	render() {
		const { info } = this.props;

		return (
			<div className="personal-section">
				<div className="personal-header">
					<div className="personal-name-title">
						<CVField clsName="personal-name" value={info.name} handleChange={this.bindArgs('name')} placeholder="Full name" />
						<CVField clsName="personal-title" value={info.title} handleChange={this.bindArgs('title')} placeholder="Professional title" />
					</div>
					<div className="contact-details">
						<CVField clsName="personal-tel" value={info.tel} handleChange={this.bindArgs('tel')} placeholder="Tel no." />
						<CVField clsName="personal-address" value={info.address} handleChange={this.bindArgs('address')} placeholder="Home address" />
						<CVField clsName="personal-email" value={info.email} handleChange={this.bindArgs('email')} placeholder="Email"/>
						<CVField clsName="personal-website" value={info.website} handleChange={this.bindArgs('website')} placeholder="Website URL" />
					</div>
				</div>
				<CVField clsName="personal-description" value={info.description} handleChange={this.bindArgs('description')} isTextArea={true} placeholder="Personal summary" />
			</div>
		);
	}
}

export default PersonalSection;