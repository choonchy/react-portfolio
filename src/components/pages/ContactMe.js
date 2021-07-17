import React, { useState } from 'react';
import ColourPalette from '../ColourPalette';

const styles = {
	message: {
		height: '100px',
		alignItems: 'top',
	},
};

const ContactMe = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleInputChange = (event) => {
		const { field, value } = event.target;

		if (field === 'name') {
			return setName(value);
		} else if (field === 'email') {
			return setEmail(value);
		} else if (field === 'message') {
			return setMessage(value);
		}
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		setName('');
		setEmail('');
		setMessage('');
	};
	return (
		<form className="form">
			<input
				value={name}
				name="name"
				onChange={handleInputChange}
				type="text"
				placeholder="Name"
			/>
			<input
				value={email}
				name="email"
				onChange={handleInputChange}
				type="text"
				placeholder="Email"
			/>
			<input
				value={message}
				style={styles.message}
				name="message"
				onChange={handleInputChange}
				type="text"
				placeholder="Write your message here"
			/>
			<button type="button" onClick={handleFormSubmit}>
				Submit
			</button>
		</form>
	);
};

export default ContactMe;
