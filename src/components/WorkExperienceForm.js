import { Component } from 'react';

import DeleteSectionButton from './DeleteSectionButton';

class WorkExperienceForm extends Component {
	render() {
		const { id, handleChange } = this.props;
		const section = 'work';

		return (
			<form className="work-experience-form">
				<input type="text" placeholder="Position" onChange={e => handleChange(section, id, 'position', e.target.value)}/>
				<input type="text" placeholder="Company" onChange={e => handleChange(section, id, 'company', e.target.value)}/>
				<input type="text" placeholder="Location" onChange={e => handleChange(section, id, 'location', e.target.value)}/>
				<input type="text" placeholder="From" onChange={e => handleChange(section, id, 'from', e.target.value)}/>
				<input type="text" placeholder="To" onChange={e => handleChange(section, id, 'to', e.target.value)}/>
				<textarea cols="30" rows="3" placeholder="Job roles" onChange={e => handleChange(section, id, 'description', e.target.value)}></textarea>
				<DeleteSectionButton section={section} id={id} handleClick={this.props.handleBtnClick} />
			</form>
		);
	}
}

export default WorkExperienceForm;