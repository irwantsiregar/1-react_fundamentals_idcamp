import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArchive, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { SiGoogletranslate } from 'react-icons/si';
import Context from '../../contexts/Context';
import DarkToggle from './DarkToggle';
import PropTypes from 'prop-types';

function NavMenu({ logout, name }) {
  const { theme, locale, toggleTheme, toggleLocale } = React.useContext(Context);
  const initialName = name.toUpperCase().split(" ").map((item)=> item.charAt(0));

  return (
    <nav id="nav-menu"
      className="hidden absolute py-4 bg-white shadow-lg rounded-lg w-[65%] right-4 top-[80%] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark lg:dark:bg-transparent dark:shadow-slate-500  ">
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
        <li className="group ml-5">
          <button onClick={logout} className="text-primary py-2 mx-4 flex group-hover:text-cyan-700 dark:text-slate-200"><FiLogOut className="text-2xl" />{initialName}</button>
        </li>
        <li className="mt-2 lg:mt-0 md:flex items-center ml-9 md:ml-3">
          <DarkToggle theme={theme} toggleTheme={toggleTheme} />
          <button onClick={toggleLocale} className="text-primary group-hover:text-cyan-700 dark:text-slate-200 font-bold md:pl-4 md:pt-0 pt-3">
            <div className="inline-flex border border-primary p-1 rounded dark:border-white">
              <SiGoogletranslate className="text-blue-600 text-2xl mr-1 dark:text-white" />
              {
                locale === 'id' ? <span className="bg-red-600 text-white px-1 rounded">ID</span> : <span className="bg-blue-500 text-white px-1 rounded">EN</span>
              }
            </div>
          </button>
        </li>
      </ul>
    </nav>
  )
}

NavMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default NavMenu;