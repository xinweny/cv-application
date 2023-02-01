import '../styles/AddSectionButton.css';
import addBtnIcon from '../assets/add-circle.svg';

function AddSectionButton(props) {
	return (
		<button className="add-section-btn" onClick={props.handleClick}>
			<img src={addBtnIcon} alt="Add button" />
		</button>
	);
}

export default AddSectionButton;