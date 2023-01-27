import { Component } from 'react';

import CVField from './CVField';
import DeleteSectionButton from './DeleteSectionButton';

class EducationSection extends Component {
	bindArgs(field) {
		return (e => this.props.handleChange('education', this.props.ed.id, field, e.target.value));
	}

	render() {
		const { ed, handleBtnClick } = this.props;

		return (
			<div>
				<div>
					<div>
						<CVField clsName="ed-name" value={ed.name} handleChange={this.bindArgs('name')} placeholder="Institution" />
						<CVField clsName="ed-location" value={ed.location} handleChange={this.bindArgs('location')} placeholder="Location" />
					</div>
					<div>
					<CVField clsName="ed-cert" value={ed.cert} handleChange={this.bindArgs('cert')} placeholder="Certification" />
						<div>
							<CVField clsName="ed-from" value={ed.from} handleChange={this.bindArgs('from')} placeholder="From" />
							<p>-</p>
							<CVField clsName="ed-to" value={ed.to} handleChange={this.bindArgs('to')} placeholder="To" />
						</div>
					</div>
				</div>
				<div>
				<CVField clsName="ed-description" value={ed.description} handleChange={this.bindArgs('cert')} isTextArea={true} placeholder="Description" />
				</div>
				<DeleteSectionButton section='education' id={ed.id} handleClick={handleBtnClick} />
			</div>
		);
	}
}

export default EducationSection;