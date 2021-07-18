import React, { useState } from 'react';
import ColourPalette from '../ColourPalette';
import { validateEmail } from '../../utils/helpers';

const styles = {
	input: {
		border: 'none',
		backgroundColor: ColourPalette.lightYellow,
		borderRadius: '30px',
		padding: '0.75rem',
		boxShadow: '3px 3px 3px 1px' + ColourPalette.orange,
	},
	message: {
		height: 'auto',
		border: 'none',
		backgroundColor: ColourPalette.lightYellow,
		borderRadius: '30px',
		padding: '0.75rem',
		marginBottom: '1rem',
		resize: 'vertical',
		boxShadow: '3px 3px 3px 1px' + ColourPalette.orange,
	},
	error: {
		margin: '1rem',
		textDecoration: 'underline',
		textAlign: 'center',
		width: '33vw',
	},
};

const ContactMe = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (!name || !email || !message) {
			setError('Please do not leave any fields blank');
			return;
		}

		if (!validateEmail(email)) {
			setError('Please use a valid email address');
			return;
		}

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<div>
			<h2>Contact Me</h2>
			<p>Hi! Nice to meet you!</p>
			<p>
				If you would like to get in contact with me, you can use this form to
				send me an email. I look forward to hearing from you!
			</p>
			<form className="form">
				<p>Name</p>
				<input
					value={name}
					style={styles.input}
					name="name"
					onChange={(event) => {
						setName(event.target.value);
					}}
					type="text"
					placeholder="Name"
				/>
				<p>Email</p>
				<input
					value={email}
					style={styles.input}
					name="email"
					onChange={(event) => {
						setEmail(event.target.value);
					}}
					type="text"
					placeholder="Email"
				/>
				<p>Your Message</p>
				<textarea
					value={message}
					style={styles.message}
					name="message"
					wrap="soft"
					onChange={(event) => {
						setMessage(event.target.value);
					}}
					type="text"
					placeholder="Write your message here"
				/>
				<button type="button" onClick={handleFormSubmit}>
					Submit
				</button>
			</form>
			{error && (
				<div style={styles.error}>
					<p>{error}</p>
				</div>
			)}
		</div>
	);
};

export default ContactMe;
