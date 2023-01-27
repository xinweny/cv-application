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
						<CVField clsName="ed-name" value={ed.name} handleChange={this.bindArgs('name')} />
						<CVField clsName="ed-location" value={ed.location} handleChange={this.bindArgs('location')} />
					</div>
					<div>
					<CVField clsName="ed-cert" value={ed.cert} handleChange={this.bindArgs('cert')} />
						<div>
							<CVField clsName="ed-from" value={ed.from} handleChange={this.bindArgs('from')} />
							<p>-</p>
							<CVField clsName="ed-to" value={ed.to} handleChange={this.bindArgs('to')} />
						</div>
					</div>
				</div>
				<div>
				<CVField clsName="ed-description" value={ed.description} handleChange={this.bindArgs('cert')} rows="3" cols="30"/>
				</div>
				<DeleteSectionButton section='education' id={ed.id} handleClick={handleBtnClick} />
			</div>
		);
	}
}

export default EducationSection;