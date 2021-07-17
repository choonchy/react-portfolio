import React from 'react';
import ColourPalette from '../ColourPalette';

const styles = {
	about: {
		color: ColourPalette.darkPurple,
		backgroundColor: ColourPalette.lightYellow,
		padding: '1rem',
		textAlign: 'center',
		width: '65vw',
		margin: '1rem',
	},
};

const Resume = () => {
	return (
		<section style={styles.about}>This is where my resume will go</section>
	);
};

export default Resume;
