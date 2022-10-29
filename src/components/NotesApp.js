import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ThemeContext from '../contexts/Context';

function NotesApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState(() => {
    return localStorage.getItem('locale') || 'id'
  });
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'light'
  });
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  }

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });

    document.querySelector('html').classList.toggle('dark');
  }, [theme]);

  const localeMemo = React.useMemo(() => {
    return { locale, toggleLocale }
  }, [locale]);

  const themeMemo = React.useMemo(() => {
    return { theme, toggleTheme }
  }, [theme]);

  const localeContextValue = {
    ...localeMemo,
    ...themeMemo
  };

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  const onLogout = async () => {
    setAuthedUser(null);
    await putAccessToken('');
    navigate('/');
  }

  function hamburgerMenu(event) {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    if (event.target !== hamburger && event.target !== navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <main>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>

    )
  }

  return (
    <>
      <ThemeContext.Provider value={localeContextValue}>
        <Header hamburger={hamburgerMenu} logout={onLogout} name={authedUser.name} />
        <Main hamburger={hamburgerMenu} />
        <Footer hamburger={hamburgerMenu} />
      </ThemeContext.Provider>
    </>
  );
}

export default NotesApp;
