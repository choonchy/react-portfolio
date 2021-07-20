import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './Footer';
import LinkedIn from '../images/LinkedIn Logo.png';

const styles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '1.5rem',
		height: '10vh',
		width: '100vw',
	},
	name: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: '3rem',
		alignItems: 'center',
		width: '10vw',
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
				<div className="name-logo" style={styles.name}>
					<span className="first-name">Tom</span>Chappell
				</div>
				<Navbar currentPage={page} handlePageChange={handlePageChange} />
				<div style={styles.name} className="name-logo">
					<a
						href="https://github.com/choonchy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={LinkedIn}
							className="col-md-4"
							style={{ width: '5vh' }}
							alt="LinkedIn Logo"
						/>
					</a>
				</div>
			</header>
			<section>{renderPage()}</section>
			<Footer />
		</div>
	);
}
