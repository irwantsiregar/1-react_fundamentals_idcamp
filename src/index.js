const LocaleContext = React.createContext('id');
const ThemeContext = React.createContext('light');
const UserContext = React.createContext({ id: 'user-1', name: 'Dicoding' });

function Content() {
  const locale = React.useContext(LocaleContext);
  const theme = React.useContext(ThemeContext);
  const user = React.useContext(UserContext);

  return (
    <Article locale={locale} theme={theme} user={user} />
  );
}