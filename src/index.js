const LocaleContext = React.createContext();

function App() {
  const [locale, setLocale] = useState('id');

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === 'id' ? 'en' : 'id';
    });
  };

  const contextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={contextValue}>
      {/* a whole app */}
      {/* a whole app */}
    </LocaleContext.Provider>
  );
}

/* 
Catatan: Memoization adalah teknik dalam meningkatkan performa aplikasi dengan cara
mempertahankan nilai--beserta referensi memorinya--yang "mahal" didapatkan 
untuk digunakan kembali ketika dibutuhkan.
*/