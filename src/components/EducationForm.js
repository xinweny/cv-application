import { Component } from 'react';

import DeleteSectionButton from './DeleteSectionButton';

class EducationForm extends Component {
	render() {
		const { id, handleChange } = this.props;
		const section = 'education';

		return (
				<form className="education-form">
					<input type="text" placeholder="Institution name" onChange={e => handleChange(section, id, 'name', e.target.value)}/>
					<input type="text" placeholder="Location" onChange={e => handleChange(section, id, 'location', e.target.value)}/>
					<input type="text" placeholder="Name of degree/certification" onChange={e => handleChange(section, id, 'cert', e.target.value)}/>
					<input type="text" placeholder="From" onChange={e => handleChange(section, id, 'from', e.target.value)}/>
					<input type="text" placeholder="To" onChange={e => handleChange(section, id, 'to', e.target.value)}/>
					<textarea cols="30" rows="3" placeholder="Description" onChange={e => handleChange(section, id, 'description', e.target.value)}></textarea>
					<DeleteSectionButton section={section} id={id} handleClick={this.props.handleBtnClick} />
				</form>
		);
	}
}

export default EducationForm;