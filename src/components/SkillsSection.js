import { Component } from 'react';

import CVField from './CVField';
import DeleteSectionButton from './DeleteSectionButton';

import '../styles/SkillsSection.css';

class SkillsSection extends Component {
	render() {
		const { skill, handleBtnClick, handleChange } = this.props;

		return (
			<div className="skills-section section">
				<CVField clsName="skill-name" value={skill.skill} handleChange={e => handleChange('skills', skill.id, 'skill', e.target.value)} placeholder="Skill name" />
				<DeleteSectionButton section='skills' id={skill.id} handleClick={handleBtnClick}/>
			</div>
		);
	}
}

export default SkillsSection;