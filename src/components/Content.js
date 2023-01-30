import { Component } from 'react';

import CV from './CV';

import '../styles/Content.css';

class Content extends Component {
	render() {
		return (
			<div className="content">
				<CV ref={this.props.printRef} />
			</div>
		);
	}
}

export default Content;