import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function RegisterInput({ register }) {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      register({ name, email, password });
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="w-full">
        <div className="w-full px-4 mb-8">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base md:text-lg font-semibold text-primary">Name</span>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="w-full bg-slate-200 text-dark mt-1 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="John Doe" />
            <p className="mt-2 text-sm text-yellow-500 hidden invalid-name">Please provide a username and it cannot be empty!</p>
          </label>
        </div>
        <div className="w-full px-4 mb-8">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base md:text-lg font-semibold text-primary">Email</span>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="w-full bg-slate-200 text-dark mt-1 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="your@example.com" />
            <p className="mt-2 text-sm text-yellow-500 hidden invalid-email">Please provide a valid email address and it cannot be empty</p>
          </label>
        </div>
        <div className="w-full px-4 mb-8">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base md:text-lg font-semibold text-primary">Password</span>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="w-full bg-slate-200 text-dark mt-1 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="your password" />
            <p className="mt-2 text-sm text-yellow-500 hidden invalid-password">Please provide a password and it cannot be empty</p>
          </label>
        </div>
        <div className="w-full px-4 mb-8">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base md:text-lg font-semibold text-primary">Confirm Password</span>
            <input type="password" id="confirmPassword" name="confirm_password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="w-full bg-slate-200 text-dark mt-1 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="your confirm password" />
            <p className="mt-2 text-sm text-yellow-500 hidden invalid-password">Please provide a confirm password and it cannot be empty</p>
          </label>
        </div>
        <div className="w-full flex justify-center">
          <button className="text-base md:text-[18px] w-3/4 md:w-64 lg:w-80 font-semibold text-white bg-primary py-3 px-8 rounded-full shadow-lg hover:opacity-80 hover:shadow-lg transition duration-500">Create Account</button>
        </div>
      </div>
    </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;