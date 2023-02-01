import CVField from './CVField';
import DeleteSectionButton from './DeleteSectionButton';

import '../styles/WorkExperienceSection.css';
function WorkExperienceSection(props) {
	const { work, handleBtnClick } = props;

	const bindArgs = field => (e => props.handleChange('work', work.id, field, e.target.value));

	return (
		<div className="work-section section">
			<div className="section-content">
				<div className="flex-space-between section-content-header">
					<CVField clsName="work-position" value={work.position} handleChange={bindArgs('position')} placeholder="Job title" />
					<div className="flex-gap">
						<CVField clsName="work-from" value={work.from} handleChange={bindArgs('from')} placeholder="From" />
						<p>-</p>
						<CVField clsName="work-to" value={work.to} handleChange={bindArgs('to')} placeholder="To" />
					</div>
				</div>
				<div className="flex-gap section-content-header">
					<CVField clsName="work-company" value={work.company} handleChange={bindArgs('company')} placeholder="Company name" />
					<p>ー</p>
					<CVField clsName="work-location" value={work.location} handleChange={bindArgs('location')} placeholder="Location" />
				</div>
				<CVField clsName="work-description" value={work.description} handleChange={bindArgs('description')} isTextArea={true} placeholder="Job roles and responsibilities" />
			</div>
			<DeleteSectionButton section="work" id={work.id} handleClick={handleBtnClick} />
		</div>
	);
}

export default WorkExperienceSection;