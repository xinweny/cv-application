import CVField from './CVField';
import DeleteSectionButton from './DeleteSectionButton';

import '../styles/SkillsSection.css';

function SkillsSection(props) {
		const { skill, handleBtnClick, handleChange } = props;

		return (
			<div className="li-wrapper">
				<div className="skills-section section">
					<CVField clsName="skill-name" value={skill.skill} handleChange={e => handleChange(skill.id, 'skill', e.target.value)} placeholder="Skill name" />
					<DeleteSectionButton id={skill.id} handleClick={handleBtnClick}/>
				</div>
			</div>
		);
}

export default SkillsSection;