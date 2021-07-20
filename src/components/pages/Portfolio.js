import React from 'react';
import ColourPalette from '../ColourPalette';
import PortfolioImages from '../PortfolioImages';
import GitHubLogo from '../../images/GitHub Logo.png';
import './Portfolio.css';

const styles = {
	portfolio: {
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
	image: {
		width: '33vw',
		height: '20vw',
		margin: '2rem',
		padding: '1rem',
		borderRadius: '10px',
		backgroundColor: ColourPalette.lightYellow,
	},
	projects: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		marginLeft: '1rem',
		marginRight: '1rem',
	},
};

const Images = [
	PortfolioImages.noteTaker,
	PortfolioImages.staticPortfolio,
	PortfolioImages.thyWill,
	PortfolioImages.tipsyTricks,
	PortfolioImages.jsQuiz,
	PortfolioImages.dayPlanner,
];

const renderImages = () => {
	console.log(Images);
	console.log(PortfolioImages);
	return Images.map((image) => {
		return (
			<div className="project" style={styles.portfolio}>
				<img
					className="image"
					src={image.image}
					style={styles.image}
					alt="Preview of the application"
				></img>
				<a
					href={image.deployed}
					className="project-name"
					target="_blank"
					rel="noreferrer"
				>
					{image.name}
				</a>
				<a
					className="github-link"
					href={image.github}
					target="_blank"
					rel="noreferrer"
				>
					<img src={GitHubLogo} alt="The GitHub Logo" />
				</a>
			</div>
		);
	});
};

const Portfolio = () => {
	return (
		<div style={styles.portfolio}>
			<section style={styles.about}>This is where my portfolio will go</section>
			<div style={styles.projects}>{renderImages()}</div>
		</div>
	);
};

export default Portfolio;
