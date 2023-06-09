import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label className="label">
              Name
              <input type="text" id="name" placeholder="Teff" className="input input-name" />
            </label>
            <label className="label">
              Email
              <input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />
            </label>
            <label className="label">
              Password
              <input type="password" id="password" placeholder="*********" className="input input-password" />
            </label>
          </div>
          <input type="submit" value="Create" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
