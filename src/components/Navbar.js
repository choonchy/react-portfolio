import React from 'react';
import './Navbar.css';

function NavTabs({ currentPage, handlePageChange }) {
	return (
		<ul className="navbar">
			<li>
				<a
					href="#about-me"
					onClick={() => handlePageChange('About Me')}
					className={
						currentPage === 'About Me'
							? 'navbar-item active-item'
							: 'navbar-item'
					}
				>
					About Me
				</a>
			</li>
			<li>
				<a
					href="#portfolio"
					onClick={() => handlePageChange('Portfolio')}
					className={
						currentPage === 'Portfolio'
							? 'navbar-item active-item'
							: 'navbar-item'
					}
				>
					Portfolio
				</a>
			</li>
			<li>
				<a
					href="#contact-me"
					onClick={() => handlePageChange('Contact Me')}
					className={
						currentPage === 'Contact Me'
							? 'navbar-item active-item'
							: 'navbar-item'
					}
				>
					Contact Me
				</a>
			</li>
			<li>
				<a
					href="#resume"
					onClick={() => handlePageChange('Resume')}
					className={
						currentPage === 'Resume' ? 'navbar-item active-item' : 'navbar-item'
					}
				>
					Resume
				</a>
			</li>
		</ul>
	);
}

export default NavTabs;
