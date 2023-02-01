import '../styles/Footer.css';
import githubLogo from '../assets/github.svg';

function Footer() {
	return (
		<div className="footer">
				<p>Made by <a href="https://github.com/xinweny">xinweny</a> in 2023</p>
				<a href="https://github.com/xinweny/cv-application">
					<img src={githubLogo} alt="Github logo" />
				</a>
		</div>
	);
}

export default Footer;