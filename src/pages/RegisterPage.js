import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/userInput/RegisterInput';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className="w-full h-screen bg-slate-100">
      <div className="container h-full flex items-center">
        <div data-aos="fade-down" className="w-full md:w-3/4 lg:w-1/2 md:mx-auto bg-white rounded-lg shadow-xl py-6 px-2 md:-mt-48 md:px-20 md:py-14">
          <div className="ml-4 mb-6">
            <h2 className="text-3xl lg:text-4xl text-slate-600 font-semibold">New Account</h2>
            <p className="text-slate-500 mt-3">Complete the form below using your valid data.</p>
          </div>
          <div className="w-full mb-6">
            <RegisterInput register={onRegisterHandler} />
          </div>
          <div className="w-full flex justify-center mb-4">
            <Link to="/" className="block text-base md:text-[18px] text-center text-slate-100 bg-blue-400 s w-3/4 md:w-64 lg:w-80 font-semibold hadow-xl py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500">Sign In</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage;