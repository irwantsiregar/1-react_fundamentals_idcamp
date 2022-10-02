import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArchive, FiPlusCircle } from 'react-icons/fi';
import DarkToggle from './DarkToggle';
import PropTypes from 'prop-types';

function NavMenu({ dark }) {
  return (
    <nav id="nav-menu"
      className="hidden absolute py-4 bg-white shadow-lg rounded-lg max-w-[180px] w-full right-4 top-[80%] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark lg:dark:bg-transparent dark:shadow-slate-500  ">
      <ul className="block lg:flex">
        <li className="group ml-5">
          <Link to="/" className="text-primary py-2 mx-4 flex group-hover:text-cyan-700 dark:text-slate-200"><FiHome className="text-2xl" /></Link>
        </li>
        <li className="group ml-5">
          <Link to="/notes/new" className="text-primary py-2 mx-4 flex group-hover:text-cyan-700 dark:text-slate-200"><FiPlusCircle className="text-2xl" /></Link>
        </li>
        <li className="group ml-5">
          <Link to="/archived" className="text-primary py-2 mx-4 flex group-hover:text-cyan-700 dark:text-slate-200"><FiArchive className="text-2xl" /></Link>
        </li>
        <li className="mt-3 lg:mt-0 flex items-center pl-8">
          <DarkToggle darkToggle={dark} />
        </li>
      </ul>
    </nav>
  )
}

NavMenu.propTypes = {
  dark: PropTypes.func.isRequired
}

export default NavMenu;