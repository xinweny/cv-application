import CV from './CV';

import '../styles/Content.css';

function Content(props) {
	return (
		<div className="content">
			<CV ref={props.printRef} />
		</div>
	);
}

export default Content;