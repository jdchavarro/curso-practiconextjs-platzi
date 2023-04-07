import '@styles/globals.css';
import AppContext from '@context/AppContext';
import useInicialState from 'hooks/useInitialState';

function MyApp({ Component, pageProps }) {
  const inicialState = useInicialState();
  return (
    <AppContext.Provider value={inicialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
