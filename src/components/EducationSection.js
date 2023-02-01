import CVField from './CVField';
import DeleteSectionButton from './DeleteSectionButton';

import '../styles/EducationSection.css';

function EducationSection(props) {
	const { ed, handleBtnClick } = props;

	const bindArgs = field => (e => props.handleChange('education', ed.id, field, e.target.value))

	return (
		<div className="education-section section">
			<div className="section-content">
				<div className="section-content-header flex-space-between">
					<CVField clsName="ed-cert" value={ed.cert} handleChange={bindArgs('cert')} placeholder="Certification" />
					<div className="flex-gap">
						<CVField clsName="ed-from" value={ed.from} handleChange={bindArgs('from')} placeholder="From" />
						<p>-</p>
						<CVField clsName="ed-to" value={ed.to} handleChange={bindArgs('to')} placeholder="To" />
					</div>
				</div>
				<div className="section-content-header flex-gap">
					<CVField clsName="ed-name" value={ed.name} handleChange={bindArgs('name')} placeholder="Institution" />
					<p>ー</p>
					<CVField clsName="ed-location" value={ed.location} handleChange={bindArgs('location')} placeholder="Location" />
				</div>
				<CVField clsName="ed-description" value={ed.description} handleChange={bindArgs('description')} isTextArea={true} placeholder="Description" />
			</div>
			<DeleteSectionButton section='education' id={ed.id} handleClick={handleBtnClick} />
		</div>
	);
}

export default EducationSection;