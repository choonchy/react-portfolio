import React from 'react';
// import ColourPalette from './ColourPalette';
import './Footer.css';
import LinkedInLogo from '../images/LinkedIn Logo.png';
import GitHubLogo from '../images/GitHub Logo.png';

const styles = {
	footer: {
		textAlign: 'center',
	},
	div: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	logo: {
		width: '75px',
		padding: '0.5rem',
	},
};

export default function Footer() {
	return (
		<footer style={styles.footer} className="footer">
			<p>Tom Chappell</p>
			<div style={styles.div}>
				<a
					href="https://www.linkedin.com/in/tom-chappell-05a539140/"
					target="_blank"
					rel="noreferrer"
				>
					<img style={styles.logo} src={LinkedInLogo} alt="LinkedIn Logo"></img>
				</a>
				<a href="https://github.com/choonchy" target="_blank" rel="noreferrer">
					<img style={styles.logo} src={GitHubLogo} alt="GitHub Logo"></img>
				</a>
			</div>
		</footer>
	);
}
