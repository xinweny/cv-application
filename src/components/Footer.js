import { Component } from 'react';

import '../styles/Footer.css';
import githubLogo from '../assets/github.svg';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
					<p>Made by <a href="https://github.com/xinweny">xinweny</a> in 2023</p>
					<img src={githubLogo} alt="Github logo" />
			</div>
		);
	}
}

export default Footer;