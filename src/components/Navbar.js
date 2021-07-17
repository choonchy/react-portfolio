import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<a
					href="#about-me"
					onClick={() => handlePageChange('About Me')}
					className={
						currentPage === 'About Me' ? 'nav-link active' : 'nav-link'
					}
				>
					About Me
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#portfolio"
					onClick={() => handlePageChange('Portfolio')}
					className={
						currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
					}
				>
					Portfolio
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#contact-me"
					onClick={() => handlePageChange('Contact Me')}
					className={
						currentPage === 'Contact Me' ? 'nav-link active' : 'nav-link'
					}
				>
					Contact Me
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#Resume"
					onClick={() => handlePageChange('Resume')}
					className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
				>
					Resume
				</a>
			</li>
		</ul>
	);
}

export default NavTabs;
