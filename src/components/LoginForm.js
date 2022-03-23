import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({}) {
	const [ details, setDetails ] = useState({ name: '', email: '', password: '' });

	const adminUser = {
		email: 'admin@admin.com',
		password: 'admin123'
	};

	const [ user, setUser ] = useState({ name: '', email: '' });
	const [ error, setError ] = useState('');

	const Login = (details) => {
		console.log(details);

		if (details.email == adminUser.email && details.password == adminUser.password) {
			console.log('Logged in');
			setUser({
				name: details.name,
				email: details.email
			});
		} else {
			console.log('Ne staa brat');
		}
	};

	const LogOut = () => {
		setUser({ name: '', email: '' });
	};

	const submitHandler = (e) => {
		e.preventDefault();

		Login(details);
	};
	return (
		<form onSubmit={submitHandler}>
			<h3>New LogIn</h3>
			{error != '' ? <div className="error">{error}</div> : ''}
			<div className="col-md-4">
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="type name"
					onChange={(e) => setDetails({ ...details, name: e.target.value })}
					value={details.name}
					className="form-control"

				/>
			</div>
			<div className="col-md-4">
				<label htmlFor="email">Email: </label>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="type email"
					onChange={(e) => setDetails({ ...details, email: e.target.value })}
					value={details.email}
					className="form-control"
					


				/>
			</div>
			<div className="col-md-4">
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="type password"
					onChange={(e) => setDetails({ ...details, password: e.target.value })}
					value={details.password}
					className="form-control"
					


				/>
			</div>
			<div className="mb-3">
			<button type="submit">Submit</button>
			</div>
			<Link to="/register">Register</Link>
		</form>
	);
}

export default LoginForm;
