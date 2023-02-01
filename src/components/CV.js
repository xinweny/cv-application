import { useState, forwardRef } from 'react';
import uniqid from 'uniqid';

import PersonalSection from './PersonalSection';
import WorkExperienceSection from './WorkExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import AddSectionButton from './AddSectionButton';

import '../styles/CV.css';

const CV = forwardRef((props, ref) => {
	const [personal, setPersonal] = useState({
		name: 'JOHN DOE',
		title: 'FULLSTACK WEB DEVELOPER',
		address: '123 Example Rd, Toronto',
		email: 'example123@gmail.com',
		tel: '(012) 345-6789',
		website: 'https://example.linkedin.com',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	});

	const [work, setWork] = useState([
		{
			id: uniqid(),
			position: 'Junior Web Developer',
			company: 'Pear Inc.',
			location: 'Toronto, Canada',
			from: 'Nov 2021',
			to: 'Present',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			id: uniqid(),
			position: 'Software Engineer Intern',
			company: 'AirCnD',
			location: 'Vancouver, Canada',
			from: 'Aug 2020',
			to: 'Aug 2021',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	]);

	const [education, setEducation] = useState([
		{
			id: uniqid(),
			name: 'King\'s University',
			location: 'Kingston, Canada',
			cert: 'MSc Hons. Computer Science',
			from: '2018',
			to: '2020',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			id: uniqid(),
			name: 'University of Toronto',
			location: 'Toronto, Canada',
			cert: 'BSc Hons. Engineering',
			from: '2015',
			to: '2018',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	]);

	const [skills, setSkills] = useState([
		{
			id: uniqid(),
			skill: 'JavaScript',
		},
		{
			id: uniqid(),
			skill: 'ReactJS & NodeJS',
		},
		{
			id: uniqid(),
			skill: 'SQL',
		},
		{
			id: uniqid(),
			skill: 'HTML & CSS',
		},
		{
			id: uniqid(),
			skill: 'Unix shell',
		},
		{
			id: uniqid(),
			skill: 'Python',
		},
	]);

	const addWorkExperience = () => setWork([
		...work, 
		{
			id: uniqid(),
			position: '',
			company: '',
			location: '',
			from: '',
			to: '',
			description: '',
		}
	]);

	const addEducation = () => setEducation([
		...education,
		{
			id: uniqid(),
			name: '',
			location: '',
			cert: '',
			from: '',
			to: '',
			description: '',
		}
	]);

	const addSkill = () => setSkills([
		...skills,
		{
			id: uniqid(),
			skill: '',
		}
	]);

	const deleteSection = (state, setState) => (id => setState(state.filter(item => item.id !== id)));

	const updatePersonalDetails = (field, value) => setPersonal({
		...personal,
		[field]: value,
	});

	const updateSection = (state, setState) => {
		return ((id, field, val) => {
			const newState = [...state];

			const index = state.findIndex(item => item.id === id);
			newState[index][field] = val;

			setState(newState);
		});
	}

	return (
		<div className="cv" ref={ref}>
			<PersonalSection info={personal} handleChange={updatePersonalDetails} />
			<div className="cv-skills">
				<div className="section-header">
					<h3>SKILLS</h3>
					<AddSectionButton handleClick={addSkill} />
				</div>
				<div className="sections skills-sections">
					{skills.map(skill =>
						<SkillsSection
							key={skill.id} skill={skill}
							handleChange={updateSection(skills, setSkills)}
							handleBtnClick={deleteSection(skills, setSkills)}
						/>
					)}
				</div>
			</div>
			<div className="cv-work">
				<div className="section-header">
					<h3>WORK EXPERIENCE</h3>
					<AddSectionButton handleClick={addWorkExperience} />
				</div>
				<div className="sections work-sections">
					{work.map(w =>
						<WorkExperienceSection
							key={w.id} work={w}
							handleChange={updateSection(work, setWork)}
							handleBtnClick={deleteSection(work, setWork)}
						/>
					)}
				</div>
			</div>
			<div className="cv-education">
				<div className="section-header">
					<h3>EDUCATION</h3>
					<AddSectionButton handleClick={addEducation} />
				</div>
				<div className="sections education-sections">
					{education.map(ed =>
						<EducationSection
							key={ed.id} ed={ed}
							handleChange={updateSection(education, setEducation)}
							handleBtnClick={deleteSection(education, setEducation)}
						/>
					)}
				</div>
			</div>
		</div>
	);
});

export default CV;