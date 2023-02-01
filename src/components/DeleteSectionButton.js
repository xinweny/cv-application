import '../styles/DeleteSectionButton.css';
import deleteBtnIcon from '../assets/cross-circle.svg';

function DeleteSectionButton(props) {
	return (
		<button className="delete-button" onClick={event => {
			event.preventDefault();
			props.handleClick(props.id);
		}}>
			<img src={deleteBtnIcon} alt="Delete button" />
		</button>
	);
}

export default DeleteSectionButton;