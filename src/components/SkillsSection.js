import { Component } from 'react';

import CVField from './CVField';
import DeleteSectionButton from './DeleteSectionButton';

class SkillsSection extends Component {
	render() {
		const { skill, handleBtnClick, handleChange } = this.props;

		return (
			<div>
				<CVField clsName="skill-name" value={skill.skill} handleChange={e => handleChange('skills', skill.id, 'skill', e.target.value)} />
				<DeleteSectionButton section='skills' id={skill.id} handleClick={handleBtnClick}/>
			</div>
		);
	}
}

export default SkillsSection;