import ReactToPrint from 'react-to-print';

import '../styles/Header.css';

function Header(props) {
	return (
		<div className="header">
				<h1>CV Generator</h1>
				<ReactToPrint trigger={props.trigger} content={props.content} />
		</div>
	);
}

export default Header;