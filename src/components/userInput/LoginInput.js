import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function LoginInput({ login }) {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const invalidEmail = document.querySelector('.invalid-email');
  const invalidPassword = document.querySelector('.invalid-password');

  const validateInputHandler = () => {
    invalidEmail.classList.remove('text-pink-600');
    invalidPassword.classList.remove('text-pink-600');
    invalidEmail.classList.add('text-yellow-500');
    invalidPassword.classList.add('text-yellow-500');
    
    if (email.trim() === '' && password.trim() === '') {
      invalidEmail.classList.remove('hidden');
      invalidPassword.classList.remove('hidden');
      return true;
    }

    if (email.trim() === '') {
      invalidEmail.classList.remove('hidden');
      invalidPassword.classList.add('hidden');
      return true;
    }

    if (password.trim() === '') {
      invalidPassword.classList.remove('hidden');
      invalidEmail.classList.add('hidden');
      return true;
    }

    return false;
  }

  const invalidElement = () => {
    invalidEmail.classList.remove('hidden');
    invalidPassword.classList.remove('hidden');
    invalidEmail.classList.add('text-pink-600');
    invalidPassword.classList.add('text-pink-600');
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const validate = validateInputHandler();
    if (!validate) {
      const data = await login({ email, password });
      if (data === null) {
        invalidElement();
      }
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="w-full">
        <div className="w-full px-4 mb-8">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base md:text-lg font-semibold text-primary">Email</span>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="w-full bg-slate-200 text-dark mt-1 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="your@example.com" />
            <p className="mt-2 text-sm hidden invalid-email">Please provide a valid email address.</p>
          </label>
        </div>

        <div className="w-full px-4 mb-8">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base md:text-lg font-semibold text-primary">Password</span>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="w-full bg-slate-200 text-dark mt-1 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="your password" />
            <p className="mt-2 text-sm hidden invalid-password">Please provide a valid password.</p>
          </label>
        </div>
        <div className="w-full flex justify-center">
          <button className="text-base md:text-[18px] w-3/4 md:w-64 lg:w-80 font-semibold text-white bg-primary py-3 px-8 rounded-full shadow-lg hover:opacity-80 hover:shadow-lg transition duration-500">Sign In</button>
        </div>
      </div>
    </form>
  );
}


LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;