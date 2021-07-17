import React, { useState } from 'react';
import ColourPalette from './ColourPalette';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';

const styles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		background: ColourPalette.orange,
		padding: '1.5rem',
		height: '10vh',
		width: '100vw',
	},
	name: {
		display: 'flex',
		fontSize: '2vh',
		alignItems: 'center',
	},
};

export default function PageRender() {
	const [page, setPage] = useState('About Me');
	const renderPage = () => {
		if (page === 'About Me') {
			return <AboutMe />;
		}
		if (page === 'Portfolio') {
			return <Portfolio />;
		}
		if (page === 'Contact Me') {
			return <ContactMe />;
		}
		if (page === 'Resume') {
			return <Resume />;
		}
	};

	const handlePageChange = (page) => setPage(page);

	return (
		<div>
			<header style={styles.header}>
				<div style={styles.name}>Tom Chappell</div>
				<Navbar currentPage={page} handlePageChange={handlePageChange} />
			</header>
			<section>{renderPage()}</section>
		</div>
	);
}
