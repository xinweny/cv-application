import { useState } from 'react';

function CVField(props) {
	const [showInput, setShowInput] = useState(props.value === '');

	const handleBlur = event => {
		if (event.target.value !== '') setShowInput(false);
	}

	const handleClick = () => setShowInput(true);

	if (showInput) {
		if (props.isTextArea) {
			return <textarea className={props.clsName} value={props.value} onChange={props.handleChange} onBlur={handleBlur} placeholder={props.placeholder} autoFocus />
		} else {
			return <input className={props.clsName} type="text" value={props.value} onChange={props.handleChange} onBlur={handleBlur} placeholder={props.placeholder} autoFocus />
		}
	}

	return <p className={props.clsName} onClick={handleClick}>{props.value}</p>
}

export default CVField;