import React from 'react';
import ColourPalette from '../ColourPalette';

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
	about: {
		color: ColourPalette.darkPurple,
		backgroundColor: ColourPalette.lightYellow,
		padding: '1rem',
		textAlign: 'center',
		width: '65vw',
		margin: '1rem',
	},
};

const AboutMe = () => {
	return (
		<div style={styles.container}>
			<p style={styles.about}>
				Hi, my name is Tom and I am a full stack web developer specialising in
				React, MongoDB, Express.js and Node.js.
			</p>
		</div>
	);
};

export default AboutMe;
