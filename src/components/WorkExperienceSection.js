import { Component } from 'react';

import CVField from './CVField';
import DeleteSectionButton from './DeleteSectionButton';

class WorkExperienceSection extends Component {
	bindArgs(field) {
		return (e => this.props.handleChange('work', this.props.work.id, field, e.target.value));
	}

	render() {
		const { work, handleBtnClick } = this.props;

		return (
			<div>
				<div>
					<div>
						<CVField clsName="work-position" value={work.position} handleChange={this.bindArgs('position')} />
						<CVField clsName="work-company" value={work.company} handleChange={this.bindArgs('company')} />
						<CVField clsName="work-location" value={work.location} handleChange={this.bindArgs('location')} />
					</div>
					<div>
						<CVField clsName="work-from" value={work.from} handleChange={this.bindArgs('from')} />
						<p>-</p>
						<CVField clsName="work-to" value={work.to} handleChange={this.bindArgs('to')} />
					</div>
				</div>
				<div>
					<CVField clsName="work-description" value={work.description} handleChange={this.bindArgs('description')} rows="3" cols="30" />
				</div>
				<DeleteSectionButton section="work" id={work.id} handleClick={handleBtnClick} />
			</div>
		);
	}
}

export default WorkExperienceSection;