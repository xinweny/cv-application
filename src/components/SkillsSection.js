import CVField from './CVField';
import DeleteSectionButton from './DeleteSectionButton';

import '../styles/SkillsSection.css';

function SkillsSection(props) {
		const { skill, handleBtnClick, handleChange } = props;

		return (
			<div className="li-wrapper">
				<div className="skills-section section">
					<CVField clsName="skill-name" value={skill.skill} handleChange={e => handleChange('skills', skill.id, 'skill', e.target.value)} placeholder="Skill name" />
					<DeleteSectionButton section='skills' id={skill.id} handleClick={handleBtnClick}/>
				</div>
			</div>
		);
}

export default SkillsSection;