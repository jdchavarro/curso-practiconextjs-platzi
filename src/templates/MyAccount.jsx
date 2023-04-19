import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<p className="label">Name</p>
						<p className="value">Camila Yokoo</p>
						<p className="label">Email</p>
						<p className="value">camilayokoo@gmail.com</p>
						<p className="label">Password</p>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
};

export default MyAccount;
